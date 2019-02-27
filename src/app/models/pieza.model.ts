export class Pieza{

    id: number
    titulo: string
    year: number
    registro: number
    pieza: string
    coverPieza: string
    autor: string[]
    descripcion: string
    

    constructor(pId, pTitulo, pYear, pRegistro, pPieza, pCoverPieza, pAutor, pDescripcion){
        this.id = pId
        this.titulo = pTitulo
        this.year = pYear
        this.registro = pRegistro
        this.pieza = pPieza
        this.coverPieza = pCoverPieza
        this.autor = pAutor
        this.descripcion = pDescripcion
    }
}