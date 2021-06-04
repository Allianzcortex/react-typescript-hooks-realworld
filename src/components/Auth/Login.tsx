import React, { useState } from "react"

export default function Login() {

    // handle email/password/loading/conditions
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors,setErrors] = useState("")

    
    // use redux
    // if we find user existing, then redirect to home page

    return (
        <div>Login</div>
    )

}