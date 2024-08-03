import axios from "axios";

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const { id } = req.query;

        try {
            const result = (await axios.get(`http://localhost:3001/v1/api/user/${id}`)).data;            

            res.status(200).json({
                success: true,
                result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                result: 'User not found'
            });
        }
    }
}