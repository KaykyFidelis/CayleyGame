import { Button } from '@mui/material'

const ButtonLink = ({ route, value }: { route: string; value: string }) => {
  return (
    <Button
      sx={{
        bgcolor: '#F5BBD1',
        typography: 'h4',
        textTransform: 'capitalize',
        borderRadius: 5,
      }}
      href={route}
      variant="contained"
    >
      {value}
    </Button>
  )
}

export default ButtonLink
