export class Pieza{

    id: number
    titulo: string
    year: number
    registro: number
    pieza: string
    coverPieza: string
    autores: any[]
    descripcion: string
    

    constructor(pId, pTitulo, pYear, pRegistro, pPieza, pCoverPieza, pAutores, pDescripcion){
        this.id = pId
        this.titulo = pTitulo
        this.year = pYear
        this.registro = pRegistro
        this.pieza = pPieza
        this.coverPieza = pCoverPieza
        this.autores = pAutores
        this.descripcion = pDescripcion
    }
}