// pages/register.js
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setMessage(`❌ Error: ${error.message}`);
    } else {
      setMessage('✅ Check your email for confirmation!');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Register with AskDoc</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 8, width: 250 }}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 8, width: 250 }}
        />
        <br /><br />
        <button type="submit" style={{ padding: '8px 20px' }}>
          Sign Up
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
