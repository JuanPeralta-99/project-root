const API_BASE = 'http://localhost:3000/api';


export async function login(email, password) {
const res = await fetch(`${API_BASE}/login`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, password })
});


const data = await res.json();
return { status: res.status, data };
}