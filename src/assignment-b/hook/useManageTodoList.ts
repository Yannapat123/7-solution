import axios from "axios"
import { useEffect, useState } from "react"

export const useManageTodoList = () => {

    const [items, setItems] = useState<any>({})

    const fetchList = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/users')
            // setItems(res.data)
            gropBy(res.data.users)
        } catch (error) {
            console.log(error)
        }

    }
    const gropBy = (users: any) => {
        let allDepartment: any = {}
        users.forEach((user: any) => {
            const { gender, age, firstName, lastName, hair, company, address }: any = user
            let department: any = {}
            if (allDepartment[company.department]) {
                department = allDepartment[company.department]
            } else {
                department = {
                    male: 0,
                    female: 0,
                    hair: {},
                    rangeAge: [],
                    addressUser: {},
                }
            }
            department[gender]++
            if (department.hair[hair.color]) {
                department.hair[hair.color]++
            } else {
                department.hair[hair.color] = 1
            }
            department.rangeAge.push(age)
            department.addressUser[`${firstName}${lastName}`] = address.postalCode
            allDepartment[company.department] = department



        });
        Object.values(allDepartment).forEach((departmentData: any) => {
            departmentData.rangeAge.sort((a: any, b: any) => a - b)

            const minAge = departmentData.rangeAge[0]
            const maxAge = departmentData.rangeAge[departmentData.rangeAge.length - 1]
            departmentData.rangeAge = `${minAge}-${maxAge}`
        })
        setItems(allDepartment)
        console.log('department', allDepartment)


    }


    useEffect(() => {
        fetchList()
    }, [])
    return {
        items,

    }
}