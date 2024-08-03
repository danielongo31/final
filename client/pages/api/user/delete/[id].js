import axios from "axios";

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        const { id } = req.query;

        try {
            await axios.delete(`http://localhost:3001/v1/api/user/${id}`);

            res.status(200).json({
                success: true,
                result: 'User deleted'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'User dont delete'
            });
        }
    }
}