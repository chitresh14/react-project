import { useState } from 'react';

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="user-card">
      <h1>{count}</h1>
      <button onClick={updateCount}>Increase Count</button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
};

export default User;
