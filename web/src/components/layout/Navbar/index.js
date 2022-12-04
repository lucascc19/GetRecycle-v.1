import { Link } from 'react-router-dom'

import Container from '../Container'
import styles from '../Navbar/style.css'
import logo from '../../../img/Logo.svg'

function Navbar(){
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="GetRecycle" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/user">Acesso restrito</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar