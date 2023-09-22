'use client';

import Image from 'next/image'
import styles from './page.module.css'
import sendRequest from '@/api/API';
import { useState } from 'react';

export default function ApplicationStatus() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ visible: false, text: '' });

  const onLoad = (load, message) => {
    document.getElementById('formApplicationStatus').reset();
    setLoading(load);
    const newMessage = `Estado de la solicitud: ${message?.estado_solicitud}`
    setMessage({ visible: true, text: newMessage });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      'documento': event.target.documento.value,
      'nombres': event.target.nombres.value,
      'apellidos': event.target.apellidos.value,
      'pedido': event.target.pedido.value,
    }
    sendRequest(data, 'solicitudEstado', onLoad)
  }

  return (
    <>
      <main className={styles.main}>
        {loading &&
          <>
            <div className={styles.back} />
            <div className={styles.loading}>
              <Image src={'/loading.svg'} width={70} height={70} alt='credit_card' />
            </div>
          </>}
        {message.visible && <>
          <div className={styles.back} />
          <div className={styles.message}>
            <h4>{message.text}</h4>
            <div className={styles.close} onClick={() => { setMessage({ visible: false }) }} >Aceptar</div>
          </div></>}
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.icon}>
              <Image src={'/clock.svg'} width={70} height={70} className={styles.icon} alt='clock_svg' />
            </div>
            <div className={styles.text}>
              <h1>Consulta el estado de tu solicitud</h1>
              <h4>Diligencia tus datos personales</h4>
            </div>
          </div>
          <form id='formApplicationStatus' className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <div>
                  <input
                    type="text"
                    id="documento"
                    name="documento"
                    placeholder='Número de documento'
                    required
                    minLength="10"
                    maxLength="100"
                    size="30" />
                </div>
                <div>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    placeholder='Nombres'
                    required
                    minLength="4"
                    maxLength="100"
                    size="30" />
                </div>
              </div>
              <div className={styles.column}>
              <div>
                  <input
                    type="text"
                    id="pedido"
                    name="pedido"
                    placeholder='# Pedido'
                    required
                    minLength="10"
                    maxLength="100"
                    size="30" />
                </div>
                <div>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    placeholder='Apellidos'
                    required
                    minLength="10"
                    maxLength="100"
                    size="30" />
                </div>
              </div>
            </div>
            <div className={styles.btnSubmit}>
              <input type="submit" value="Enviar" disabled={loading} />
            </div>
          </form>
        </div>
      </main >
    </>
  )

}