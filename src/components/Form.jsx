import React, { useRef, useState } from 'react'
import { FormTemplate } from './FormStyles'
import emailjs from '@emailjs/browser'

const Form = () => {

  const form = useRef()

  const [send, setSend] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_dwdipp8', 'template_619zm7f', form.current, 'jZp1ry6R_hW0obyeQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

    e.target.reset()
    setSend(true)
  }

  return (
    <>
        <FormTemplate id='form'>
          <div>
            <h2>Preparado para <span>comenzar?</span></h2>
            <p>Estamos asumiendo nuevos proyectos, ¡no dudes en contactarnos si estás interesado en trabajar juntos!</p><br/>
            <p>Estamos listos para cualquier desafío. Estas listo para: <b>¡subir al siguiente nivel!</b></p>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Nombre' name="user_name" maxLength='40' required/>
            <input type='email' placeholder='Correo electronico' name="user_email" required/>
            <textarea rows='3' placeholder='Mensaje' name="message" minLength='10' required/>
            <button type='submit' value="Send">Enviar</button>

            {
              send ? <p style={{fontSize: '17px', backgroundColor: '#0f640f', padding: '7px', borderRadius: '10px', border: '1px solid #3e3b3b', transition: '.4s'}}>El Formulario se ha enviado Correctamente.</p> : null
            }
          </form>

        </FormTemplate>
    </>
  )
}

export default Form