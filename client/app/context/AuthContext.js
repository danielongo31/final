'use client'

const { createContext, Children, useReducer, useContext, useEffect } = require("react");

const AuthContext = createContext();

export const authReducer = (state, payload) => {
    switch (payload.type) {
        case "LOGIN":
            return {
                ...state,
                user: payload,
                isAuthenticated: true
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false
    });

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user != null) dispatch({ type: "LOGIN", payload: user })
        else dispatch({ type: "LOGOUT" })
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) throw Error("useAuthContext must be used inside an AuthContextProvider");
    return context
};
