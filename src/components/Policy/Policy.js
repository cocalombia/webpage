import React from 'react';
import * as styles from './Policy.module.css';

const ExamplePolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Lorem Ipsum</h3>
        <p>
          Delaware limited liability company (The Sydney) collects personal
          information that you voluntarily provide when applying or registering
          for an account with The Upside or making a purchase on The Upside
          website; www.theupside.com (the Website).
        </p>
      </div>

      <div className={styles.section}>
        <h3>2. Lorem Ipsum</h3>
        <p>
          Our Services, including but not limited to the registration of an
          account with us or placing of an order, is not intended to be used by
          children under the age of 13. When a visitor indicates an age under
          13, the registration process for The Upside website cannot be
          completed, and no personally identifying information is collected in
          conjunction with that attempted submission except that we retain
          e-mail addresses of such persons (and record of access attempts) for
          purposes of denying registration. Otherwise, we do not knowingly
          collect personally identifiable information from visitors under the
          age of 13.
        </p>
      </div>
      <div className={styles.section}>
        <h3>3. Lorem Ipsum</h3>
        <p>
          You must only use our Services in accordance with this Privacy Policy
          and any applicable law or regulations. You agree to refrain from
          undertaking any prohibited acts as set out in this Clause 3. You must
          not (or attempt to):
        </p>
        <p>
          (a) interfere with or disrupt the use of Services or the website, in
          any manner including but not limited to the servicers or networks that
          host the website;{' '}
        </p>
      </div>
    </div>
  );
};

const ShippingPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>Zonas de distribución</h3>
        <p>
          Realizamos domicilios sin costo adicional a mayoristas en la zona norte
          de Bogotá, Chia, Cota, Funza y Mosquera.
        </p>
      </div>

      <div className={styles.section}>
        <h3>Cantidades</h3>
        <p>
          Por motivos de disponibilidad de vehiculos, solo podemos realizar
          domicilios a mayoristas, por pedidos de 10 o más cajas. El número de
          plantas por caja depende de su tamaño:
        </p>
        <ul style={{listStyleType: 'disc'}}>
          <li>Pequeñas (P10) y medianas (P14): 12 unidades por caja</li>
          <li>Grandes (P17): 6 unidades por caja</li>
          <li>Extra Grandes (P28): 2 unidades por caja</li>
        </ul>
      </div>
    </div>
  );
};

const PaymentPolicy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <p>
          Preferimos pagos en efectivo, pero también recibimos consignaciones
          a nuestras cuentas de Bancolombia y Nequi.
        </p>
      </div>
    </div>
  );
};


export {ShippingPolicy, PaymentPolicy};
