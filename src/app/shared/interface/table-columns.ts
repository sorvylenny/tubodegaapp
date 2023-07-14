import { CurrencyFormatPipe } from 'src/app/shared/pipe/currency.pipe';

export interface TableColumns {
    ColumnDef: string;
    HeaderCellDef: string;
    dataKey: string;
    altText ?: string | any;
    button?: boolean;
    pipe?: CurrencyFormatPipe; 
}
