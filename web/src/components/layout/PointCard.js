import styles from '../styles/PointCard.module.css'
import { FiTrash, FiEdit3 } from 'react-icons/fi'

function PointCard({ id, name, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.point_card}>
      <h4>{name}</h4>
      <p className={styles.category_text}>
        <span></span> {category}
      </p>
      <div className={styles.point_card_actions}>
        <button>
          <a href={`/point/${id}`}>
            <FiEdit3 /> Editar
          </a>
        </button>
        <button onClick={remove}>
          <FiTrash /> Excluir
        </button>
      </div>
    </div>
  )
}

export default PointCard