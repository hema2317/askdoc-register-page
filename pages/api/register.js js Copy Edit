export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields required' });
    }
    return res.status(200).json({ message: 'User registered!' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
