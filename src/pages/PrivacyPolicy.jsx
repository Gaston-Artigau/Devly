import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GlobalStyles } from '../GlobalStyles'
import { Child2Section, Child3Section, ChildSection, Section } from './PrivacyPolicyStyles'
import { MdEditCalendar } from "react-icons/md";

const PrivacyPolicy = () => {
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

      <Section>

        <ChildSection>
          <h1>política de privacidad</h1>
          <span><MdEditCalendar/> Última actualización: 6 de Agosto, 2022</span>

          <p>Esta Política de privacidad describe Nuestras políticas y procedimientos sobre la recopilación, el uso y la divulgación de su información cuando utiliza el sitio web y le informa sobre sus derechos de privacidad y cómo lo protege la ley.</p>
          <p>Utilizamos sus datos personales para proporcionar y mejorar el sitio web. Al utilizar el sitio web, acepta la recopilación y el uso de información de acuerdo con esta Política de privacidad.</p>
        </ChildSection>

        <Child2Section>
          <h2>1. Interpretación y Definiciones</h2>
          <h4>1.1. Interpretación</h4>
          <p>Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de que aparezcan en singular o en plural.</p>

          <h3>1.2. Definiciones</h3>
          <p>A los efectos de esta Política de Privacidad:</p>
          <ul>
            <li><b>Compañía</b> (referido como "Devly", "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a Devly (Devly), Fullana 1172, Pergamino, Buenos Aires, Argentina.</li>
            <li><b>Cookies</b> son pequeñas porciones de datos que un sitio web coloca en su computadora, dispositivo móvil o cualquier otro dispositivo.</li>
            <li><b>Datos de uso</b> se refiere a los datos recopilados automáticamente, ya sea generados por el uso del sitio web o de la propia infraestructura del sitio web y pueden incluir información como la dirección IP de su dispositivo, el tipo de navegador, la versión del navegador, las páginas que visita, la hora y la fecha de su visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.</li>
            <li><b>Información personal</b> es cualquier información que se relaciona con un individuo identificado o identificable.</li>
            <li><b>Servicio de terceros</b> se refiere a cualquier sitio web, aplicación de software y/o cualquier otra solución programática destinada a ayudar a la Compañía a analizar cómo se utiliza el sitio web.</li>
            <li><b>Sitio web</b> se refiere al sitio web de Devly, accesible desde <b><a href='https://devly.netlify.app'>https://devly.netlify.app</a></b></li>
          </ul>
        </Child2Section>

        <Child2Section>
          <h2>2. Recopilación y uso de sus datos personales</h2>
          <h4>2.1. Tipos de datos recopilados</h4>
          <p>Mientras utiliza nuestro sitio web, nosotros o los servicios de terceros podemos recopilar cierta información de identificación personal: dirección de correo electrónico, número de teléfono, nombre, apellido, nombre de la empresa, cookies y/o datos de uso.</p>

          <h3>2.2. Uso de sus datos personales</h3>
          <p>Devly puede utilizar los datos personales para los siguientes fines:</p>
          <ul>
            <li><b>Para contactarte:</b> Al completar el formulario de contacto, nos autoriza a utilizar estos datos para responder a las solicitudes de información, cotizaciones o cualquier otro tipo de solicitud que se indique en el encabezado del formulario. Podemos comunicarnos con usted por correo electrónico, llamadas telefónicas, SMS u otras formas equivalentes de comunicación electrónica.</li>
            <li><b>Para proporcionarle noticias, ofertas especiales e información general</b> sobre otros servicios y eventos que ofrecemos a menos que haya optado por no recibir dicha información.</li>
            <li><b>Para otros fines:</b> Podemos utilizar su información para otros fines, como el análisis de datos, la identificación de tendencias de uso, la determinación de la eficacia de nuestras campañas promocionales y para evaluar y mejorar nuestros servicios, marketing y su experiencia.</li>
          </ul>
          <p>Podemos compartir su información personal con Servicios de terceros para monitorear y analizar el uso de nuestro sitio web, para contactarlo:</p>
          <ul>
            <li><b>Google Analytics</b> (Google LLC)
            Datos personales recopilados: cookies y datos de uso.
              <b><a href='https://policies.google.com/privacy'>https://policies.google.com</a> |
              <a href='https://tools.google.com/dlpage/gaoptout?hl=en'> https://tools.google.com/dlpage</a></b></li>
            <li><b>HubSpot Analytics & CRM</b> (HubSpot, Inc.)
            Datos personales recopilados: dirección de correo electrónico, número de teléfono, nombre, apellido, razón social, Cookies y Datos de uso.
              <b><a href='https://www.hubspot.com/legal/privacy-policy'>https://www.hubspot.com/legal</a></b></li>
            <li><b>Linkedin Audience Network</b> (LinkedIn Corporation)
            Datos Personales recogidos: Cookies y Datos de Uso.
                <b><a href='https://www.linkedin.com/legal/privacy-policy'>https://www.linkedin.com/legal</a> | <a href='https://www.linkedin.com/psettings/advertising/websites-visited'>https://www.linkedin.com/psettings</a></b></li>
          </ul>
          <p>Podemos divulgar su información personal para cualquier otro propósito solo con su consentimiento.</p>

          <h3>2.3. Conservación de sus datos personales</h3>
          <p>evly conservará sus Datos personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de privacidad. Conservaremos y utilizaremos sus Datos personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestras políticas y acuerdos legales.</p>
          <p>Devly también conservará los Datos de uso para fines de análisis interno. Los datos de uso generalmente se retienen por un período de tiempo más corto, excepto cuando estos datos se usan para fortalecer la seguridad o mejorar la funcionalidad de nuestro servicio, o cuando estamos legalmente obligados a retener estos datos por períodos de tiempo más largos.</p>

          <h3>2.4. Base legal para recopilar sus datos personales</h3>
          <p>Devly puede procesar datos personales relacionados con usted si se aplica uno de los siguientes:</p>
          <ul>
            <li>Ha dado su consentimiento para uno o más propósitos específicos.</li>
            <li>El suministro de Datos Personales es necesario para la ejecución de un acuerdo con usted y/o para cualquier obligación precontractual del mismo.</li>
            <li>El tratamiento es necesario para el cumplimiento de una obligación legal a la que está sujeta la Empresa.</li>
          </ul>
        </Child2Section>

        <Child2Section>
          <h2>3. Cambios a esta Política de Privacidad</h2>
          <p>Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de privacidad en esta página. Le informaremos por correo electrónico o mediante un aviso destacado en Nuestro sitio web y actualizaremos la fecha de "Última actualización" en la parte superior de esta Política de privacidad. Se le recomienda revisar esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de privacidad son efectivos cuando se publican en esta página.</p>
        </Child2Section>

        <Child2Section>
          <h2>4. Sus derechos de protección de datos personales</h2>
          <p>Tiene ciertos derechos de protección de datos con respecto a los Datos personales procesados ​​por nosotros. Si desea que se le informe qué datos personales tenemos sobre usted y si desea que se eliminen de nuestros sistemas, comuníquese con nosotros.</p>
          <p>En determinadas circunstancias, usted tiene los siguientes derechos de protección de datos:</p>
          <ul>
            <li>Derecho a acceder, actualizar o eliminar la información que tenemos sobre usted.</li>
            <li>El derecho de rectificación.</li>
            <li>El derecho a oponerse.</li>
            <li>El derecho de restricción.</li>
            <li>El derecho a la portabilidad de los datos.</li>
            <li>El derecho a retirar el consentimiento.</li>
          </ul>
          <p>Cualquier solicitud para ejercer estos derechos puede dirigirse a Nosotros a través de los datos de contacto proporcionados en esta Política de privacidad.</p>
        </Child2Section>

        <Child3Section>
          <h2>5. Contáctenos</h2>
          <p>El controlador de datos responsable de su información personal a los efectos de la ley de protección de datos de la Republica Argentina aplicable es:</p>

          <h4><b>Devly</b></h4>
          <h4>Fullana 1172, Pergamino, Buenos Aires, Argentina.</h4>
          <h4>Email: <b><a href='mailto:gastonartigau@gmail.com'>privacy@devly.com</a></b></h4>
          <h4>Teléfono: <b><a href='tel:2477 658055'>+54 (2477) 658055</a></b></h4>

          <p>Si tiene alguna pregunta sobre esta Política de privacidad o nuestras prácticas de recopilación de datos, comuníquese con nosotros al número de teléfono o correo electrónico que se indica arriba y especifique su país de residencia y la naturaleza de su pregunta.</p>
        </Child3Section>

      </Section>

      <Footer/>
    </>
  )
}

export default PrivacyPolicy