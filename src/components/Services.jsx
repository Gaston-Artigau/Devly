import React from 'react'
import { MdDevices, MdSettings, MdLightbulbOutline, MdOutlineQueryStats, MdEditCalendar } from "react-icons/md";
import { TbDatabase } from "react-icons/tb";
import { Child2Section2 } from "../GlobalStyles";

const Services = () => {
  return (
    <>
        <Child2Section2>
            <p>Nosotros <span>podemos ayudarte</span> con</p>
            <ul>
              <li>
                <MdDevices style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}} />
                <div>
                  <h3>Web and Mobile</h3>
                  <p>El cambiante mundo del desarrollo web ha ampliado nuestro conjunto de habilidades y nos ha dado experiencia en todos los principales marcos de interfaz de usuario, lo que hace que su aplicación se vea agradable y moderna a la vez que rápida.</p>
                </div>
              </li>
              <li>
                <MdSettings style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}}/>
                <div>
                  <h3>DevOps</h3>
                  <p>La mayoría de nuestros productos están alojados en la plataforma de Hostinger, pero tenemos suficiente experiencia y flexibilidad para tomar la mejor decisión en términos de rendimiento, costo y esfuerzo de configuración, y podemos hacer que su producto funcione en cualquier hardware personalizado.</p>
                </div>
              </li>
              <li>
                <MdLightbulbOutline style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}}/>
                <div>
                  <h3>UI/UX</h3>
                  <p>Envolvemos sus ideas en una experiencia de usuario intuitiva y lógica con interfaces de usuario modernas, que se ven hermosas y funcionan impecablemente en todos los dispositivos y resoluciones.</p>
                </div>
              </li>
              <li>
                <MdOutlineQueryStats style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}}/>
                <div>
                  <h3>Data Engineering</h3>
                  <p>Definitivamente, sabemos cómo crear valor adicional a partir de sus datos mediante la producción de informes automatizados de diversa complejidad. También nos especializamos en SEO, para que tu web tenga la mejor conversión de tráfico.</p>
                </div>
              </li>
              <li>
                <TbDatabase style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}}/>
                <div>
                  <h3>Server-Side and testing</h3>
                  <p>Nuestra experiencia de desarrollo del lado del servidor se trata de hacer productos que funcionen sin problemas, cumplan con todos los requisitos comerciales, optimizados, seguros y protegidos. La comprensión profunda de cómo funcionan las cosas internamente ayuda a que nuestras soluciones sean lo más efectivas posible.</p>
                </div>
              </li>
              <li>
                <MdEditCalendar style={{fontSize: '42px', color: '#7a66c7', flexShrink: '0', marginRight:'15px'}}/>
                <div>
                  <h3>Product Management</h3>
                  <p>Como parte de los requisitos del cliente y de nuestros acuerdos internos, tratamos de utilizar las mejores prácticas para dividir, planificar, preparar y publicar nuestro trabajo. Nuestro objetivo es hacer que nuestro equipo sea eficiente y abierto para los clientes.</p>
                </div>
              </li>
            </ul>
        </Child2Section2>
    </>
  )
}

export default Services