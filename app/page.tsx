import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <Link href="/users">User</Link>
      <ProductCard/>
    </main>
  )
}
