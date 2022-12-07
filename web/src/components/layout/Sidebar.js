import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../img/Logo-min.png'

import styles from '../styles/Sidebar.module.css'

function Sidebar() {
  const goBack = useNavigate();

    return (
        <aside className={styles.app_sidebar}>
        <Link to="/">
          <img src={logo} alt="GetRecycle" />
        </Link>

        <footer>
          <button type="button" onClick={() => goBack(-1)}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    )
}

export default Sidebar
