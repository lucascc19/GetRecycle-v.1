import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/Logo.svg'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="GetRecycle" className={styles.logo} />
        </Link>
        <button className={styles.button}>
          <Link to="/user" >Acesso restrito</Link>
        </button>
        {/* <ul className={styles.list}>
          <li>
            <Link to="/user">Acesso restrito</Link>
          </li>
        </ul> */}
      </Container>
    </nav>
  )
}

export default Navbar