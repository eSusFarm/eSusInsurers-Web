import { nameof } from './nameof';

describe('nameof', () => {
  it('should extract property name from accessor function', () => {
    const result = nameof((obj: { firstName: string }) => obj.firstName);
    expect(result).toBe('firstName');
  });

  it('should extract nested property name (last level only)', () => {
    const result = nameof((obj: any) => obj.user.name);
    expect(result).toBe('user.name');
  });

  it('should extract property name from inline object structure', () => {
    const result = nameof((obj: { user: { email: string } }) => obj.user.email);
    expect(result).toBe('user.email');
  });

  it('should extract function/class name when passed a constructor function', () => {
    class MyTestClass {}
    const result = nameof(MyTestClass);
    expect(result).toBe('MyTestClass');
  });

  it('should extract function name when passed a named function constructor', () => {
    function MyFunctionClass() {}
    const result = nameof(MyFunctionClass);
    expect(result).toBe('MyFunctionClass');
  });

  it('should handle arrow function format without block', () => {
    const result = nameof((x: any) => x.title);
    expect(result).toBe('title');
  });

  it('should extract property name from multiline accessor function with semicolon', () => {
    const result = nameof((obj: { age: number }) => {
      return obj.age;
    });
    expect(result).toBe('age');
  });

  it('should extract property name from accessor function ending in space-brace', () => {
    const result = nameof((obj: { city: string }) => {
      return obj.city
    });
    expect(result).toBe('city');
  });
});
