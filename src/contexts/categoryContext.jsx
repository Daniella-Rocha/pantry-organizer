import { useState, createContext, useEffect } from "react";

import { useRequestItems } from '../hooks/requests/useRequest';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {

    const { itemsList, categories, updateItem, createNewItem, deleteAnItem } = useRequestItems();

    const [itemsDisplay, setItemsDisplay] = useState([]);

    const [categoriesDisplay, setCategoriesDisplay] = useState([]);

    useEffect(() => {
        setItemsDisplay(itemsList);
    }, [itemsList]);

    useEffect(() => {
        setCategoriesDisplay(categories);
    }, [categories]);

    const filterItems = (category) => {
        if (category === "Todos") {
            setItemsDisplay(itemsList);
            return;
        }

        const newItems = itemsList.filter(item => item.category === category);

        setItemsDisplay(newItems);
    }

    const filterCategory = (category) => {
        if (category === "Todas") {
            setCategoriesDisplay(categories);
        }

        const newCategory = categories.filter(item => item.category_name === category);

        setCategoriesDisplay(newCategory);
    }


    const sharedValues = {
        categories,
        itemsDisplay,
        itemsList,
        setItemsDisplay,
        filterItems,
        filterCategory,
        updateItem,
        categoriesDisplay,
        createNewItem,
        deleteAnItem
    }

    return <CategoryContext.Provider value={sharedValues}>
        {children}
    </CategoryContext.Provider>
}
