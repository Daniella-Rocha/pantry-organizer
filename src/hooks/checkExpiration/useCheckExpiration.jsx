import { useEffect, useState } from "react";

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const useCheckExpiration = () => {

    const [formatedDate, setFormatedDate] = useState('');

    const verifyExpiration = (date) => {
        const now = dayjs();
        const dateProduct = dayjs(date);
        const expired = dateProduct.isBefore(now);
        return expired;
    }

    const dateFormatting = (date) => {
        setFormatedDate(dayjs(date).format('DD/MM/YYYY'));
    }

    return {
        verifyExpiration,
        dateFormatting,
        formatedDate
    }
}

export default useCheckExpiration
