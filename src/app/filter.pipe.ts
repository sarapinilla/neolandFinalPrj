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
            if(it.titulo){
                return it.titulo.toLowerCase().includes(searchText)
            }else if(it.nombre){
                return it.nombre.toLowerCase().includes(searchText)
            }else if(it.tipologia){
                return it.tipologia.toLowerCase().includes(searchText)
            }

        });
    }
}