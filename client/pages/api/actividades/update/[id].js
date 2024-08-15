import axios from "axios";

export default async function handler(req, res) {
    if (req.method == 'PATCH'){
        const { id } = req.query;
        const actividades = req.body;

        try {
            const result = (await axios.patch(`http://localhost:3001/v1/api/actividades/${id}`, actividades));

            res.status(200).json({
                success: true,
                result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Actividad no actualizada'
            })
        }
    }
}