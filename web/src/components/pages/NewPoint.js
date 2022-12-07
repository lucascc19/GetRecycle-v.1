import { useNavigate } from 'react-router-dom'
import PointForm from '../form/PointForm'
import Sidebar from '../layout/Sidebar'

import styles from '../styles/NewPoint.module.css'


function NewPoint(){
  const navigate = useNavigate()

  function createPoint(point) {
    //
    fetch("http://localhost:5000/points", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(point)
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
        navigate('points', { message: 'Ponto de coleta cadastrado!' })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <p>Adicione um ponto de coleta</p>
      <PointForm handleSubmit={createPoint} btnText="Cadastrar" />
    </div>
  )
}

export default NewPoint