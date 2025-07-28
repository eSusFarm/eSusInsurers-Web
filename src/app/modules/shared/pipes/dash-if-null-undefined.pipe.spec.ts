import { nameof } from '../models/nameof';
import {DashIfNullUndefinedPipe} from './dash-if-null-undefined.pipe';

describe(nameof(DashIfNullUndefinedPipe), ()=>{
    let sut: DashIfNullUndefinedPipe;

    beforeEach(()=>{
        sut = new DashIfNullUndefinedPipe();
        window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
    });

    it('should create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should return dashes', () => {
   const str=null;
    expect(sut.transform(str)).toEqual('--');
  });
    
  it('should return value', () => {
    const str = 'Test';
    expect(sut.transform(str, 'true')).toEqual('Test');
  });
})