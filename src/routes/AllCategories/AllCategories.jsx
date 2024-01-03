import { useContext } from 'react';

import { CategoryContext } from '../../contexts/categoryContext';

// import ModalCategory from '../../components/ModalCategory/ModalCategory';

import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';

import styles from './AllCategories.module.css';

const AllCategories = () => {

    const { categoriesDisplay } = useContext(CategoryContext);

    return (
        // se houver items na lista de categorias cria-se as seções para cada item

        categoriesDisplay.length > 0 &&
        <div className={styles.container}>
            <h2>Todas as categorias</h2>
            {
                categoriesDisplay.map((item) =>
                    <CategoryDisplay key={item.id} item={item} />
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
