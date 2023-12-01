import Link from "next/link"
export default function Navbar() {
  return (
    <nav>
        <div>
            <h1>KongShop</h1>
        </div>
        <ul>
            <Link href='/'>Home</Link>
            <Link href='/users/product'>Products</Link>
            <Link href='/users/manage'>Manage System</Link>
        </ul>
    </nav>
  )
}
