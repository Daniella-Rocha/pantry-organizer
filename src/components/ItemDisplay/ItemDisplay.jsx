import { useEffect, useState } from 'react';

import { useExpiresSoon } from '../../hooks/checkDate/useCheckDate';

import dayjs from 'dayjs';

import 'dayjs/locale/pt-br';

import ItemModal from '../ItemModal/ItemModal';

import EditModal from '../EditItem/EditItem';

import { MdDangerous } from "react-icons/md";

import { FcExpired } from "react-icons/fc";

import styles from './ItemDisplay.module.css';
import useCheckExpiration from '../../hooks/checkExpiration/useCheckExpiration';

dayjs.locale('pt-br');

const ItemDisplay = ({ item, deleteItem }) => {

    const { verifyExpiration, dateFormatting, formatedDate } = useCheckExpiration();

    const { name, quantity, category, expiration_date } = item;

    const [editedItem, setEditedItem] = useState(null);

    const { diference, expiresSoon, checkDiference, checkExpiresSoon } = useExpiresSoon(expiration_date);

    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(dayjs(expiration_date).format('DD/MM/YYYY'));
    }, [date]);
    
    useEffect(() =>{
        if(editedItem){
            dateFormatting(editedItem.expiration_date)
        }
    }, [editedItem]);

    return (

        editedItem ?
            (
                <div className={styles.container_display}>
                    <div >
                        <h3>{editedItem.name}</h3>
                        <span>Qtd: {editedItem.quantity}</span>
                        <div>
                            <span>categoria: {editedItem.category}</span>
                        </div>
                    </div>
                    <div>
                        {
                            (
                                verifyExpiration(editedItem.expiration_date) &&
                                (
                                    <span
                                        className={`
                    ${verifyExpiration(editedItem.expiration_date) ? styles.expired : ''}
                    `}
                                    >
                                        expirado: {editedItem.expiration_date}
                                        <MdDangerous />
                                    </span>
                                ))
                            ||
                            checkExpiresSoon(editedItem.expiration_date) &&
                            (
                                <span
                                    className={` ${checkExpiresSoon(editedItem.expiration_date) ? styles.expires_soon : ''} `}
                                >
                                    {/* expira em breve: {diference} {diference > 1 ? `dias` : `dia`} */}
                                    expira em breve: {checkDiference(editedItem.expiration_date)} {checkDiference(editedItem.expiration_date) > 1 ? `dias` : `dia`}
                                    <FcExpired />
                                </span>
                            )
                            ||
                            (
                                // <span> expira em: {editedItem.expiration_date}</span>
                                <span> expira em: {formatedDate}</span>
                            )
                        }
                    </div>
                    <div className={styles.item_display_btns}>
                        <ItemModal item={editedItem} />
                        <EditModal item={editedItem} editedItem={setEditedItem} />
                        <div className={styles.item_display_btn_delete}>
                            <button

                                type="button"
                                aria-label='excluir'
                                onClick={() => deleteItem(editedItem.id, editedItem)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className={styles.container_display}>
                    <div >
                        <h3>{name}</h3>
                        <span>Qtd: {quantity}</span>
                        <div>
                            <span>categoria: {category}</span>
                        </div>
                    </div>
                    <div>
                        {
                            (
                                verifyExpiration(expiration_date) &&
                                (
                                    <span
                                        className={`
                    ${verifyExpiration(expiration_date) ? styles.expired : ''}
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
                        <EditModal item={item} editedItem={setEditedItem} />
                        <div className={styles.item_display_btn_delete}>
                            <button

                                type="button"
                                aria-label='excluir'
                                onClick={() => deleteItem(item.id, item)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>)
    )
}

export default ItemDisplay;
