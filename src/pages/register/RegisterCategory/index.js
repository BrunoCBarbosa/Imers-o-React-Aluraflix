import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';


function RegisterCategory(){
  const initialValues = {
    title: '',
    description:'',
    color: ''
  }

  const { handleChange, values, clearForm } = useForm(initialValues)
  const history = useHistory();
  
  function handleSubmit(e){
    e.preventDefault();

    categoriesRepository.create({
      title: values.title,
      description: values.description,
      color: values.color
    }).then(() => {
      history.push('/')
    })

    clearForm(initialValues)
  }

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

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
  
}

export default RegisterCategory;