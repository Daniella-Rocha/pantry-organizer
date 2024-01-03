import { useContext, useState } from 'react';

import ModalCategory from '../../components/ModalCategory/ModalCategory';

import { CategoryContext } from '../../contexts/categoryContext';

import styles from './CategoryDisplay.module.css';

const CategoryDisplay = ({ item }) => {

    const [updatedCategory, setUpdatedCategory] = useState(null);

    const { deleteACategory } = useContext(CategoryContext);

    return (
        updatedCategory ?
            (<div
                key={updatedCategory.id}
                className={styles.category}
            >
                <div>
                    <h3>{updatedCategory.category_name}</h3>
                    <span>Descrição:</span>
                    <p>
                        {updatedCategory.description}
                    </p>
                </div>
                <div
                    className={styles.action_btn}
                >
                    {/* modal para editar categoria */}
                    <ModalCategory item={updatedCategory}
                        updateStateCategory={setUpdatedCategory}
                    />
                    <button
                        type="button"
                        aria-label='excluir'
                        className={styles.btn_delete}
                        onClick={() => deleteACategory(updatedCategory, updatedCategory.id)}
                    >
                        Excluir
                    </button>
                </div>
            </div>)
            :
            <div
                key={item.id}
                className={styles.category}
            >
                <div>
                    <h3>{item.category_name}</h3>
                    <span>Descrição:</span>
                    <p>
                        {item.description}
                    </p>
                </div>
                <div
                    className={styles.action_btn}
                >
                    {/* modal para editar categoria */}
                    <ModalCategory item={item}
                        updateStateCategory={setUpdatedCategory}
                    />
                    <button
                        type="button"
                        aria-label='excluir'
                        className={styles.btn_delete}
                        onClick={() => deleteACategory(item, item.id)}
                    >
                        Excluir
                    </button>
                </div>
            </div>
    )
}

export default CategoryDisplay;
