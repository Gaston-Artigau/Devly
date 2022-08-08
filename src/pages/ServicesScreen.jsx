import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import { GlobalStyles, Section2 } from '../GlobalStyles'
import { Section1,  ChildSection2, Article1Section2, Article2Section2, Article3Section2 } from './ServicesStyles'

const ServicesScreen = () => {
  return (
    <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS3CLZ3JKN"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-MS3CLZ3JKN');
        </script>

        <GlobalStyles/>
        <Navbar/>
        <main>
          <Section1>
            <h1>Nuestros <span>Servicios.</span></h1>
          </Section1>

          <Section2>
            <ChildSection2>
              <div>
                <div style={{gap: '0'}}>
                  <h2><span>Que</span> Ofrecemos.</h2>
                  <p>Devly trabaja con pequeñas y medianas empresas, así como con individuos, ayudándolos a hacer realidad sus locas y emprendedoras ideas.</p>
                  <p>Usamos diferentes lenguajes de programación y en Devly dominamos la última tecnología, lo que nos permite crear productos que mejoren la funcionalidad, sean confiables y se desarrollen en el tiempo.</p>
                </div>

                <Article1Section2>
                  <h3>Refinamos las marcas con un nuevo estilo</h3>
                  <p><span>#branding #identity development #brand guidelines</span></p><br/>
                  <p>Tu marca dice todo sobre ti. ¿No es hora de un diseño que refleje la calidad de su producto?</p>
                  <p>Creamos identidades visuales memorables que forman una ventaja competitiva esencial.</p><br/>
                  <p>Devly puede ayudarte con:</p>
                  <ul>
                    <li>- diseñar un sitio llamativo</li>
                    <li>- desarrollar las pautas de su marca</li>
                    <li>- apoyarlo con infografías atractivas, plantillas de correo electrónico, logotipos</li>
                  </ul>
                </Article1Section2>
              </div>

              <div>
                <Article2Section2>
                  <h3>Creamos productos digitales para el uso diario</h3>
                  <p><span>#website development #mobile app #front-end development #back-end development #responsive interface development</span></p><br/>
                  <p>Utilizando una amplia investigación, datos y pruebas, diseñamos soluciones creativas y fáciles de usar orientadas al ser humano. Nuestro proceso de desarrollo está siempre respaldado por las últimas tecnologías.</p><br/>
                  <p>Devly puede ayudarte con:</p>
                  <ul>
                    <li>- crear aplicaciones web</li>
                    <li>- construir nuevos productos digitales desde cero</li>
                    <li>- actualizar las soluciones existentes para hacer frente a las nuevas demandas</li>
                  </ul>
                </Article2Section2>

                <Article3Section2>
                  <h3>Diseño de estructura y posicionamiento web</h3>
                  <p><span>#websites #user interfaces #mobile app #design systems #prototyping #illustrations</span></p><br/>
                  <p>Nuestro proceso nos permite crear prototipos de ideas complejas de forma rápida y precisa, que pueden transformarse fácilmente en soluciones totalmente funcionales y sistemas escalables.</p><br/>
                  <p>Devly puede ayudarte con:</p>
                  <ul>
                    <li>- crear un diseño de UI/UX orientado al usuario</li>
                    <li>- diseñar un servicio que mejore la experiencia de los clientes</li>
                    <li>- introducir un sitio web que funcione para su negocio</li>
                  </ul>
                </Article3Section2>
              </div>
            </ChildSection2>

            <Services/>

            <Form/>
          </Section2>
        </main>
        <Footer/>
    </>
  )
}

export default ServicesScreen