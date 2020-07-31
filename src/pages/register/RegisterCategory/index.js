import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory(){
  const initialValues = {
    name: '',
    description:'',
    color: ''
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function handleSubmit(e){
    e.preventDefault();
    
    setCategories([
      ...categories,
      values
    ])

    
    setValues(initialValues)
  }

  function handleChange(eventInfo){
    // const { getAttribute, value } = eventInfo.target
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value
    )

  }

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value
    })
  }

  useEffect(() => {
    const URL = 'http://localhost:3300/categories';

    fetch(URL)
    .then(async (serverResponse) => {
      const res = await serverResponse.json();
      setCategories([
        ...res
      ]);
    });
  }, []);
  
  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>
      <form onSubmit={handleSubmit}>
        <FormField label="Nome: " type="text" name="name" value={values.name} onChange={handleChange}/>

        <FormField label="Descrição: " type="textarea" name="description" value={values.description} onChange={handleChange}/>

        <FormField label="Cor: " type="color" name="color" value={values.color} onChange={handleChange} />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && <div>
        Loading...
      </div>}

      <ul>
        {categories.map((category) => {
          return(
            <li key={category.name}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
  
}

export default RegisterCategory;