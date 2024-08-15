import axios from "axios";

export default async function handler(req, res) {
    if (req.method == 'PATCH'){
        const { id } = req.query;
        const miembro = req.body;

        try {
            await axios.patch(`http://localhost:3001/v1/api/miembro/${id}`, miembro);

            res.status(200).json({
                success: true,
                result: true
            });
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                result: 'Miembro no actualizado'
            })
        }
    }
}