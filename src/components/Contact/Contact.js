import React, { useState } from 'react';
// import Button from '../Button';

// import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  // const initialState = {
  //   name: '',
  //   phone: '',
  //   email: '',
  //   comment: '',
  // };

  // const [contactForm, setContactForm] = useState(initialState);

  // const handleChange = (id, e) => {
  //   const tempForm = { ...contactForm, [id]: e };
  //   setContactForm(tempForm);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setContactForm(initialState);
  // };

  return (
    <div className={styles.root}>

      <div className={styles.section}>
        <h4>Horario de Atencion</h4>
        <p>Lunes a Viernes de 8:30am a 5:00pm</p>
        <p>Sabados de 8:30am a 12:30pm</p>
      </div>

      <div className={styles.section}>
        <h4>Escribenos</h4>
        <p>
          Por <a href="https://wa.me/573132098050"><b>Whatsapp</b></a>
          , <a href="https://www.instagram.com/poinsettiasdecolombia/"><b>Instagram</b></a>
          , o <a href="https://www.facebook.com/poinsettiasdecolombia"><b>Facebook</b></a>.
          Estamos disponibles para responder todas tus dudas.
        </p>
      </div>

      <div className={styles.section}>
        <h4>Celular</h4>
        <p>
            <a href="https://wa.me/573132098050"><b>+57 313 209 8050</b></a>
        </p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          También puedes escribirnos
          a <a href="poinsettiasdecolombia@gmail.com">
            <b>poinsettiasdecolombia@gmail.com</b>
            </a>
        </p>
      </div>

      {/*<div className={styles.contactContainer}>*/}
      {/*  <form onSubmit={(e) => handleSubmit(e)}>*/}
      {/*    <div className={styles.contactForm}>*/}
      {/*      <FormInputField*/}
      {/*        id={'name'}*/}
      {/*        value={contactForm.name}*/}
      {/*        handleChange={(id, e) => handleChange(id, e)}*/}
      {/*        type={'text'}*/}
      {/*        labelName={'Full Name'}*/}
      {/*        required*/}
      {/*      />*/}
      {/*      <FormInputField*/}
      {/*        id={'phone'}*/}
      {/*        value={contactForm.phone}*/}
      {/*        handleChange={(id, e) => handleChange(id, e)}*/}
      {/*        type={'number'}*/}
      {/*        labelName={'Phone Number'}*/}
      {/*        required*/}
      {/*      />*/}
      {/*      <FormInputField*/}
      {/*        id={'email'}*/}
      {/*        value={contactForm.email}*/}
      {/*        handleChange={(id, e) => handleChange(id, e)}*/}
      {/*        type={'email'}*/}
      {/*        labelName={'Email'}*/}
      {/*        required*/}
      {/*      />*/}
      {/*      <div className={styles.commentInput}>*/}
      {/*        <FormInputField*/}
      {/*          id={'comment'}*/}
      {/*          value={contactForm.comment}*/}
      {/*          handleChange={(id, e) => handleChange(id, e)}*/}
      {/*          type={'textarea'}*/}
      {/*          labelName={'Comments / Questions'}*/}
      {/*          required*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <Button*/}
      {/*      className={styles.customButton}*/}
      {/*      level={'primary'}*/}
      {/*      type={'buttonSubmit'}*/}
      {/*    >*/}
      {/*      submit*/}
      {/*    </Button>*/}
      {/*  </form>*/}
      {/*</div>*/}
    </div>
  );
};

export default Contact;
