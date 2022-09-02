import { Container } from "@nextui-org/react"
import { Loading } from "@nextui-org/react"

type Props = {}

export default function LoadingComponent({}: Props) {
  return (
    <div class="w-screen h-screen grid place-content-center">
      <Loading size='xl' type='points'/>      
    </div>
  )
}