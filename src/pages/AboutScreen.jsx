import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { GlobalStyles, Section2 } from '../GlobalStyles'
import { Child2Section2, ChildSection2, Section1 } from './AboutStyles'

const AboutScreen = () => {
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
            <h1>Sobre <span>Nosotros.</span></h1>
          </Section1>

          <Section2>
            <ChildSection2>
              <div>
                <h2><span>Quiénes</span> somos.</h2>
                <p>Como equipo de programadores, somos afortunados: convertimos nuestra pasión en un negocio. Respiramos matemáticas, por lo que la codificación y la resolución de problemas son algo natural para nosotros. No es solo nuestro trabajo: es nuestra pasión!</p>
              </div>
              <img src='/img-team.jpg' style={{width: '95%', height: '300px'}} alt='imagen quienes somos'/>
            </ChildSection2>

            <Child2Section2>
            <img src='/img-team3.jpg' style={{width: '95%', height: '300px'}} alt='imagen que hacemos'/>
              <div>
                <h2><span>Qué</span> hacemos.</h2>
                <p>Combinamos la creatividad con la lógica para construir soluciones confiables e impresionantes. Hoy en día, cada negocio tiene que mejorar sus eficiencias e imagen digital y ese es el desafío con el que podemos ayudarlo. Podemos crear nuevos productos digitales desde cero o actualizar los existentes para hacer frente a las nuevas demandas.</p>
              </div>
            </Child2Section2>
          </Section2>

          <Form/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutScreen