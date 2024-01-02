import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

import './DropDown.css';

const DropDownMenu = () => {

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Início</Dropdown.Item>
                <Dropdown.Item as={Link} to="/add-item">Novo item</Dropdown.Item>
                <Dropdown.Item as={Link} to="/add-categoria">Nova categoria</Dropdown.Item>
                <Dropdown.Item as={Link} to="/todas-categorias">Todas as categorias</Dropdown.Item>
                <Dropdown.Item as={Link} to="#">Configurações</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDownMenu;
