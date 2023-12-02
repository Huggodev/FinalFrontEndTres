import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contactForm, setContactForm] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState({
    errorMessage: '',
    succesMessage: '',
  });
  const [valid, setValid] = useState(true);

  const { name, email } = contactForm;
  const { errorMessage, succesMessage } = message;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContactForm({
      ...contactForm,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validator = validateForm(name, email);
    setValid(validator)

    if (!validator) {
      getMessage('error', 'Por favor verifique su información nuevamente')
    } else {
      console.log('Formulario:', contactForm)
      getMessage('succes', `Gracias ${name}, te contactaremos cuanto antes vía mail.`)
      setTimeout(() => {
        resetForm();
        resetMessage();
      }, 3000);
    }

    setTimeout(() => {
      resetMessage();
    }, 3000);
  };

  const resetForm = () => {
    setContactForm({
      name: '',
      email: ''
    });
  };

  const resetMessage = () => setMessage({
    errorMessage: '',
    succesMessage: '',
  });

  const validateForm = (pName, pmail) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(pmail) && pName.length > 5;
  };

  const getMessage = (type, string) => {
    if (type === 'error') {
      return setMessage({
        ...message,
        errorMessage: string
      })
    } else {
      return setMessage({
        ...message,
        succesMessage: string
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        <button className="btn-submit">Enviar</button>
      </form>
      {!valid ? <span className="msgForm">{errorMessage}</span> : <span className="msgForm">{succesMessage}</span>}

    </div>
  );
};

export default Form;