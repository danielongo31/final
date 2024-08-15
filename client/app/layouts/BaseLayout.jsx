'use client'

import Login from "../components/Authentication";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

export default function BaseLayout({ children }) {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {
                isAuthenticated ? (
                    <div>
                        <Sidebar />
                        {children}
                    </div>
                ) : <Login/>
            }
        </>
    );
}