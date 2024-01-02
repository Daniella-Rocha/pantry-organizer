import { Link, useRouteError } from "react-router-dom";


import styles from './ErroPage.module.css';

const ErroPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.error}>
            <h1>Oops!</h1>
            <p>Desculpe, aconteceu algo inexperado...</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/'}>
                voltar para o início
            </Link>
        </div>
    )
}

export default ErroPage
