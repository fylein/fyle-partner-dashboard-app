import { CurrencyPipe } from '@angular/common';
import { FyCurrencyPipe } from './fy-currency.pipe';

describe('FyCurrencyPipe', () => {
  const currencyPipe = new CurrencyPipe('en');
  const pipe = new FyCurrencyPipe(currencyPipe);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a valid USD amount', () => {
    expect(pipe.transform(243.314, 'USD')).toBe('$243.31');
  });

  it('should return a valid OMR amount', () => {
    expect(pipe.transform(243.314, 'OMR')).toBe('OMR 243.314');
  });

  it('should return a valid negative USD amount', () => {
    expect(pipe.transform(-243.314, 'USD')).toBe('-$243.31');
  });
});
