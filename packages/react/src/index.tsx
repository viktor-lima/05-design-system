import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
  height: '$10',
})

interface indexProps {
  // adicione suas props aqui
}

export function App(props: indexProps) {
  return (
    <div>
      <Button>Hello Word</Button>
    </div>
  )
}
