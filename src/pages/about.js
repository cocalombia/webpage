import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let visionRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`El sueño de biólogos \n trabajando por el campo y la naturaleza por 30 años`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(visionRef)} to={'#Vision'}>
            Vision
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Historia
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#value'}>
            Valores
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={visionRef}>
            <p>
              La poinsettia es nuestra alternativa natural y más
              ambientalmente amigable a las decoraciones plásticas que son
              tan comunes en nuestra celebración contemporánea de la navidad.
              A la fecha continuamos con nuestro ideal de producir plantas y
              flores ornamentales de calidad, para adornar nuestros espacios con vida.
            </p>
            <br />
            <br />
            <p>
              Adicionalmente producimos flores de corte para decorar y
              celebrar con vida todos los días del año.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Historia</h3>
            <div ref={historyRef}>
              <p>
                Fundada en 1993 por Nohora Espejo y Hernando lopez, dos biologos
                de la Universidad Nacional. Poinsettias de Colombia fue uno de
                los primeros productores de estas plantas en el País.
                Desde entonces hemos trabajado por crear una navidad llena de
                vida y color.
              </p>
              <p>
                Iniciamos revendiendo y distribuyendo plantas desde el jardín
                trasero de nuestra casa en Bogotá, pero pronto iniciamos
                nuestra propia producción a un pequeño en la region de
                San Antonio del Tequendama. Con los años, al incrementar
                nuestra producción, tuvimos que mudarnos a un espacio más grande
                en el municipio de La Mesa cundinamarca, donde estamos contentos
                de contribuir al desarrollo de la region.
              </p>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Valores</h3>
            <div id={'#values'} ref={valuesRef}>
              <p>
                En nuestro cultivo empleamos una docena de campesinos de La Mesa,
                generando un tejido social que brinde oportunidades de
                crecimiento y educación para las familias de la region, que
                empodere al campesinado, y que permita el desarrollo del potencial
                agricola del país.
              </p>
              <ol>
                <li>Producimos y decoramos con vida</li>
                <li>Empoderamos al campesinado</li>
                <li>Respetamos la naturaleza</li>
              </ol>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
