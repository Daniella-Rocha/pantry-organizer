import { useEffect, useState } from "react";

import { requestPantryOrganizer } from '../../axios/config';

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

        const newItem = JSON.stringify(item);
        // requisição para atualizar um item via axios

        try {
            const response = await requestPantryOrganizer.patch(`/v1/all-items/${id}`,
                {
                    method: "PATCH",
                    body: newItem
                }
            );

            console.log(newItem);

            setItemsList((prevState) => {
                return [
                    ...prevState,
                    { ...newItem }
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

            const dataPost = response.data.message;

            console.log(item);

            setItemsList(prevState =>
                [
                    ...prevState,
                    { ...item }
                ]
            )

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

        } catch (error) {
            console.log("Error deleting item:", error);
        }
    }

    // requisição para criar nova cetgoria via axios
    const newCategory = async (item) => {

        const newItem = JSON.stringify(item);

        try {
            const response = await requestPantryOrganizer.post('/v1/all-categories',
                {
                    method: "POST",
                    body: newItem
                }
            );

            console.log(response.data.message);

            console.log(item);

            setCategories(prevState =>
                [
                    ...prevState,
                    { ...item }
                ]
            );

        } catch (error) {
            console.log(error);
        }

    }
    // deletar uma categoria
    const deleteACategory = async (item, id) => {

        try {
            const response = await requestPantryOrganizer.delete(`/v1/all-categories/${item.id}`,
                {
                    method: "DELETE",
                    body: item
                }
            )

            console.log(response.data.message);

            // rotarna as categorias com id diferente, causando atualização visual da exclusão de categorias
            const updatedList = categories.filter(item => item.id !== id);

            // atualiza a lista de categorias c
            setCategories(updatedList);

        } catch (error) {
            console.log(error);
        }
    }

    const updateCategory = async (id, item) => {
        try {
            const response = await requestPantryOrganizer.patch(`/v1/all-categories/${id}`,
                {
                    method: "PATCH",
                    body: item
                }
            )

            console.log(response.data.message);

            setCategories(prevState =>
                [
                    ...prevState
                ]
            )

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        requestAllItems();
    }, []);

    useEffect(() => {
        requestAllCategories();
    }, []);

    useEffect(() => {
        setItemsList(itemsList);
    }, [itemsList]);

    return {
        itemsList,
        categories,
        updateItem,
        createNewItem,
        deleteAnItem,
        newCategory,
        deleteACategory,
        updateCategory
    }
}