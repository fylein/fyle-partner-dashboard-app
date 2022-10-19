import { CurrencyPipe, getNumberOfCurrencyDigits } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class FyCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(
    amount: number,
    currency: string
  ): string | null {
    const currencyFraction = getNumberOfCurrencyDigits(currency);
    const fixedAmount = parseFloat(amount.toFixed(currencyFraction));

    const transformedValue = this.currencyPipe.transform(fixedAmount, currency);

    if (transformedValue) {
      // Gets the index of first digit in the transformed amount string
      const firstDigitIdx = transformedValue.search(/\d/);
      const hasNegativeSign = transformedValue.startsWith('-');

      // If the transformed string has a negative sign, we need to avoid it as we just want the currency symbol
      const currencySymbol = transformedValue.substring(hasNegativeSign ? 1 : 0, firstDigitIdx);

      /**
       * If the symbol is same as the currency code, we need to add a space for proper readability
       * This can happen when there is no symbol for the given currency code. e.g. OMR has no currency symbol
       * In this case we would like to override the default behaviour of showing OMR5.000 and change it to OMR 5.000
       */
      if (currencySymbol === currency) {
        return transformedValue.replace(currencySymbol, currencySymbol.concat(' '));
      }
    }

    return transformedValue;
  }

}
