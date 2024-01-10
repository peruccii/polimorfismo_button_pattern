import { Button } from './components/Button'

export default function Home() {
  return (
    <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center gap-4'>
    <Button>Tipo Button</Button>
    <Button asChild><a href="#">Botao tipo link(a)</a></Button>
    <Button type='submit'>Botao de type submit</Button>
   </div>
  )
}
