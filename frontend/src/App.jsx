import React, { useState } from 'react'
import { login } from './api'


export default function App() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [result, setResult] = useState(null)
const [loading, setLoading] = useState(false)


async function handleSubmit(e) {
e.preventDefault()
setLoading(true)
setResult(null)
try {
const { status, data } = await login(email, password)
setResult({ status, data })
} catch (err) {
setResult({ status: 500, data: { success: false, message: 'Error de conexión' } })
} finally {
setLoading(false)
}
}


return (
<div className="container">
<h1>Login</h1>
<form onSubmit={handleSubmit} className="card">
<label>
Correo
<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
</label>


<label>
Contraseña
<input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
</label>


<button type="submit" disabled={loading}>{loading ? 'Verificando...' : 'Ingresar'}</button>
</form>


{result && (
<div className="result">
<h2>Resultado</h2>
<pre>{JSON.stringify(result, null, 2)}</pre>
</div>
)}


<div className="note">
<p>Credenciales de ejemplo: <strong>user@example.com</strong> / <strong>Password123</strong></p>
</div>
</div>
)
}