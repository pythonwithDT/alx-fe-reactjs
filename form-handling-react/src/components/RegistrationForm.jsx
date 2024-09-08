import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    // Simulate form submission (e.g., mock API request)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

