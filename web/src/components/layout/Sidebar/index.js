import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import styles from './style.css';

import mapMarkerImg from '../../img/logo.svg';

function Sidebar(){
  const { goBack } = useNavigate();

  return(
    <aside className="sidebar">
      <img src={logo} alt="GetRecycle" />

      <footer>
        <button type='button' onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  )
}

export default Sidebar()