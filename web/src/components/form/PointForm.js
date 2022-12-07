import { useEffect, useState } from 'react'

import styles from '../styles/PointForm.module.css'

import SubmitButton from './SubmitButton'
import Input from './Input'
import Select from './Select'

function PointForm({ handleSubmit, btnText, pointData}) {
  const [categories, setCategories] = useState([])
  const [point, setPoint] = useState(pointData || {})

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

  const submit = (e) => {
    e.preventDefault()
    // console.log(point)
    handleSubmit(point)
  }

  function handleChange(e) {
    setPoint({...point, [e.target.name]: e.target.value})
  }

  function handleCategory(e) {
    setPoint({...point, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },})
  }

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={submit}>
          <fieldset>
            <legend>Dados</legend>
            <div>
              <Input 
                type="text"
                text="Nome do ponto"
                name="name"
                placeholder=""
                handleOnChange={handleChange}
                value={point.name ? point.name : ''}
              />
            </div>
            <section>
              <div>
                <Input 
                    type="text"
                    text="E-mail"
                    name="email"
                    placeholder="example@example.com"
                    handleOnChange={handleChange}
                    value={point.email ? point.email : ''}
                />
              </div>
              <div>
                <Input 
                  type="text"
                  text="Whatsapp"
                  name="contact"
                  placeholder="(00) 0 0000 0000"
                  handleOnChange={handleChange}
                  value={point.contact ? point.contact : ''}
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
                name="address"
                placeholder=""
                handleOnChange={handleChange}
                value={point.address ? point.address : ''}
              />
            </div>
            <section>
              <div>
              <Input 
                  type="text"
                  text="Estado (UF)"
                  name="state"
                  placeholder="Example: CE"
                  handleOnChange={handleChange}
                  value={point.state ? point.state : ''}
                />
              </div>
              <div>
                <Input 
                  type="text"
                  text="Cidade"
                  name="city"
                  placeholder=""
                  handleOnChange={handleChange}
                  value={point.city ? point.city : ''}
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
              handleOnChange={handleCategory}
              value={point.category ? point.category.id: ''}
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