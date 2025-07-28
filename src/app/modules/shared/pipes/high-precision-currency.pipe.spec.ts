
import { nameof } from '../models/nameof';
import { SmHighPrecisionCurrencyPipe } from './high-precision-currency.pipe';

describe(nameof(SmHighPrecisionCurrencyPipe), () => {
    let sut: SmHighPrecisionCurrencyPipe;

    beforeEach(() => {
        sut = new SmHighPrecisionCurrencyPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
        expect(sut).toBeTruthy();
    });

    it('should return dashes', () => {
        const str=null;
        expect(sut.transform(str)).toEqual('--');
    });

    it('should return dashes NaN Value', () => {
        const str = "test";
        expect(sut.transform(str)).toEqual('--');
    });

    it('should return dashes zero Value', () => {
        const str = 0;
        expect(sut.transform(str, false)).toEqual('--');
    });

        it('should return dashes zero Value', () => {
        const str = false;
        expect(sut.transform(str)).toEqual('--');
    });
})