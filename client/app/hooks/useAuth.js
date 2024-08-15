import axios from "axios";
import { useAuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const { user, isAuthenticated, dispatch } = useAuthContext();

    const login = async (correo, password) => {

        try {
            const user = {
                correo,
                password,
            }
            const result = await axios.post('/api/user/auth', user);

            localStorage.setItem("user", result);

            dispatch({ type: "LOGIN", payload: user })
        } catch (error) {
            dispatch({ type: "LOGOUT" })
        }
    };

    const logout = () => {
        localStorage.removeItem("user")
        dispatch({ type: "LOGOUT" })
    }

    return {
        user,
        isAuthenticated,
        login,
        logout
    };

};

