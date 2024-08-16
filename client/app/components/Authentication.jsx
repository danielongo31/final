import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Authentication() {

    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();
    const { login } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(correo, password);

        // window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Iniciar sesión</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Correo:</label>
                            <input className="form-control" type="text" onChange={(e) => setCorreo(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Contraseña:</label>
                            <input className="form-control" type="password" onChange={(e) => setPassword(e.currentTarget.value)}></input>
                        </div>
                        <button type="submit" className="button">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
}