import axios from "axios";

export default async function handler(req, res) {
    
    if (req.method === 'GET'){
        try {
            const result = (await axios.get('http://localhost:3001/v1/api/eventos')).data;

            res.status(200).json({
                success: true,
                result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Error al encontrar los eventos'
            });
        }
    }
}