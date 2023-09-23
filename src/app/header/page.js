'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Header() {
  const onClick = (redirect) => {
    window.location.href = redirect
  }

  const [navBar, setNavBar] = useState(true);

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.logo}>
        <picture>
          <img src={'/logo.svg'} height={150} width={150} alt='logo'></img>
        </picture>
      </div>
      <div className={styles.menu}>
        <nav className={navBar ? styles.menuContainer : styles.menuContainerActive}>
          <div onClick={()=>setNavBar(navBar===false)}><a onClick={() => onClick('/home')}>Inicio</a></div>
          <div onClick={()=>setNavBar(navBar===false)}><a onClick={() => onClick('/application')}>Tarjeta de crédito</a> </div>
          <div onClick={()=>setNavBar(navBar===false)}><a onClick={() => onClick('/search')}>Estado de solicitud</a></div>
        </nav>
      </div>
      <div>
      <button className={styles.menuLogo} onClick={()=>setNavBar(!navBar)}>
        {navBar ? (
          <Image src={'/menu.svg'} alt='menu_logo' height={50} width={50}/>
        ): (
          <Image src={'/x.svg'} alt='x_svg' height={30} width={30}/>
        )}
      </button>
      </div>
    </main>
    </div>
  )
}
