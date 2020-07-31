import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function RegisterCategory(){
  const initialValues = {
    title: '',
    description:'',
    color: ''
  }

  const { handleChange, values, clearForm } = useForm(initialValues)

  const [categories, setCategories] = useState([]);
  
  function handleSubmit(e){
    e.preventDefault();
    
    setCategories([
      ...categories,
      values
    ])

    
    clearForm(initialValues)
  }


  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
      ? 'http://localhost:3300/categories'
      : 'https://nihonflix.herokuapp.com/categories';

    fetch(URL)
      .then(async (serverResponse) => {
        const res = await serverResponse.json();
        setCategories([
          ...res
        ]);
      });
  },[]);
  
  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.title}</h1>
      <form onSubmit={handleSubmit}>
        <FormField label="Título: " type="text" name="title" value={values.title} onChange={handleChange}/>

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
            <li key={category.id}>
              {category.title}
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