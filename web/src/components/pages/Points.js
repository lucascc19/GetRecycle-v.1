import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import Sidebar from '../layout/Sidebar'
import PointCard from '../layout/PointCard'
import Loading from '../layout/Loading'

import styles from '../styles/Points.module.css'

function Points() {
  const [points, setPoints] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [pointMessage, setPointMessage] = useState('')


  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/points', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPoints(data)
        setRemoveLoading(true)
      })
    }, 3000)
  }, [])

  function removePoint(id) {
    fetch(`http://localhost:5000/point/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        setPoints(points.filter((point) => point.id !== id))
        setPointMessage('Ponto removido com sucesso.')
      })
  }

  return (
    <section className={styles.points_container}>
      <Sidebar />
      <div>
        <div className={styles.add}>
          <h1>Pontos de coleta cadastrados</h1>
          <button>
            <a href='/newpoint'>Adicionar novo ponto</a>
          </button>
        </div>
        <div className={styles.message}>
          {message && <Message type="success" msg={message} />}
          {pointMessage && <Message type="success" msg={pointMessage} />}
          <section className={styles.flex_card}>
            {points.length > 0 &&
              points.map((point) => (
                <PointCard 
                  id={point.id}
                  name={point.name}
                  category={point.category.name}
                  key={point.id}
                  handleRemove={removePoint}
                />
              ))}
              <div>
                {!removeLoading && <Loading />}
                {removeLoading && points.length === 0 && (
                <p>Não há projetos cadastrados!</p>
                )}
              </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Points