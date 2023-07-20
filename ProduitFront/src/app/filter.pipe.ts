import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item: any) =>
      item.nom.toLowerCase().includes(searchText) ||
      item.prixUnitaire.toString().includes(searchText) ||
      item.quantite.toString().includes(searchText)
    );
  }
}
