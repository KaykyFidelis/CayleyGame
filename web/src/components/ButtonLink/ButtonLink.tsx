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
        justifyContent: 'center',
        borderRadius: '5px',
        color: 'white',
        width: '90%',
        height: '100%',
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
