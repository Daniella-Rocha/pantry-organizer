import { useEffect, useState } from "react";

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export const useExpiresSoon = () => {

    // const setDate = 7;
    // const dateProduct = dayjs(date);
    // const diference = dateProduct.diff(dayjs(), 'day') + 1;
    // const checkDate = diference <= setDate;

    const checkExpiresSoon = (date) => {
        const setDate = 7;
        const dateProduct = dayjs(date);
        const diference = dateProduct.diff(dayjs(), 'day') + 1;
        const checkDate = diference <= setDate;

        return checkDate;
    }

    const checkDiference = (date) => {
        const dateProduct = dayjs(date);
        const diference = dateProduct.diff(dayjs(), 'day') + 1;

        return diference;
    }

    return {
        // checkDate,
        // diference,
        checkDiference,
        checkExpiresSoon
    }
}