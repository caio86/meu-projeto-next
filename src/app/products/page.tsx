import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produtos"
}
export default function Products() {
  const produtos = [
    "Produto 1",
    "Produto 2",
    "Produto 3",
    "Produto 4",
  ]
  return (
    <>
      <h1>Produtos</h1>
      {produtos.map((produto, index) => (
        <Link href={`/products/${index + 1}`}>
          <h1>{produto}</h1>
        </Link>
      ))}
    </>
  )
}
