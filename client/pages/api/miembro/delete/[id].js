import axios from "axios";

export default async function handler(req, res){
    if (req.method == 'DELETE') {
        const { id } = req.query;

        try {
            await axios.delete(`http://localhost:3001/v1/api/miembro/${id}`);
            
            res.status(200).json({
                success: true,
                result: 'Miembro eliminado'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'No se ha podido eliminar el miembro'
            });
            
        }
    }
}