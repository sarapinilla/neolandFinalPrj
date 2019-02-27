export class Autor{

    id: number
    nombre: string
    info: string
    img: string
    pieza: string[]
    ig: string
    be: string
    web: string
    

    constructor(pId, pNombre, pInfo, pImg, pPiezas, pIg, pBe, pWeb){
        this.id = pId
        this.nombre = pNombre
        this.info = pInfo
        this.img = pImg
        this.pieza = pPiezas
        this.ig = pIg
        this.be = pBe
        this.web = pWeb
    }
}