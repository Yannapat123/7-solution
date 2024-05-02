import { useState } from "react"

type Tdata = {
    name: string
    type: string
}
export const useManageTodoList = () => {

    const data = [
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    ]
    const [items, setItems] = useState<Tdata[]>(data)
    const [fruitList, setFruitList] = useState<Tdata[]>([])
    const [vegetableList, setVegetableList] = useState<Tdata[]>([])

    const handleAddTodo = (type: string, name: string, index: number) => {
        const listData = {
            name: name,
            type: type
        }
        if (type === 'Fruit') {

            setFruitList([...fruitList, listData]);

        } else {
            setVegetableList([...vegetableList, listData]);

        }
        const newTodos = [...items];
        newTodos.splice(index, 1);
        setItems(newTodos);
    }
    return {
        items,
        vegetableList,
        fruitList,
        handleAddTodo
    }
}