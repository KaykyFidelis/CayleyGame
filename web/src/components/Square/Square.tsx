import React, { useState, useRef } from 'react'

import { Image } from 'react-bootstrap'

const Square = ({
  cor,
  padrao,
  frutaAtual,
  disabled,
  onClick,
  imageId,
}: {
  cor: string
  padrao: number
  frutaAtual: string
  disabled?: boolean
  onClick: any
  imageId: number
}) => {
  const [selectedImage, setSelectedImage] = useState(`${padrao}`)
  const imageRef = useRef(null)

  const handleSquareClick = (frutaAtual) => {
    setSelectedImage(frutaAtual)
    onClick() // Invoke the onClick prop with the desired data
  }

  return (
    <td style={{ backgroundColor: '#6187DA', width: '10%', height: '10%' }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: `${cor}`,
          borderRadius: '5%',
        }}
        onClick={() => handleSquareClick(frutaAtual)}
        disabled={disabled}
      >
        <Image
          id={'squareImage-' + imageId}
          ref={imageRef}
          src={`/frutas/${selectedImage}.png`}
          alt="Atual"
          style={{ maxWidth: '65%', maxHeight: '65%' }}
        />
      </button>
    </td>
  )
}

export default Square
