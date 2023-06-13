import React, { useState, useEffect } from 'react'

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
  for (let i = 1; i <= tableSize; i++) {
    rowSequence = true
    columnSequence = true
    for (let j = 1; j <= tableSize; j++) {
      if (
        !document
          .getElementById('squareImage-' + (i * tableSize + j))
          .src.endsWith(j + '.png')
      ) {
        rowSequence = false
        break
      }

      if (
        !document
          .getElementById('squareImage-' + (j * tableSize + i))
          .src.endsWith(i - 1 + j + '.png')
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
  for (let i = 1; i <= tableSize; i++) frutas.push(i)

  const permutacoes: number[] = getPermutacoes(frutas, 3)
  for (const permutacao of permutacoes) {
    const frutaA = permutacao[0]
    const frutaB = permutacao[1]
    const frutaC = permutacao[2]

    const resultadoAB: number = frutaA * tableSize + frutaB
    const frutaABUrl: string = document.getElementById(
      'squareImage-' + resultadoAB
    ).src
    const frutaAB = parseInt(frutaABUrl.at(frutaABUrl.length - 5), 10)
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
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const frutaABUrl = document.getElementById(
        'squareImage-' + (i * size + j)
      ).src
      const frutaAB = parseInt(frutaABUrl.at(frutaABUrl.length - 5))

      const frutaBAUrl = document.getElementById(
        'squareImage-' + (j * size + i)
      ).src
      const frutaBA = parseInt(frutaBAUrl.at(frutaBAUrl.length - 5))
      if (frutaAB === frutaBA && frutaAB === frutaIdentidade) break
      else if (j == size) return false
    }
  }
  return true
}

function checaCancelamento(size: number) {
  const rows: Set<number>[] = []
  const columns: Set<number>[] = []

  for (let i = 1; i <= size; i++) {
    rows.push(new Set())
    columns.push(new Set())
    for (let j = 1; j <= size; j++) {
      const frutaLinha = document.getElementById(
        'squareImage-' + (i * size + j)
      )
      const frutaColuna = document.getElementById(
        'squareImage-' + (j * size + i)
      )
      rows[i - 1].add(parseInt(frutaLinha.src.at(frutaLinha.src.length - 5)))
      columns[i - 1].add(
        parseInt(frutaColuna.src.at(frutaColuna.src.length - 5))
      )
    }
    if (rows[i - 1].size !== size || columns[i - 1].size !== size) return false
  }
  console.log(rows, columns)
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
  const [temCancelamento, setCancelamento] = useState(false)

  const handleSquareImageChange = () => {
    if (identidade !== 'true') {
      setFrutaIdentidade(checaIdentidade(size))
    }
    setInversos(checaInversos(size, frutaIdentidade))
    setAssociatividade(checaAssociatividade(size))
    setCancelamento(checaCancelamento(size))
  }

  useEffect(() => {
    if (
      temAssociatividade &&
      temInversos &&
      frutaIdentidade !== -1 &&
      temCancelamento
    ) {
      alert('Você venceu!')
    }
  }, [temAssociatividade, temInversos, frutaIdentidade, temCancelamento])

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName)
  }

  const verificaIdentidade = () => {
    let saida1
    let saida2
    let percentual
    if (frutaIdentidade !== -1) {
      saida1 = `/frutas/${frutaIdentidade}.png`
      saida2 = 'é a identidade'
      percentual = 10
      return (
        <Row className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={saida1}
              alt="Atual"
              style={{ width: `${percentual}%` }}
            />
            <h1 className="ml-1 text-white">{saida2}</h1>
          </div>
        </Row>
      )
    } else {
      saida1 = '/not.png'
      saida2 = 'Ainda não há identidade definida'
      percentual = 7
      return (
        <Row className="d-flex align-items-center">
          <div className="d-flex align-center justify-content-start ml-4 mt-2">
            <Image
              src={saida1}
              alt="Atual"
              style={{ width: `${percentual}%` }}
            />
            <h1 className="ml-1 text-white">{saida2}</h1>
          </div>
        </Row>
      )
    }
  }

  const verificaAssociatividade = () => {
    let saida1
    let saida2
    if (temAssociatividade === true) {
      saida1 = `/yes.png`
      saida2 = 'A tabela respeita a associatividade'
    } else {
      saida1 = '/not.png'
      saida2 = 'A tabela não é associativa'
    }
    return (
      <Row className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-start ml-4 mt-2">
          <Image src={saida1} alt="Atual" style={{ width: '7%' }} />
          <h1 className="ml-1 text-white">{saida2}</h1>
        </div>
      </Row>
    )
  }

  const verificaInverso = () => {
    let saida1
    let saida2
    if (temInversos === true) {
      saida1 = `/yes.png`
      saida2 = 'Os inversos obedecem à propriedade'
    } else {
      saida1 = '/not.png'
      saida2 = 'Nem todos os inversos estão corretos'
    }
    return (
      <Row className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-start ml-4 mt-2">
          <Image src={saida1} alt="Atual" style={{ width: '7%' }} />
          <h1 className="ml-1 text-white">{saida2}</h1>
        </div>
      </Row>
    )
  }

  const verificaCancelamento = () => {
    let saida1
    let saida2
    if (temCancelamento) {
      saida1 = `/yes.png`
      saida2 = 'Não há frutas repetidos em uma direção'
    } else {
      saida1 = '/not.png'
      saida2 = 'Há frutas repetidas/vazios em uma direção'
    }
    return (
      <Row className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-start mb-3 ml-4 mt-2">
          <Image src={saida1} alt="Atual" style={{ width: '7%' }} />
          <h1 className="ml-1 text-white">{saida2}</h1>
        </div>
      </Row>
    )
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

    const image3 = (
      <Col
        className="d-flex align-items-center justify-content-center mb-3"
        key={`${size + 1}`}
      >
        <Image
          src={`/frutas/${size}.png`}
          alt={`Image ${size}`}
          style={{ width: '50%' }}
          fluid
          onClick={() => handleImageClick(`${size}`)}
        />
      </Col>
    )

    const imageGroup2 = (
      <Row
        className="d-flex align-items-end justify-content-center h-20"
        key={`image-group-${size}`}
      >
        {image3}
      </Row>
    )
    images.push(imageGroup2)

    return images
  }

  const renderTable = ({ size }) => {
    const rows = []
    for (let i = 0; i <= size; i++) {
      // Adiciona "i <= size" em vez de "i < size"
      const columns = []
      for (let j = 0; j <= size; j++) {
        // Adiciona "j <= size" em vez de "j < size"
        const squareNumber = i * size + j
        let cor = '#F5BBD1'
        let value = 4
        if (i == 0 && j == 0) {
          cor = '#FF8CB8'
          columns.push(
            <Square
              cor={cor}
              padrao={'logo_ufcg_padrao'}
              frutaAtual={selectedImage}
              onClick={handleSquareImageChange}
              imageId={squareNumber}
              disabled
            />
          )
        }
        if (i != 0 && j == 0) {
          cor = '#FF8CB8'
          value = i
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
        }
        if (i == 0 && j != 0) {
          cor = '#FF8CB8'
          value = j
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
        }
        if (
          (j == rowCol || i == rowCol) &&
          identidade == 'true' &&
          i != 0 &&
          j != 0
        ) {
          if (i == rowCol) {
            cor = '#87FF9A'
            value = j
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
          } else if (j == rowCol) {
            cor = '#87FF9A'
            value = i
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
          }
        } else if (i != 0 && j != 0) {
          value = 0
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
      <Container
        className="d-flex flex-column"
        style={{
          backgroundColor: '#6187DA',
          width: '25%',
          borderRadius: '10px',
        }}
      >
        <Row>
          <h1 className="mb-3 mt-3 text-center text-white">
            Diagnóstico Atual:
          </h1>
        </Row>
        {verificaIdentidade()}
        {verificaAssociatividade()}
        {verificaInverso()}
        {verificaCancelamento()}
      </Container>
    </div>
  )
}

export default SquareTable
