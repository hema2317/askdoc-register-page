import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Registering...');
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) setStatus('✅ Registered!');
    else setStatus('❌ ' + data.error);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required /><br /><br />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
