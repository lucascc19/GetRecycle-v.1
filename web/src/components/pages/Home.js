import Navbar from "../layout/Navbar"

import styles from './Home.module.css'
import recycle from '../../img/recycle.png'

function Home(){
  return (
    <div>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.box_text}>
          <h1 className={styles.title}>Comece você a transformar o mundo</h1>
          <p className={styles.subtitle}>Aqui você encontra pontos de coleta com eficiência</p>
        </div>
        <img src={recycle} alt="Recycling" className={styles.background_image} />
      </section>
    </div>

  )
}

export default Home