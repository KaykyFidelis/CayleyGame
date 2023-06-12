import React from 'react'

import { Button } from 'react-bootstrap'

const ButtonLink = ({
  route,
  value,
  className,
}: {
  route: string
  value: string
  className: string
}) => {
  return (
    <Button
      style={{
        backgroundColor: '#F5BBD1',
        fontSize: '1.5rem',
        textTransform: 'capitalize',
        borderRadius: '5px',
        color: 'white',
        height: '100%',
        width: '90%',
      }}
      href={route}
      variant="contained"
      className={className}
    >
      {value}
    </Button>
  )
}

export default ButtonLink
