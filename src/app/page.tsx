import Image from "next/image"
import development from "@/app/development.png"

export default function Home() {
  return (
    <main className="">
      <h1>Hello World!</h1>
      <Image src={development} alt="icon of development" />
    </main>
  )
}
