import React, { useState, useEffect } from 'react'

import { Container, Table, Col, Row, Image } from 'react-bootstrap'

import { useParams } from '@redwoodjs/router'

import Square from '../Square/Square'

function getPermutacoes(array: number[], tamanhoArray: number) {
  const results: number[][] = []

  function permutar(permutacaoAtual: number[], elementosRestantes: number[]) {
    if (permutacaoAtual.length === tamanhoArray) {
      results.push(permutacaoAtual)
      return
    }

    elementosRestantes.forEach((elemento, indice) => {
      const proximaPermutacao = [...permutacaoAtual, elemento]
      const resto = elementosRestantes.filter((_, i) => i !== indice)
      permutar(proximaPermutacao, resto)
    })
  }

  permutar([], array)
  return results
}

function checaIdentidade(tamanhoTabela: number) {
  for (let i = 1; i <= tamanhoTabela; i++) {
    let sequenciaLinhaCorreta = true
    let sequenciaColunaCorreta = true

    for (let j = 1; j <= tamanhoTabela; j++) {
      const numeroIdFrutaLinha = i * tamanhoTabela + j
      const numeroIdFrutaColuna = j * tamanhoTabela + i

      const imagemFrutaLinha = document.getElementById(
        'squareImage-' + numeroIdFrutaLinha
      ) as HTMLImageElement
      const imagemFrutaSrcLinha = imagemFrutaLinha.src

      const imagemFrutaColuna = document.getElementById(
        'squareImage-' + numeroIdFrutaColuna
      ) as HTMLImageElement
      const imagemFrutaSrcColuna = imagemFrutaColuna.src

      if (!imagemFrutaSrcLinha.endsWith(j + '.png')) {
        sequenciaLinhaCorreta = false
        break
      }

      if (!imagemFrutaSrcColuna.endsWith(i - 1 + j + '.png')) {
        sequenciaColunaCorreta = false
        break
      }
    }
    if (sequenciaLinhaCorreta && sequenciaColunaCorreta) return i
  }
  return -1
}

function checaAssociatividade(tamanhoTabela: number) {
  const frutas = Array.from(
    { length: tamanhoTabela },
    (_, indice) => indice + 1
  )
  const permutacoes = getPermutacoes(frutas, 3)

  for (const permutacao of permutacoes) {
    const [frutaA, frutaB, frutaC] = permutacao

    const resultadoAB: number = frutaA * tamanhoTabela + frutaB

    const frutaABImagem = document.getElementById(
      'squareImage-' + resultadoAB
    ) as HTMLImageElement
    const frutaABSrc = frutaABImagem.src
    const frutaAB = parseInt(frutaABSrc.at(frutaABSrc.length - 5), 10)

    const resultadoDireita = frutaAB * tamanhoTabela + frutaC
    const frutaResultadoDireitaImagem = document.getElementById(
      'squareImage-' + resultadoDireita
    ) as HTMLImageElement
    const frutaResultadoDireitaSrc = frutaResultadoDireitaImagem.src

    const resultadoEsquerda = frutaC * tamanhoTabela + frutaAB
    const frutaResultadoEsquerdaImagem = document.getElementById(
      'squareImage-' + resultadoEsquerda
    ) as HTMLImageElement
    const frutaResultadoEsquerdaSrc = frutaResultadoEsquerdaImagem.src

    if (frutaResultadoDireitaSrc !== frutaResultadoEsquerdaSrc) return false
  }
  return true
}

function checaInversos(tamanhoTabela: number, frutaIdentidade: number) {
  for (let i = 1; i <= tamanhoTabela; i++) {
    for (let j = 1; j <= tamanhoTabela; j++) {
      const frutaABImagem = document.getElementById(
        'squareImage-' + (i * tamanhoTabela + j)
      ) as HTMLImageElement
      const frutaABSrc = frutaABImagem.src

      const frutaAB = parseInt(frutaABSrc.at(frutaABSrc.length - 5))

      const frutaBAImagem = document.getElementById(
        'squareImage-' + (j * tamanhoTabela + i)
      ) as HTMLImageElement
      const frutaBASrc = frutaBAImagem.src

      const frutaBA = parseInt(frutaBASrc.at(frutaBASrc.length - 5))

      if (frutaAB === frutaBA && frutaAB === frutaIdentidade) break
      else if (j === tamanhoTabela) return false
    }
  }
  return true
}

function checaCancelamento(tamanhoTabela: number) {
  const linhas: Set<number>[] = []
  const colunas: Set<number>[] = []

  for (let i = 1; i <= tamanhoTabela; i++) {
    const linha: Set<number> = new Set()
    const coluna: Set<number> = new Set()

    for (let j = 1; j <= tamanhoTabela; j++) {
      const frutaLinhaImagem = document.getElementById(
        'squareImage-' + (i * tamanhoTabela + j)
      ) as HTMLImageElement
      const frutaLinhaSrc = frutaLinhaImagem.src
      const frutaLinha = parseInt(frutaLinhaSrc.at(frutaLinhaSrc.length - 5))

      const frutaColunaImagem = document.getElementById(
        'squareImage-' + (j * tamanhoTabela + i)
      ) as HTMLImageElement
      const frutaColunaSrc = frutaColunaImagem.src
      const frutaColuna = parseInt(frutaColunaSrc.at(frutaColunaSrc.length - 5))

      linha.add(frutaLinha)
      coluna.add(frutaColuna)
    }

    if (
      linha.size !== tamanhoTabela ||
      coluna.size !== tamanhoTabela ||
      linha.has(0) ||
      coluna.has(0)
    )
      return false
    linhas.push(linha)
    colunas.push(coluna)
  }
  return true
}

const SquareTable = ({ size, rowCol }: { size: number; rowCol: number }) => {
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
      setTimeout(() => alert('Você venceu!'), 200)
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
    } else {
      saida1 = '/not.png'
      saida2 = 'Ainda não há identidade definida'
      percentual = 7
    }
    return (
      <Row className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-center">
          <Image src={saida1} alt="Atual" style={{ width: `${percentual}%` }} />
          <h1 className="ml-1 text-white">{saida2}</h1>
        </div>
      </Row>
    )
  }

  const verificaAssociatividade = () => {
    let saida1
    let saida2
    if (temAssociatividade) {
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
              padrao={value.toString()}
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
              padrao={value.toString()}
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
                padrao={value.toString()}
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
                padrao={value.toString()}
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
              padrao={value.toString()}
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
