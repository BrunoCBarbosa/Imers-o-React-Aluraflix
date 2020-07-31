import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo(){
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({title}) => title);
  const initialValues = {
    title: '',
    url: '',
    category: ''

  }
  const { handleChange, values } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer)
      });
  }, []);

  return(
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const choosenCategory = categories.find((category) => {
          return category.title === values.category
        })

        console.log(choosenCategory)

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: choosenCategory.id
        })
          .then(() => {
            history.push('/');
          })

      }}>
        <FormField label="Título: " name="title" value={values.title} onChange={handleChange}/>

        <FormField label="URL: " name="url" value={values.url} onChange={handleChange}/>
       
        <FormField label="Categoria: " name="category" value={values.category} onChange={handleChange} suggestions={categoryTitles}/>

        <Button>
          Cadastrar
        </Button>
      </form>



      <Link to="/register/category">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
  
}

export default RegisterVideo;