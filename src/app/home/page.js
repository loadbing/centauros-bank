'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Button from '../button/page'

export default function Home() {

  const onClick = (redirect) => {
    window.location.href = redirect
  }

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Solicita tu crédito</h1>
        <h1>¡Ahora!</h1>
        <div className={styles.description}>
          <p>En Centauros Bank, nos enorgullece ofrecer una amplia gama de servicios
            financieros diseñados para satisfacer todas tus necesidades.
            Desde tarjetas de crédito hasta créditos de consumo,
            estamos aquí para ayudarte a alcanzar tus metas financieras.</p>
        </div>
        <Button label={'Ver más'} backgroundColor='blue' />
        <Button label={'Solicitar'} onClick={() => onClick('/application')} />
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.product}>
            <Image src={'/crediCard.svg'} width={70} height={70} className={styles.icon} alt='credit_card' />
          </div>
          <p>Tarjeta de crédito</p>
          <Button label={'Solicitar'} onClick={() => onClick('/application')} />
        </div>
        <div className={styles.card}>
          <div className={styles.product}>
            <Image src={'/bank.svg'} width={60} height={60} className={styles.icon} alt='bank' />
          </div>
          <p>Crédito de consumo</p>
          <Button label={'Solicitar'} disabled />
        </div>
        <div className={styles.card}>
          <div className={styles.product}>
            <Image src={'/check.svg'} width={70} height={70} className={styles.icon} alt='check' />
          </div>
          <p>Estado de solicitud</p>
          <Button label={'Consultar'} onClick={() => onClick('/search')} />
        </div>
      </div>
    </main>
  )
}
