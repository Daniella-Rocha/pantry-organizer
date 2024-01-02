import { useEffect, useState } from 'react';

import { useExpiresSoon } from '../../hooks/checkDate/useCheckDate';

import dayjs from 'dayjs';

import 'dayjs/locale/pt-br';

import ItemModal from '../ItemModal/ItemModal';

import EditModal from '../EditItem/EditItem';

import { MdDangerous } from "react-icons/md";

import { FcExpired } from "react-icons/fc";

import styles from './ItemDisplay.module.css';

dayjs.locale('pt-br');

const ItemDisplay = ({ item }) => {

    const { name, quantity, category, expiration_date } = item;

    const { diference, expiresSoon } = useExpiresSoon(expiration_date);

    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(dayjs(expiration_date).format('DD/MM/YYYY'));
    }, [date]);

    const checkExpiration = () => {
        const now = dayjs();
        const dateProduct = dayjs(expiration_date);
        const expired = dateProduct.isBefore(now);

        return expired;
    }

    return (
        <div className={styles.container_display}>
            {/* <div >
                <h3>{name}</h3>
                <span>Qtd: {quantity}</span>
                <div>
                    <span>categoria: {category}</span>
                </div>
            </div>
            <div>
                {
                    (
                        checkExpiration() &&
                        (
                            <span
                                className={`
                    ${checkExpiration() ? styles.expired : ''}
                    `}
                            >
                                expirado: {date}
                                <MdDangerous />
                            </span>
                        ))
                    ||
                    expiresSoon &&
                    (
                        <span
                            className={` ${expiresSoon ? styles.expires_soon : ''} `}
                        >
                            expira em breve: {diference} {diference > 1 ? `dias` : `dia`}
                            <FcExpired />
                        </span>
                    )
                    ||
                    (
                        <span> expira em: {date}</span>
                    )

                }
            </div>
            <div className={styles.item_display_btns}>
                <ItemModal item={item} />
                <EditModal item={item} />
                <div className={styles.item_display_btn_delete}>
                    <button

                        type="button"
                        aria-label='excluir'
                    >
                        Excluir
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default ItemDisplay;
