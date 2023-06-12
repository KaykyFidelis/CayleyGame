import React, { useState, useEffect, useRef } from 'react'

import { chunk } from 'lodash'
import _ from 'lodash'
import { Container, Table, Col, Row, Image } from 'react-bootstrap'

import { useParams } from '@redwoodjs/router'

import Square from '../Square/Square'

function getPermutacoes(array, size) {
  const results = []

  function permutar(permutacaoAtual, elementosRestantes) {
    if (permutacaoAtual.length === size) {
      results.push(permutacaoAtual)
      return
    }

    for (let i = 0; i < elementosRestantes.length; i++) {
      const proximaPermutacao = permutacaoAtual.concat(elementosRestantes[i])
      const resto = elementosRestantes
        .slice(0, i)
        .concat(elementosRestantes.slice(i + 1))
      permutar(proximaPermutacao, resto)
    }
  }

  permutar([], array)
  return results
}

function checaIdentidade(tableSize: number) {
  let rowSequence = true
  let columnSequence = true
  for (let i = 0; i < tableSize; i++) {
    rowSequence = true
    columnSequence = true
    for (let j = 0; j < tableSize; j++) {
      if (
        !document
          .getElementById('squareImage-' + (i * tableSize + j))
          .src.endsWith(j + 1 + '.png')
      ) {
        rowSequence = false
        break
      }

      if (
        !document
          .getElementById('squareImage-' + (j * tableSize + i))
          .src.endsWith(i + 1 + j + '.png')
      ) {
        columnSequence = false
        break
      }
    }
    if (rowSequence && columnSequence) return i
  }
  return -1
}

function checaAssociatividade(tableSize: number) {
  const frutas: number[] = []
  for (let i = 0; i < tableSize; i++) frutas.push(i)

  const permutacoes: number[] = getPermutacoes(frutas, 3)
  for (const permutacao of permutacoes) {
    const frutaA = permutacao[0]
    const frutaB = permutacao[1]
    const frutaC = permutacao[2]

    const resultadoAB: number = frutaA * tableSize + frutaB
    const frutaABUrl: string = document.getElementById(
      'squareImage-' + resultadoAB
    ).src
    const frutaAB = parseInt(frutaABUrl.at(frutaABUrl.length - 5), 10) - 1
    const resultadoDireita: number = frutaAB * tableSize + frutaC
    const frutaResultadoDireitaUrl = document.getElementById(
      'squareImage-' + resultadoDireita
    ).src

    const resultadoEsquerda: number = frutaC * tableSize + frutaAB
    const frutaResultadoEsquerdaUrl = document.getElementById(
      'squareImage-' + resultadoEsquerda
    ).src

    if (frutaResultadoDireitaUrl !== frutaResultadoEsquerdaUrl) return false
  }
  return true
}

function checaInversos(size, frutaIdentidade) {
  for (let i = 0; i < size; i++) {
    const frutaA = i
    for (let j = 0; j < size; j++) {
      const frutaB = j
      const frutaABUrl = document.getElementById(
        'squareImage-' + (i * size + j)
      ).src
      const frutaAB = frutaABUrl.at(frutaABUrl.length - 5) - 1

      const frutaBAUrl = document.getElementById(
        'squareImage-' + (j * size + i)
      ).src
      const frutaBA = frutaBAUrl.at(frutaBAUrl.length - 5) - 1
      if (frutaAB === frutaBA && frutaAB === frutaIdentidade) break
      else if (j == size - 1) return false
    }
  }
  return true
}

const SquareTable = ({ size, rowCol }) => {
  const [selectedImage, setSelectedImage] = useState('1')
  const { identidade } = useParams()
  const [frutaIdentidade, setFrutaIdentidade] = useState(
    identidade === 'true' ? rowCol : -1
  )
  const [temAssociatividade, setAssociatividade] = useState(false)
  const [temInversos, setInversos] = useState(false)

  const handleSquareImageChange = () => {
    if (identidade != 'true') {
      setTimeout(() => setFrutaIdentidade(checaIdentidade(size)), 250)
    }
    if (frutaIdentidade != -1) {
      setTimeout(() => {
        setInversos(checaInversos(size, frutaIdentidade))
      }, 150)

      if (temInversos) {
        setTimeout(() => {
          setAssociatividade(checaAssociatividade(size))
        }, 150)
      }
    }
    if (temAssociatividade && temInversos) console.log('Você venceu!')
  }

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName)
  }

  const renderImages = ({ size }) => {
    const images = []

    // Loop para gerar as imagens
    for (let i = 1; i < size; i += 2) {
      const image1 = (
        <Col
          className="d-flex align-items-center justify-content-center mb-3"
          key={`${i}`}
        >
          <Image
            src={`/frutas/${i}.png`}
            alt={`Image ${i}`}
            style={{ width: '100%' }}
            fluid
            onClick={() => handleImageClick(`${i}`)}
          />
        </Col>
      )
      const image2 = (
        <Col
          className="d-flex align-items-center justify-content-center mb-3"
          key={`${i + 1}`}
        >
          <Image
            src={`/frutas/${i + 1}.png`}
            alt={`Image ${i + 1}`}
            style={{ width: '100%' }}
            fluid
            onClick={() => handleImageClick(`${i + 1}`)}
          />
        </Col>
      )

      const imageGroup = (
        <Row
          className="d-flex align-items-end justify-content-center h-20"
          key={`image-group-${i}`}
        >
          {image1}
          {image2}
        </Row>
      )

      images.push(imageGroup)
    }

    return images
  }

  const renderTable = ({ size }) => {
    const rows = []
    for (let i = 0; i < size; i++) {
      const columns = []
      for (let j = 0; j < size; j++) {
        const squareNumber = i * size + j
        let cor = '#F5BBD1'
        let value = 4
        if ((j == rowCol || i == rowCol) && identidade == 'true') {
          if (i == rowCol) value = j + 1
          else if (j == rowCol) value = i + 1
          cor = '#FF8CB8'
          columns.push(
            <Square
              cor={cor}
              padrao={value}
              frutaAtual={selectedImage}
              disabled
              onClick={handleSquareImageChange}
              imageId={squareNumber}
            />
          )
        } else {
          columns.push(
            <Square
              cor={cor}
              padrao={value}
              frutaAtual={selectedImage}
              onClick={handleSquareImageChange}
              imageId={squareNumber}
            />
          )
        }
      }
      rows.push(<tr key={i}>{columns}</tr>)
    }
    return rows
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: '92vh' }}
    >
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: '#6187DA',
          width: '50%',
          height: '95%',
          borderRadius: '10px',
        }}
      >
        <Table
          className="table-borderless mt-3"
          style={{ backgroundColor: '#6187DA', width: '100%', height: '100%' }}
        >
          <tbody>{renderTable({ size })}</tbody>
        </Table>
      </Container>

      <Container
        className="d-flex flex-column align-items-center"
        style={{
          backgroundColor: '#6187DA',
          width: '10%',
          height: '75%',
          borderRadius: '10px',
          marginLeft: '1rem',
        }}
      >
        <Container
          className="d-flex flex-column align-items-center"
          style={{
            backgroundColor: '#6187DA',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        >
          <h1 className="mt-3 text-center text-white">Fruta Selecionada</h1>
          <Image
            src={`/frutas/${selectedImage}.png`}
            alt="Atual"
            style={{ width: '100%' }}
          />
        </Container>
        {renderImages({ size })}
      </Container>
    </div>
  )
}

export default SquareTable
