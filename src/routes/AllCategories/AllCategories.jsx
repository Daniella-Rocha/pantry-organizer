import { useContext, useEffect } from 'react';

import { CategoryContext } from '../../contexts/categoryContext';

import { RiDeleteBin2Fill } from "react-icons/ri";

import ModalCategory from '../../components/ModalCategory/ModalCategory';

import styles from './AllCategories.module.css';

const AllCategories = () => {

    const { categoriesDisplay } = useContext(CategoryContext);

    return (
        categoriesDisplay.length > 0 &&
        <div className={styles.container}>
            <h2>Todas as categorias</h2>
            {
                categoriesDisplay.map((item) =>
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
                            <ModalCategory />
                            <button
                                type="button"
                                aria-label='excluir'
                                className={styles.btn_delete}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
        ||
        <div className={styles.container}>
            <h6> Nenhuma categoria para mostrar.</h6>
        </div>
    )
}

export default AllCategories
