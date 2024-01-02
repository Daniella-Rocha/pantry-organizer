import { useEffect, useState } from "react";

import { requestPantryOrganizer } from '../../axios/config.jsx';

export const useRequestItems = () => {
    const [itemsList, setItemsList] = useState([]);

    const [categories, setCategories] = useState([]);

    const requestAllItems = async () => {

        // requisição para trazer todos os itens da despensa

        try {
            const response = await requestPantryOrganizer.get('/v1/all-items');

            const data = await response.data;

            setItemsList(data);

        } catch (error) {
            console.error("Error fetching items:", error);
        }

    }

    const requestAllCategories = async () => {

        // requisição para trazer todas as categorias da despensa

        try {
            const reponse = await requestPantryOrganizer.get('/v1/all-categories');

            const data = await reponse.data;

            setCategories(data);

        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

    const updateItem = async (id, item) => {

        // requisição para atualizar um item via axios

        try {
            const response = await requestPantryOrganizer.patch(`/v1/all-items/${id}`,
                {
                    method: "PATCH",
                    body: item
                }
            );

            console.log(item);
            
            const newList = itemsList.filter(item => item.id !== id);

            setItemsList(() => {
                return [
                    ...newList,
                    {...item}
                ]
            });

        } catch (error) {
            console.log("Error fetching item:", error);
        }
    }

    const createNewItem = async (item) => {

        // requisição para adicionar um novo item via axios

        try {
            const response = await requestPantryOrganizer.post('/v1/all-items',

                {
                    method: "POST",
                    body: item
                }
            )

            // const dataPost = response.data;

            console.log(item);

        } catch (error) {
            console.log("Error fetching item:", error);
        }
    }
    const deleteAnItem = async (id, item) => {

        // requisição para excluir um item via axios

        try {
            const response = await requestPantryOrganizer.delete(`/v1/all-items/${id}`,
                {
                    method: "DELETE",
                    body: item
                }
            )

            const dataDeleted = itemsList.filter(item => item.id !== id);

            setItemsList(dataDeleted);

            console.log(item);

        } catch (error) {
            console.log("Error deleting item:", error);
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
        updateItem,
        createNewItem,
        deleteAnItem
    }
}