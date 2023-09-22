'use client';

import Image from 'next/image'
import styles from './page.module.css'

export default function Header() {
  const onClick = (redirect) => {
    window.location.href = redirect
  }
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Image src={'/logo.svg'} width={150} height={150} alt='centauros_bank' />
      </div>
      <div className={styles.menu}>
        <nav>
          <a onClick={() => onClick('/home')}>Inicio</a>
          <a onClick={() => onClick('/application')}>Tarjeta de crédito</a> 
          <a onClick={() => onClick('/search')}>Estado de solicitud</a>
        </nav>
      </div>
    </main>
  )
}
