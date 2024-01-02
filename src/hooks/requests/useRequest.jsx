import { useEffect, useState } from "react";

import { requestPantryOrganizer } from '../../axios/config';

export const useRequestItems = () => {
    const [itemsList, setItemsList] = useState([]);

    const [categories, setCategories] = useState([]);

    const requestAllItems = async () => {
        try {
            const response = await requestPantryOrganizer.get('/all-items');

            const data = await response.data;
            
            console.log(data);
            
            setItemsList(data);

        } catch (error) {
            console.error("Error fetching items:", error);
        }

    }

    const requestAllCategories = async () => {

        try {
            const reponse = await requestPantryOrganizer.get('/all-categories');

            const data = await reponse.data;

            setCategories(data);

        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

    const updateItem = async (id, item) => {
        try {
            const response = await requestPantryOrganizerMockable.patch(`${id}`,
                {
                    method: "PATCH",
                    body: item
                }
            );

            const updated = await response.data;

            console.log(updated);

        } catch (error) {
            console.log(item);
            console.error("Error fetching item:", error);
        }
    }

    useEffect(() => {
        requestAllItems();
    }, []);

    useEffect(() => {
        requestAllCategories();
    }, []);


    return {
        itemsList,
        categories,
        updateItem
    }
}