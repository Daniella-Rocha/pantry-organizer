import { useEffect, useState } from "react";

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export const useExpiresSoon = (date) => {
    const [expiresSoon, setExpiresSoon] = useState(false);
    
    const setDate = 7;
    const dateProduct = dayjs(date);
    const diference = dateProduct.diff(dayjs(), 'day') + 1;
    const checkDate = diference <= setDate;
    
    useEffect(() =>{
        setExpiresSoon(checkDate);
    }, []);
    
    return{
        checkDate,
        expiresSoon,
        diference
    }
}