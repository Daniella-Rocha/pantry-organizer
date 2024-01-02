import { useState, useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";

import { CategoryContext } from '../../contexts/categoryContext';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import styles from './EditItem.module.css';

import './EditItem.css';

const EditItem = ({ item }) => {

    const { updateItem } = useContext(CategoryContext);

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues:{
            name: item.name,
            description: item.description,
            category: item.category,
            expire_date: item.expiration_date,
            quantity: item.quantity,
            weight: item.weight
        }
    });

    const onSubmit = (data) => {
        item = {
            name: data.name,
            description: data.description,
            category: data.category,
            expire_date: data.expire_date,
            quantity: data.quantity,
            weight: data.weight
        }
        updateItem(item.id, item);
    }

    const { categories } = useContext(CategoryContext);

    const [fullscreen, setFullscreen] = useState(true);

    const [show, setShow] = useState(false);

    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div className={styles.edit}
        >
            <Button
                className="me-2 mb-2"
                onClick={() => handleShow(true)}
            >
                Editar
            </Button>
            <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
            >
                <Modal.Header
                    closeButton
                >
                    <Modal.Title>
                        Editar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Form.Group
                            className="mb-3"
                            controlId="name"
                        >
                            <Form.Label>
                                Nome do item
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
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
                            className="mb-3"
                            controlId="description">
                            <Form.Label>
                                Descrição
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder='descrição do produto'
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
                            <Form.Select
                                aria-label="Selecione a categoria"
                                {...register("category",
                                    {
                                        required: "Escolha uma categoria.",
                                    })}
                            >
                                <option value="">
                                    Selecione a categoria
                                </option>
                                {categories.map((item) =>
                                    <option key={item.id}
                                        value={item.category_name}>
                                        {item.category_name}
                                    </option>)}
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
                                placeholder="Data de validade"
                                className="mb-3"

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
                            className="mb-3"
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
                            controlId="weight">
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
                            Salvar alterações
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default EditItem;