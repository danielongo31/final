import axios from "axios";

export default async function handler(req, res) {

    if (req.method == 'POST') {
        const user = req.body;

        try {
            axios.post('http://localhost:3001/v1/api/user/auth', user);
        
            res.status(200).json({
                success: true,
                result: 'User login'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Error al iniciar sesión'
            });
        }
    }

};