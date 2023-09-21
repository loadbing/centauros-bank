import Image from 'next/image'
import styles from './page.module.css'

export default function Button({ label, backgroundColor = '' }) {
  return (
    <button className={`${styles.button} ${styles[backgroundColor]}`}>{label}</button>
  )
}
