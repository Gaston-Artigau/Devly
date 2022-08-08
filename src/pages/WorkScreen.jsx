import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form';
import Navbar from '../components/Navbar'
import { GlobalStyles, Section2 } from "../GlobalStyles";
import { Child2Section2, ChildSection2, Section1 } from './WorkStyles';

const WorkScreen = () => {
  return (
    <>

        <GlobalStyles/>
        <Navbar/>
        <main>
          <Section1>
            <h1>Nuestro <span>Trabajo.</span></h1>
          </Section1>

          <Section2>
            <ChildSection2>
              <div>
                <h2><span>Cómo</span> trabajamos.</h2>
                <p>Devly prefiere una situación beneficiosa para todos para nuestros clientes: somos lo suficientemente flexibles para analizar y encontrar una solución que funcione con sus presupuestos y demandas.<br/>
                Hemos completado con éxito una variedad de proyectos en diferentes áreas, por lo que aprender del comportamiento real de los usuarios es la mejor manera de tomar las decisiones correctas.</p>
              </div>
              <img src='https://huboxt.com/img/textArrow2.png' style={{width:'50%', height: '190px'}} alt='imagen decorativa'/>
            </ChildSection2>

            <Child2Section2>
              <ul>
                <li><a href='https://emigrarg.netlify.app' rel='noopener noreferrer' target='_blank'>
                  <img src='/emigrarg.png' alt='sitio web de emigrarg'/>
                  <h3>Sitio web sobre emigración y visas de estudio</h3></a>
                  <p>Un sitio web donde se muestran distintos paises, y diferentes formas para emigrar a ellos, a traves de distintos visados (working holiday, estudio, trabajo, etc). Ademas cuenta con un blog en los que se encuentran distintos articulos relacionados a la emigración.</p>
                </li>
                <li><a href='https://gaston-artigau.netlify.app' rel='noopener noreferrer' target='_blank'>
                  <img src='/portfolio-web.png' alt='imagen de portafolio web'/>
                  <h3>Portfolio personal</h3>
                  <p>Landing page de un portafolio personal, el cual consta de un diseño moderno y distintas secciones como el perfil, las skills, los estudios, los proyectos personales, contacto, y mucho mas.</p></a>
                </li>
              </ul>

              <ul>
                <li>
                  <h2>El trabajo que hacemos y las personas a las que ayudamos.</h2>
                  <a href='https://emigrarg.netlify.app' rel='noopener noreferrer' target='_blank'>
                  <img src='/rotations.png' alt='aplicacion web de cultivos y rotaciones '/>
                  <h3>Aplicación web sobre cultivos y sistema de rotaciones de la zona nucleo</h3>
                  <p>La aplicación web está diseñada para poder brindar informacion util (rinde, fecha de siembra, costo de implantacion, etc) acerca de los cultivos mas utilizados en la zona nucleo. Tambien cuenta con un sistema que permite realizar distintas rotaciones y evaluarlas dependiendo de su rentabilidad, riesgo, rinde, entre otros datos de suma importancia agricola.</p></a>
                </li>
                <li><a href='https://nominas-manager.netlify.app' rel='noopener noreferrer' target='_blank'>
                  <img src='/login.png' alt='aplicacion web con sistema de login'/>
                  <h3>Plataforma de nominas con sistema de login</h3>
                  <p>Devly creó una plataforma web que consta de un sistema de login y registro, que tiene la funcionalidad de guardar las ganancias diarias detallando la cantidad dee horas trabajadas y el pago por hora, estas datos tambien pueden eliminarse. Gracias al sistema de login cada usuario tendra almacenados sus datos en una base de datos segura.</p></a>
                </li>
              </ul>
            </Child2Section2>
          </Section2>

          <Form/>
        </main>
        <Footer/>
    </>
  )
}

export default WorkScreen