import styles from './page.module.css'

export default function Button({ label, backgroundColor = '', disabled = false, onClick }) {
  return (
    <button disabled={disabled} className={`${styles.button} ${styles[backgroundColor]}`} onClick={onClick}> {label}</button>
  )
}
