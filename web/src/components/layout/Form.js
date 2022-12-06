import styles from '../styles/Form.module.css'

function Form() {
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <form>
          <fieldset>
            <legend>Dados</legend>
            <div>
              <label for="pointname">Nome do ponto</label>
              <input id='pointname' type="text" />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input id='email' type="text" />
            </div>
            <div>
              <label for="contact">Whatsapp</label>
              <input id='contact' type="text" />
            </div>
            <div>
              <label for="archive">Imagem do ponto de coleta</label>
              <input id='archive' type="file" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>
            <div>
              <label>Rua</label>
              <input type="text" />
            </div>
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
              <label>Cidade</label>
              <input type="text" />
            </div>
          </fieldset>

          <fieldset>
            <div>
              <legend>Ítens de coleta</legend>
              <p>Selecione um ou mais itens abaixo</p>
            </div>
            <div>
              <label>Rua</label>
              <input type="text" />
            </div>
            <div>
              <label>Estado (UF)</label>
            </div>
            <div>
              <label>Cidade</label>
              <input type="text" />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Form