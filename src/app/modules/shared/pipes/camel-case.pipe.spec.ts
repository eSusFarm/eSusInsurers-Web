import { nameof } from '../models/nameof';
import { CamelCasePipe } from './camel-case.pipe';

describe(nameof(CamelCasePipe), () => {
  let sut: CamelCasePipe;

  beforeEach(() => {
    sut = new CamelCasePipe();
    window.onbeforeunload = () => "Oh no!"; // Prevent page reloads during tests
  });

  it('should create an instance', () => {
    expect(sut).toBeTruthy();
  });

  it('should returns camelCase', () => {
    const str = 'PascalCase';
    expect(sut.transform(str)).toEqual('pascalCase');
  });

  it('should returns camelCase', () => {
    const str = 'Random Text';
    expect(sut.transform(str)).toEqual('randomText');
  });

  it('should returns camelCase', () => {
    const str = `Random's Text`;
    expect(sut.transform(str)).toEqual('randomsText');
  });

  it('should returns camelCase', () => {
    const str = `Random(Text)`;
    expect(sut.transform(str)).toEqual('randomText');
  });

  it('should returns camelCase', () => {
    const str = `Random (Text)`;
    expect(sut.transform(str)).toEqual('randomText');
  });

  it('should returns camelCase', () => {
    const str = 'random-text';
    expect(sut.transform(str)).toEqual('randomText');
  });

  it('should returns camelCase', () => {
    const str = `random DummyText`;
    expect(sut.transform(str)).toEqual('randomDummyText');
  });

  it('should returns value', () => {
    const number = 1;
    expect(sut.transform(number)).toEqual(1);
  });
});
