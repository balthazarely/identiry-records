import React, { useState } from 'react';

// First, we need to create an order context.
const NavContext = React.createContext();

export function NavProvider({ children }) {
  // This is where we should sick the state.
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavContext.Provider value={[navOpen, setNavOpen]}>
      {children}
    </NavContext.Provider>
  );
}

export default NavContext;
