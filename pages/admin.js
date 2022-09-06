import React, { useState } from 'react';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) { 
    return (
      <div>
        <h1>Admin</h1>
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button type="submit">Login</button>
        </form>
      </div>
      
    )
  }

  return (
    <div>
      <h1 className="font-grotesk">Admin</h1>
      <h2 className="font-questrial">Right</h2>
    </div>
  )
}