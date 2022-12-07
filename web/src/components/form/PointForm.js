import { useEffect, useState } from 'react'

import { FiUpload } from 'react-icons/fi'
import styles from '../styles/PointForm.module.css'

import SubmitButton from './SubmitButton'
import Input from './Input'
import Select from './Select'

function PointForm({ btnText }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <form>
          <fieldset>
            <legend>Dados</legend>
            <div>
              <Input 
                type="text"
                text="Nome do ponto"
                name="name"
                placeholder=""
              />
            </div>
            <section>
              <div>
                <Input 
                    type="text"
                    text="E-mail"
                    name="email"
                    placeholder="example@example.com"
                />
              </div>
              <div>
                <Input 
                  type="text"
                  text="Whatsapp"
                  name="contact"
                  placeholder="(00) 0 0000 0000"
                />
              </div>
            </section>
          </fieldset>

          <fieldset>
          <legend>Endereço</legend>
            <div>
              <Input 
                type="text"
                text="Rua"
                name="endereco"
                placeholder=""
              />
            </div>
            <section>
              <div>
              <label>Estado (UF)</label>
                <select name="estado"> 
                <option value="estado">Selecione o Estado</option> 
                <option value="ac">AC</option> 
                <option value="al">AL</option> 
                <option value="am">AM</option> 
                <option value="ap">AP</option> 
                <option value="ba">BA</option> 
                <option value="ce">CE</option> 
                <option value="df">DF</option> 
                <option value="es">ES</option> 
                <option value="go">GO</option> 
                <option value="ma">MA</option> 
                <option value="mt">MT</option> 
                <option value="ms">MS</option> 
                <option value="mg">MG</option> 
                <option value="pa">PA</option> 
                <option value="pb">PB</option> 
                <option value="pr">PR</option> 
                <option value="pe">PE</option> 
                <option value="pi">PI</option> 
                <option value="rj">RJ</option> 
                <option value="rn">RN</option> 
                <option value="ro">RO</option> 
                <option value="rs">RS</option> 
                <option value="rr">RR</option> 
                <option value="sc">SC</option> 
                <option value="se">SE</option> 
                <option value="sp">SP</option> 
                <option value="to">TO</option> 
                </select>
              </div>
              <div>
                <Input 
                  type="text"
                  text="Cidade"
                  name="city"
                  placeholder=""
                />
              </div>
            </section>
          </fieldset>

          <fieldset>
            <legend>Ítens de coleta</legend>
            <Select 
              name="category_id"
              text="Selecione os itens"
              options={categories}
            />
          </fieldset>
          <div className={styles.btn}>
            <SubmitButton text={btnText}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PointForm