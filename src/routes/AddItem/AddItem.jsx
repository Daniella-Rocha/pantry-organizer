import { useState, useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";

import { CategoryContext } from '../../contexts/categoryContext';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { IoIosSend } from "react-icons/io";

import styles from './AddItem.module.css';

const AddCategory = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { categories, createNewItem } = useContext(CategoryContext);

  const onSubmit = (data) => {
    createNewItem(data);
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={styles.container_item}>
      <h1>Novo Item</h1>
      <Form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group
          controlId="name">
          <Form.Label>
            Nome:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do item da despensa"
            {...register("name",
              {
                required: "Este campo não ser vazio.",
                minLength: {
                  value: 3,
                  message: "Este campo deve ter no mínimo 3 caracteres."
                },
                maxLength: {
                  value: 30,
                  message: "Este campo deve ter no máximo 30 caracteres."
                }
              })}
          />
          <span
            className={styles.error}
          >
            {errors.name?.message}
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
            {...register("description",
              {
                maxLength: {
                  value: 100,
                  message: "Máximo de 100 caracteres."
                }
              })}
          />
          <span
            className={styles.error}
          >
            {errors.description?.message}
          </span>
        </Form.Group>
        <Form.Group
          controlId="category"
        >
          <Form.Label>Selecione uma categoria:</Form.Label>
          <Form.Select
            aria-label="Selecione uma categoria"
            {...register("category",
              {
                required: "Escolha uma categoria.",
              })}
          >
            <option value="">
              Selecione uma opção
            </option>
            {
              categories.map((item) =>
                <option key={item.id}
                  value={item.category_name}
                >
                  {item.category_name}
                </option>
              )
            }
          </Form.Select>
          <span
            className={styles.error}
          >
            {errors.category?.message}
          </span>
        </Form.Group>
        <Form.Group
          controlId="expire_date"
        >
          <Form.Label>
            Data de validade
          </Form.Label>
          <Form.Control
            type="date"
            {...register("expire_date",
              {
                required: "Informe a validade do produto"
              })}
          />
          <span
            className={styles.error}
          >
            {errors.expire_date?.message}
          </span>
        </Form.Group>
        <Form.Group
          controlId="quantity"
        >
          <Form.Label>
            Quantidade
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Und"
            step="1"
            {...register("quantity",
              {
                required: "Informe uma quantidade.",
                min: 1,
                max: 99
              }
            )}
          />
          <span
            className={styles.error}
          >
            {errors.quantity?.message}
          </span>
        </Form.Group>
        <Form.Group
          controlId="weight"
        >
          <Form.Label>
            Peso
          </Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            placeholder='Kg'
            {...register("weight",
              {
                required: "Informe o peso.",
                min: 0.1,
                max: 99
              }
            )}
          />
          <span
            className={styles.error}
          >
            {errors.weight?.message}
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

export default AddCategory;
