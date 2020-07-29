import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

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
  
  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>
      <form onSubmit={handleSubmit}>
        <FormField label="Nome: " type="text" name="name" value={values.name} onChange={handleChange}/>

        <div>
          <label>
            Descrição:
            <textarea name="description" value={values.description} onChange={handleChange}/>
          </label>
        </div>

        <FormField label="Cor: " type="color" name="color" value={values.color} onChange={handleChange} />

        <button>
          Cadastrar
        </button>
      </form>

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