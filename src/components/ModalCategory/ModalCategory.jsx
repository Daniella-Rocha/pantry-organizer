import { useState, useContext } from 'react';

import { useForm } from "react-hook-form";

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import { CategoryContext } from '../../contexts/categoryContext';

import styles from './ModalCategory.module.css';

const ModalCategory = ({ item, updateStateCategory }) => {

    const { updateCategory } = useContext(CategoryContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            category_name: item.category_name,
            description: item.description
        }
    });

    const onSubmit = (data) => {
        const newItem = {
            id: item.id,
            category_name: data.category_name,
            description: data.description
        }
        setShow(false);
        updateCategory(item.id, data);
        updateStateCategory(newItem);
    };

    const [fullscreen, setFullscreen] = useState(true);

    const [show, setShow] = useState(false);

    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    }

    // useEffect(() => {
    //     console.log(errors);
    // }, [errors]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <div>
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
                            controlId="category_name"
                        >
                            <Form.Label>
                                Nome da categoria
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                {...register("category_name",
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
                                {errors.category_name?.message}
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
                                placeholder='descrição'
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
                        <Button
                            type="submit"
                        >
                            Salvar alterações
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalCategory;
