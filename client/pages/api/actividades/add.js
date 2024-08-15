import axios from "axios";

export default async function handler(req, res){

    if (req.method == 'POST') {
        const actividades = req.body;

        try {
            axios.post('http://localhost:3001/v1/api/actividades', actividades);

            res.status(200).json({
                success: true,
                result: 'Miembro agregado'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'Error al agregar la actividad'
            });
        }
    }
}