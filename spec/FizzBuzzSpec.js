describe("FizzBuzz", function() {

  it('is divisible by three', function() {
    expect(isDivisibleByThree(3)).toBe(true);
  });
  it('is not divisible by three', function() {
    expect(isDivisibleByThree(1)).not.toBe(true);
  });

  it('is divisible by five', function() {
    expect(isDivisibleByFive(5)).toBe(true);
  });

  it('is not divisible by five', function() {
    expect(isDivisibleByFive(6)).not.toBe(true);
  });

  it('is divisible by fifteen', function(){
    expect(isDivisibleByFifteen(15)).toBeTruthy();
  });

  it('is not divisible by fifteen', function(){
    expect(isDivisibleByFifteen(13)).toBeFalsy();
  });

  it('should say Fizz if divisible by 3', function(){
    expect(fizzyBuzzy(3)).toEqual('Fizz');
  });

  it('should not say Fizz if not divisible by 3', function(){
    expect(fizzyBuzzy(4)).not.toEqual('Fizz');
  });

  it('should say Buzz if divisible by 5', function(){
    expect(fizzyBuzzy(5)).toEqual('Buzz');
  });

  it('should not say Buzz if not divisible by 5', function(){
    expect(fizzyBuzzy(4)).not.toEqual('Buzz');
  });

  it('should say FizzBuzz if divisible by 15', function(){
    expect(fizzyBuzzy(15)).toEqual('FizzBuzz');
  });

  it('should not say FizzBuzz if not divisible by 15', function(){
    expect(fizzyBuzzy(16)).not.toEqual('FizzBuzz');
  });

  it('should return the number if not divisible by 3,5 or 15', function(){
    expect(fizzyBuzzy(16)).toEqual(16);
  });

});
