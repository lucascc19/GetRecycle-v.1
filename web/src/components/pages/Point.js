import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Sidebar from '../layout/Sidebar'
import Loading from '../layout/Loading'
import styles from '../styles/Point.module.css'
import PointForm from '../form/PointForm'
import Message from '../layout/Message'

function Point() {
  const { id } = useParams()

  const [point, setPoint] = useState([])
  const [showPointForm, setShowPointForm] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  useEffect(() => {
    // to see the loading
    setTimeout(() => {
      fetch(`http://localhost:5000/points/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPoint(data)
      })
    }, 1000)
  }, [id])

  function togglePointForm() {
    setShowPointForm(!showPointForm)
  }

  function editPost(point){
    setMessage('')

    fetch(`http://localhost:5000/points/${point.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(point),
    })
      .then(resp => resp.json())
      .then((data) => {
        setPoint(data)
        setShowPointForm(!showPointForm)
        setMessage('Projeto atualizado!')
        setType('success')
      })
  }

  return (
    <div>
      <Sidebar />
        {point.name ? (
          <div className={styles.point_container}>
            <div className={styles.area}>
              <h1>Ponto de coleta</h1>
              <button onClick={togglePointForm}>
                {!showPointForm ? 'Editar ponto' : 'Fechar'}
              </button>
            </div>  
            <div className={styles.message}>
              {message && <Message type={type} msg={message} />}
            </div>
            {!showPointForm ? (
              <section className={styles.section}>
                <div className={styles.form}>
                  <p>{point.name}</p>
                  <p>
                    <span>E-mail:</span> {point.email}
                  </p>
                  <p>
                    <span>Whatsapp:</span> {point.contact}
                  </p>
                  <p>
                    <span>Endere??o:</span> {point.address}
                  </p>
                  <p>
                    <span>??tem de coleta:</span> {point.category.name}
                  </p>
                </div>
              </section>
            ) : (
              <div>
                <PointForm 
                  handleSubmit={editPost}
                  btnText="Concluir edi????o"
                  pointData={point}
                />
              </div>
            )}
          </div>
        ):(
          <div className={styles.loading}>
            <Loading />  
          </div>
        )}
    </div>
  )
}

export default Point