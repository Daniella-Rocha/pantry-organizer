import { useContext, useEffect } from 'react';

import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

import { CategoryContext } from '../../contexts/categoryContext';

import styles from './Home.module.css';

const Home = () => {

	const { itemsDisplay, setItemsDisplay, itemsList } = useContext(CategoryContext);

	useEffect(() => {
		setItemsDisplay(itemsList);
	}, []);

	return (
		<div className={styles.home_container}>
			{/* {
				itemsDisplay.length > 0 ?
					(
						itemsDisplay.map((item) =>
							<ItemDisplay key={item.id} item={item} />
						)
					)
					:
					(
						<div className={styles.empty}>
							<p>Nenhum item nesta categoria.</p>
						</div>
					)
			} */}
		</div>
	)
}

export default Home
