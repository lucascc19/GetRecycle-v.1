import { Link } from 'react-router-dom'
import styles from '../styles/SubmitButton.module.css'

function SubmitButton({ text }) {
  return (
    
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton