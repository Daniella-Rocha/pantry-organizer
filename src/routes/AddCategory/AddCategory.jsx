import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { IoIosSend } from "react-icons/io";

import { CategoryContext } from '../../contexts/categoryContext';

import { v4 as uuidv4 } from 'uuid';

import styles from './AddCategory.module.css';

const AddCategory = () => {

  const navigate = useNavigate();

  const { newCategory } = useContext(CategoryContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const item = {
      ...data,
      id: uuidv4()
    }

    newCategory(item);

    navigate('/todas-categorias');
  };

  return (
    <div className={styles.container}>
      <h1>Nova categoria</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group
          controlId="category_name"
        >
          <Form.Label>
            Nome da categoria
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoria"
            {
            ...register("category_name",
              {
                required: "Este campo não pode ser vazio",
                minLength: {
                  value: 2,
                  message: "Mínimo de 2 caracteres."
                },
                maxLength: {
                  value: 30,
                  message: "Máximo de 30 caracteres."
                }
              }
            )
            }
          />
          <span
            className={styles.error}
          >
            {errors.name_category?.message}
          </span>
        </Form.Group>
        <Form.Group
          controlId="description"
        >
          <Form.Label>
            Descrição
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {
            ...register("description",
              {
                maxLength: {
                  value: 100,
                  message: "Máximo de 100 caracteres."
                }
              }
            )
            }
          />
          <span
            className={styles.error}
          >
            {errors.description?.message}
          </span>
        </Form.Group>
        <Button
          type="submit"
        >
          Criar
          <IoIosSend />
        </Button>
      </Form>
    </div>
  )
}

export default AddCategory
