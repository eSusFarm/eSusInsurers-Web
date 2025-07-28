
import { nameof } from '../models/nameof';
import { FormatTimespanPipe } from './format-timespan.pipe';

describe(nameof(FormatTimespanPipe), () => {
    let sut: FormatTimespanPipe;

    beforeEach(() => {
        sut = new FormatTimespanPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
        expect(sut).toBeTruthy();
    });

    it('should return undefined', () => {
        const str='hgfjyfyjh';
        expect(sut.transform(str)).toEqual('undefinedm undefineds');
    });

    it('should return 1 hour 20 minutes', () => {
        const str = "1:20:59";
        expect(sut.transform(str)).toEqual('1h 20m ');
    });

    it('should return 20 minutes and 59 seconds', () => {
        const str = "20:45";
        expect(sut.transform(str)).toEqual('20h 45m ');
    });
})