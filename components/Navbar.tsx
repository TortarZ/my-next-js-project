import Link from "next/link"
import styles from './styles/Navbar.module.css'
import Managebutton from "./Managebutton"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div>
            <h1>
              <Link href='/' className={styles.linklogo}>K-Shop</Link>
            </h1> 
        </div>
        <ul className={styles.ulitem}>
            <Link href='/' className={styles.link}><li>About</li></Link>
            <Link href='/product' className={styles.link}><li>Product</li></Link>
            <Managebutton/>
        </ul>
    </nav>
  )
}
