import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <button className={styles.button} type='button'>
        <Link to="/map">
          <FiArrowRight size={40} color="#8D734B" />
        </Link>
      </button>
    </footer>
  )
}

export default Footer