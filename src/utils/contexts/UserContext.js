import { createContext } from 'react';

const UserContext = createContext({
  loggedInUser: 'Default User',
});

export default UserContext;
// share context through out the component.
