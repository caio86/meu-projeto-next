import { Metadata } from "next";

export const metadata: Metadata = {
  title: "detalhes de produtos"
}
export default function Details({ params }: { params: { details: string } }) {
  const { details } = params
  console.log(details)
  return (
    <h1>Detalhes do produto: {details}</h1>
  )
}
