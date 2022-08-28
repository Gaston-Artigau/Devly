import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { GlobalStyles, Section2 } from '../GlobalStyles'
import { Child2Section2, ChildSection2, Section1 } from './AboutStyles'

const AboutScreen = () => {
  return (
    <>
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
                <p>Somos un emprendimiento de programación, desarrollo web, diseño web y posicionamiento SEO radicado en la ciudad de Pergamino, Buenos Aires. <br/>Nuestra principal impronta es promover el desarrollo local, ayudando a emprendimientos, pymes o profesionales a incorporarse en el mundo digital, potenciando su crecimiento y visibilidad. Somos consientes de que no es una tarea fácil, pero estamos dispuestos a dar todo de nosotros para hacerlo posible.</p>
              </div>
              <img src='/img-team.jpg' style={{width: '95%', height: '300px'}} alt='imagen quienes somos'/>
            </ChildSection2>

            <Child2Section2>
            <img src='/img-team3.jpg' style={{width: '95%', height: '300px'}} alt='imagen que hacemos'/>
              <div>
                <h2><span>Qué</span> hacemos.</h2>
                <p>Combinamos la creatividad con la lógica para construir soluciones confiables e impresionantes. Hoy en día, cada negocio tiene que mejorar sus eficiencias e imagen digital y ese es el desafío con el que podemos ayudarlo.<br/> Podemos crear nuevos productos digitales desde cero o actualizar los existentes para hacer frente a las nuevas demandas. Nuestros proyectos no solo se basan en Argentina, sino que también hemos realizado proyectos con clientes de todo el mundo.</p>
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