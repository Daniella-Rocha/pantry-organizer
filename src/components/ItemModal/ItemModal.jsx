import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import styles from './ItemModal.module.css';

import dayjs from 'dayjs';

import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const ItemModal = ({ item }) => {

	const { name, description, expiration_date, quantity, category, weight } = item;

	const [date, setDate] = useState('');

	const [show, setShow] = useState(false);

	const [fullscreen, setFullscreen] = useState(true);

	const handleShow = (breakpoint) => {
		setFullscreen(breakpoint);
		setShow(true);
	}
	
	useEffect(() => {
        setDate(dayjs(expiration_date).format('DD/MM/YYYY'));
    }, [date]);

	return (
		<div className={styles.item_modal}>

			<Button className="me-2 mb-2" onClick={() => handleShow(true)}>
				Ver tudo
			</Button>
			<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Detalhes</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<Row>
								<h4>Descrição</h4>
								<p>{description}</p>
							</Row>
							<Row>
								<h6>Data de validade</h6>
								<span>{date}</span>
							</Row>
						</Row>
						<Row>
							<Col xs={12} md={6}>
								<h5>Última entrada</h5>
								<Col xs={6} md={4}>
									<span>Quantidade</span>
								</Col>
								<Col xs={6} md={4}>
									<span>Data</span>
								</Col>
							</Col>
							<Col xs={12} md={6}>
								<h5>Última saída</h5>
								<Col xs={6} md={4}>
									<span>Quantidade</span>
								</Col>
								<Col xs={6} md={4}>
									<span>Data</span>
								</Col>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default ItemModal;
