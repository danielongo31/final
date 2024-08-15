import axios from "axios";

export default async function handler(req, res) {
    if (req.method == 'PATCH'){
        const { id } = req.query;
        const puntos = req.body;

        try {
            await axios.patch(`http://localhost:3001/v1/api/puntos/${id}`, puntos);

            res.status(200).json({
                success: true,
                result: true
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Puntos no actualizados'
            })
        }
    }
}