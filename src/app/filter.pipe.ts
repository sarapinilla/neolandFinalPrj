import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            console.log(it)
            let autores = it.autores.map(aut => aut.nombre.toLowerCase()).join(',')
            let categorias = it.categorias.map(cat => cat.tipologia.toLowerCase()).join(',')
            console.log(categorias)
            if(it.titulo.toLowerCase().includes(searchText) || autores.includes(searchText) || categorias.includes(searchText) || (""+it.year).includes(searchText)){
                return true
            }

        });
    }
}