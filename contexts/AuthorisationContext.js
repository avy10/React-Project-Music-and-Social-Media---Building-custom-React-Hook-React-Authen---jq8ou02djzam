import React, { createContext, useRef, useState, useEffect } from "react";

const AuthorisationContext = createContext();
export default AuthorisationContext;

export function AuthorisationProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [jwtToken, setJwtToken] = useState(null);
	const [userName, setUserName] = useState(null);
	const [email, setEmail] = useState(null);

	return (
		<AuthorisationContext.Provider
			value={{
				isLoggedIn,
				jwtToken,
				userName,
				email,
			}}
		>
			{children}
		</AuthorisationContext.Provider>
	);
}
