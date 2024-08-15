import axios from "axios";

export default async function handler(req, res){

    if (req.method == 'POST') {
        const puntos = req.body;

        try {
            axios.post('http://localhost:3001/v1/api/puntos', puntos);

            res.status(200).json({
                success: true,
                result: 'Puntos agregados'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Error al agregar los puntos'
            });
        }
    }
}