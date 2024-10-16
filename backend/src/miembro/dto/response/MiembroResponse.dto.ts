export default class MiembroResponseDTO{
    constructor(
        private id: number,
        private documento: string,
        private nombres: string,
        private apellidos: string,
        private edad: string,
        private telefono: string,
        private permiso: string,
        private direccion: string,
        private rol: string,
        private puntosId: number
    ){}
}