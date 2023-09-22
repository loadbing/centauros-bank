'use client';

import Image from 'next/image'
import styles from './page.module.css'
import sendRequest from '@/api/API';
import { useState } from 'react';

export default function Application() {

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ visible: false, text: '' })

  const onLoad = (load, message) => {
    document.getElementById("formApplication").reset();
    setLoading(load)
    setMessage({ visible: true, text: message })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const data = {
      'documento': event.target.documento.value,
      'nombres': event.target.nombres.value,
      'apellidos': event.target.apellidos.value,
      'correo': event.target.correo.value,
      'direccion': event.target.direccion.value,
      'telefono': event.target.telefono.value,
      'celular': event.target.celular.value,
      'sexo': event.target.sexo.value
    }

    sendRequest(data, 'solicitudTarjeta', onLoad)
  }

  return (
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
            <Image src={'/crediCard.svg'} width={70} height={70} className={styles.icon} alt='credit_card' />
          </div>
          <div className={styles.text}>
            <h1>Solicita tu crédito ¡Ahora!</h1>
            <h4>Diligencia tus datos personales</h4>
          </div>
        </div>
        <form id='formApplication' className={styles.form} onSubmit={(e) => onSubmit(e)}>
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
                  maxLength="15"
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
              <div>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder='Correo'
                  required 
                  minLength="10"
                  maxLength="100"
                  size="30" />
              </div>
              <div>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  placeholder='Celular'
                  required 
                  minLength="10"
                  maxLength="100"
                  size="30" />
              </div>
              <div>
                <input
                  type="file"
                  id="archivos"
                  name="archivos"
                  required
                  accept=".pdf" />
              </div>
            </div>
            <div className={styles.column}>
              <div>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder='Nombres'
                  required 
                  minLength="10"
                  maxLength="100"
                  size="30" />
              </div>
              <div>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  placeholder='Dirección'
                  required 
                  minLength="10"
                  maxLength="100"
                  size="30" />
              </div>
              <div>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder='Teléfono'
                  required 
                  minLength="10"
                  maxLength="100"
                  size="30" />
              </div>
              <div>
                <select defaultValue='null' id='sexo' name='sexo' >
                  <option disabled value='null'>Seleccionar género</option>
                  <option value='M'>Masculino</option>
                  <option value='F'>Femenino</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.btnSubmit}>
            <input type="submit" value="Enviar" disabled={loading} />
          </div>
        </form>
      </div>
    </main >
  )
}
