import TodoList from "./Table";
import { useNavigate, NavLink } from 'react-router-dom'
import { useState } from "react";

import jwt_decode from "jwt-decode";

import axios from 'axios'

function Home() {
    const navigate = useNavigate()
    const [sub_total, setSub_total] = useState("")
    const [phone, setPhone] = useState("")
    const payload = jwt_decode(localStorage.getItem('token'))
    const user_Id = payload.user_Id
    function signOut() {
        localStorage.removeItem("token")
        navigate("/login")
    }
    async function addOrder() {
        const body = { user_Id, sub_total, phone }
        let options = {
            url: "http://localhost:4000/add-order",
            method: "POST",
            headers: {
                authorization: localStorage.getItem('token'),
            },
            data: body,
        }
        const obj = await axios(options)
        console.log(obj)
        setSub_total("");
        setPhone("");
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={signOut}>SignOut</button>
            <br />
            <br />
            <NavLink to="/orderDetails" className="NavBar-Link"><h3>click to get order details</h3></NavLink>
            <br />
            <h1>Add Order</h1>
            <input type="number" value={sub_total} placeholder="sub_total" onChange={(e) => setSub_total(e.target.value)} />
            <input type="number" value={phone} placeholder="phone number" onChange={(e) => setPhone(e.target.value)} />
            <span><button onClick={addOrder}>Add</button></span>
            {/* <TodoList /> */}
        </>
    );
}

export default Home;