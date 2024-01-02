import { useState, useEffect } from 'react';

import { useForm } from "react-hook-form";

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import { IoIosSend } from "react-icons/io";

import styles from './ModalCategory.module.css';

const ModalCategory = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    
    const onSubmit = (data) => console.log(data);

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
                            controlId="name_category"
                        >
                            <Form.Label>
                                Nome da categoria
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                {...register("name_category",
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
                                {errors.name_category?.message}
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
