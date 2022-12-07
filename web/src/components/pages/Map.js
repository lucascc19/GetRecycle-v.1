import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi';

import logo from '../../img/Logo.svg'
import styles from '../styles/Map.module.css'

function Map(){
  return (
    <div className={styles.page_map}>
      <aside>
        <header>
          <Link to="/">
            <img src={logo} alt="GetRecycle"/>
          </Link>

          <h2>Escolha um ponto de coleta no mapa</h2>
          <p>O planeta agradece :)</p>
        </header>

        <footer>
          <strong>Russas</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <div id="map"></div>

      <button>
        <Link to="/newpoint">
          <FiPlus size={32} color="#fff" />
        </Link> 
      </button>
    </div>
  )
}

export default Map