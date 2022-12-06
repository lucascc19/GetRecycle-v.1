import Form from '../layout/Form'
import Sidebar from '../layout/Sidebar'

import styles from '../styles/AddPoint.module.css'


function AddPoint(){
  return (
    <div className={styles.container}>
      <Sidebar />
      <p>Adicione um ponto de coleta</p>
      <Form />
    </div>
  )
}

export default AddPoint