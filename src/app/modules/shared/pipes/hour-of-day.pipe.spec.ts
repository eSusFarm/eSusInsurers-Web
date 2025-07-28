import { nameof } from '../models/nameof';
import { HourOfDayPipe } from './hour-of-day.pipe';

describe(nameof(HourOfDayPipe), () => {
    let sut: HourOfDayPipe;

    beforeEach(() => {
        sut = new HourOfDayPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
        expect(sut).toBeTruthy();
    });

    it('should return blank', () => {
        const str = null;
        expect(sut.transform(str)).toEqual('');
    });

    it('should return blank invalid number', () => {
        const str = null;
        expect(sut.transform(str)).toEqual('');
    });

    it('should return 8 hours', () => {
        const str = 28;
        expect(sut.transform(str)).toEqual('4am');
    });
    it('should return 11 AM dislay mode full', () => {
        const str = 11;
        expect(sut.transform(str, 'full')).toEqual('11am');
    });

    it('should return 11 A dislay mode short', () => {
        const str = 11;
        expect(sut.transform(str, 'short')).toEqual('11a');
    });

    it('should return 12 AM dislay mode full', () => {
        const str = 0;
        expect(sut.transform(str, 'full')).toEqual('12am');
    });
    it('should return 12 A dislay mode short', () => {
        const str = 18;
        expect(sut.transform(str, 'short')).toEqual('6p');
    });
})