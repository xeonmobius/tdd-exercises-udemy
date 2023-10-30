interface FizzBuzz {
  go(num: number): string;
}
export function createFizzBuzz(): FizzBuzz {
  return {
    go: function (num: number) {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 5 === 0) {
        return "Buzz";
      }
      else if (num % 3 === 0) {
        return "Fizz";
      }  
      return num.toString();
    },
  };
}
