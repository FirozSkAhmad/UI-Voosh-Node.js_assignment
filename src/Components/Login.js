import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function Login() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function submit(e) {
        e.preventDefault()
        console.log(phone, password)
        const credentials = { phone, password }
        let options = {
            // Endpoint to send files
            url: "http://localhost:4000/login-user",
            method: "POST",
            // Attaching the form data
            data: credentials,
        }
        const obj = await axios(options)
        const token = obj.data.token
        localStorage.setItem("token", token);
        if (token) {
            navigate('/')
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <form onSubmit={submit}>
                <input type="text" name="phone" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                <br />
                <br />
                <input type="text" name="Password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button type="submit">Login</button>{" "}
                <button onClick={() => navigate('/signup')}>Sign Up</button>
            </form>
        </>
    )
}



export default Login