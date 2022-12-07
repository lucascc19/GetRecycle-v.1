// import { useHistory } from 'react-router-dom'
import Form from '../form/Form'
import PointForm from '../form/PointForm'
import Sidebar from '../layout/Sidebar'

import styles from '../styles/NewPoint.module.css'


function NewPoint(){
  // const history = useHistory()

  // function createPoint(point) {
  //   //
  //   fetch("http://localhost:5000/projects", {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(point)
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data)
  //       //redirect
  //     })
  //     .catch((err) => console.log(err))
  // }

  return (
    <div className={styles.container}>
      <Sidebar />
      <p>Adicione um ponto de coleta</p>
      <PointForm btnText="Cadastrar" />
    </div>
  )
}

export default NewPoint