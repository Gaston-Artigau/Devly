import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GlobalStyles, Section2 } from "../GlobalStyles";
import { Section1, ChildSection2 } from "../pages/IndexStyles"
import Form from '../components/Form';
import Services from '../components/Services';

const IndexScreen = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>

      <main>
        <Section1>
          <div>
            <h1>Un equipo de desarrollo web que <span>te lleva al siguiente nivel.</span></h1>
            <p>Como equipo de programadores, somos afortunados: convertimos nuestra pasión en un negocio. Respiramos matemáticas, por lo que la codificación y la resolución de problemas son algo natural para nosotros. No es solo nuestro trabajo: es nuestra pasión.</p>
          </div>
          <div></div>
        </Section1>

        <Section2>
          <ChildSection2>
            <img src="/intermediario.jpg" alt="img" style={{width: '360px', height: '100%', margin: 'auto', borderRadius: '4px'}}/>
            <div>
              <h2>Eliminar al <span>intermediario</span></h2>
              <p>Nuestros clientes trabajan directamente con nosotros, eliminando intermediarios, lo cual es extremadamente eficiente y rentable. Nunca subcontratamos y entre nosotros tenemos cubiertas las distintas areas del desarrollo.</p>
            </div>
          </ChildSection2>

          <Services/>          

          <Form id='form' name='form'/>
        </Section2>
      </main>

      <Footer/>
    </>
  )
}

export default IndexScreen