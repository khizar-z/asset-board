import React, { useState } from 'react';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1 className="font-grotesk">Admin</h1>
      <h2 className="font-questrial">Right</h2>
    </div>
  )
}