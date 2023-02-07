import { useEffect, useState } from "react"
import { Table } from 'react-bootstrap'

import axios from 'axios'

import jwt_decode from "jwt-decode";

function OrderDetails() {
    const payload = jwt_decode(localStorage.getItem('token'))
    const user_Id = payload.user_Id
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            console.log("called")
            const options = {
                url: `http://localhost:4000/get-order`,
                method: "GET",
                headers: {
                    authorization: localStorage.getItem('token'),
                },
                params: { user_Id }
            }
            const obj = await axios(options)
            setData(obj.data)
        }
        fetchData()
    }, [])
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Order Id</th>
                        <th>Phone Number</th>
                        <th>sub_total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, id) =>
                            <tr key={item._id}>
                                <td>{id + 1}</td>
                                <td>{item._id}</td>
                                <td>{item.phone}</td>
                                <td>{item.sub_total}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default OrderDetails