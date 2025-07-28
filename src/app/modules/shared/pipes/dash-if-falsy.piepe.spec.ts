import { nameof } from '../models/nameof';
import {DashIfFalsyPipe} from './dash-if-falsy.pipe';

describe(nameof(DashIfFalsyPipe), ()=>{
    let sut: DashIfFalsyPipe;

    beforeEach(()=>{
        sut = new DashIfFalsyPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should return dashes', () => {
   const str = 'Test';
    expect(sut.transform(str, 'false')).toEqual('--');
  });
    
  it('should return value', () => {
    const str = 'Test';
    expect(sut.transform(str, 'true')).toEqual('Test');
  });
})