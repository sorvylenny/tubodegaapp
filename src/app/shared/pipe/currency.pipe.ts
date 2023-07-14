import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyFormatPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(value: number, currencyCode: string | null = 'USD'): string {
    const currencyPipe = new CurrencyPipe(this.locale);
    const currencySymbol = currencyPipe.transform(value, currencyCode !== null ? currencyCode : 'USD', 'symbol');
    return currencySymbol !== null ? currencySymbol : '';
  }
}

export { CurrencyPipe };
