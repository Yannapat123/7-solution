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
    const [deleteGroup, setDeletGruop] = useState<Tdata[]>([])

    const handleAddTodo = (type: string, name: string, index: number) => {
        const listData = {
            name: name,
            type: type
        }
        if (type === 'Fruit') {

            setFruitList([...fruitList, listData]);
            setDeletGruop([...deleteGroup, listData])

        } else {
            setVegetableList([...vegetableList, listData]);
            setDeletGruop([...deleteGroup, listData])


        }
        const newTodos = [...items];
        newTodos.splice(index, 1);
        setItems(newTodos);
    }
    const deleteAddTodo = () => {
        // console.log('t', items)
        const newArr = [...deleteGroup];
        newArr.splice(0, 1);
        setDeletGruop(newArr)

        // console.log(deleteGroup[deleteGroup.length - 1])
        // const find = deleteGroup[deleteGroup.length - 1]
        const find = deleteGroup[0]


        if (find?.type === 'Fruit') {
            const newTodos = [...fruitList];

            const filteredItems = newTodos.filter(item => item.name !== find.name);
            setFruitList(filteredItems);

        } else if (find?.type === 'Vegetable') {
            const newTodos = [...vegetableList];
            const filteredItems = newTodos.filter(item => item.name !== find.name);
            setVegetableList(filteredItems);

        } else {
            return 0
        }
        const updatedItems = [...items, find];

        setItems(updatedItems)

        // newArr.splice(-1, 1);
        // setDeletGruop(newArr)


    }
    return {
        deleteAddTodo,
        items,
        vegetableList,
        fruitList,
        handleAddTodo
    }
}