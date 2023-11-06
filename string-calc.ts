export class StringCalculator {
  public add(str: string): number {
    if (str.length === 0) {
      return 0;
    }
    if (str.includes(",")) {
      const num_str = str.split(",").map((element) => {
        return Number.parseInt(element);
      });

      return num_str.reduce((a, b) => a + b);
    }
    return Number.parseInt(str);
  }
}
