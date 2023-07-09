import { Pipe, PipeTransform } from '@angular/core';
import { TableColumns } from '../interface/table-columns';

@Pipe({
  name: 'image'
})
export class ColumnsPipe implements PipeTransform {

  transform(columns: TableColumns[], keys: string[]): TableColumns[] {
    return columns.filter(column => keys.includes(column.dataKey))
      .map(column => {
        const altText = column.altText || column.HeaderCellDef; // Utiliza la propiedad "altText" de la columna si está definida, o utiliza el encabezado de la columna como valor predeterminado
        return { ...column, altText };
      });
    }
  }
