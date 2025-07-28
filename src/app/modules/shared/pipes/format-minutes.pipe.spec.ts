import { nameof } from '../models/nameof';
import { FormatMinutesPipe } from './format-minutes.pipe';

describe(nameof(FormatMinutesPipe), () => {
    let sut: FormatMinutesPipe;

    beforeEach(() => {
        sut = new FormatMinutesPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
        expect(sut).toBeTruthy();
    });

    it('should return undefined', () => {
        const str = 'test'
        expect(sut.transform(str)).toEqual(undefined);
    });

    it('should return 40 minutes', () => {
        const str = 40;
        expect(sut.transform(str)).toEqual('40m');
    });

    it('should return 1 hour', () => {
        const str = 60;
        expect(sut.transform(str)).toEqual('1h');
    });
    it('should return 1 hour and 20 minutes', () => {
        const str = 80;
        expect(sut.transform(str)).toEqual('1h 20m');
    });
})