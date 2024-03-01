import { createContext, useState } from "react";
import Level1 from './Level1.jsx'

const AuthContext = createContext();

const initialAuthState = { userId: 123, loggenIn: true};

function Level2() {

  const [authState, setAuthState] = useState(initialAuthState);

  return (
    <>
      <h1>Level 2</h1>
      <AuthContext.Provider value={[authState, setAuthState]}>
            <Level1/>
      </AuthContext.Provider>
    </>
  );
}

export default Level2;
