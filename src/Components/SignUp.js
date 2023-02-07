import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function SignUp() {
    const [phone, setPhone] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function checkIn(e) {
        e.preventDefault()
        console.log(userName, phone, password)
        const body = { userName, phone, password }
        let options = {
            url: "http://localhost:4000/add-user",
            method: "POST",
            data: body,
        }
        await axios(options)
        navigate('/login')
    }

    return (
        <>
            <form onSubmit={checkIn}>
                <input type="text" name="name" value={userName} placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                <input type="text" name="phone" value={phone} placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                <br />
                <br />
                <input type="text" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUp