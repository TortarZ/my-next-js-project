import React from 'react'
import Link from 'next/link'
import styles from './styles/Navbar.module.css'

const Managebutton = () => {
  return (
    <div>
        <Link href='#' className={styles.link} role="button" data-bs-toggle="dropdown" aria-expanded="false" ><li>Manage Systems</li></Link>
            <ul className="dropdown-menu">
                <Link href='/manage' className='dropdown-item'>จัดการสินค้า</Link>
                <Link href='/saveproduct' className='dropdown-item'>บันทึกสินค้า</Link>
            </ul>
    </div>
  )
}

export default Managebutton