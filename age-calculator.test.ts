// 4 stages of naming:
// Meaningless
// Accurate
// Precise/Specific
// Meaningful

import { createAgeCalculator } from "./age-calculator";

describe('Age Calculator', () => { 
    test.each([
        {}
    ])
    test('given birthDate of 1993/03/03 and targetDate of 2023/03/03 should return 30', () => {
        // Arrange
        const sut = createAgeCalculator();
        const birthDate = new Date("1993/03/03");
        const targetDate = new Date("2023/03/03");
        const expected = 30;
        // Act
        const actual = sut(birthDate, targetDate);
        // Assert
        expect(actual).toBe(expected);
    });
    test('given birthDate of 1990/03/03 and targetDate of 2023/03/03 should return 30', () => {
        // Arrange
        const sut = createAgeCalculator();
        const birthDate = new Date("1990/03/03");
        const targetDate = new Date("2023/03/03");
        const expected = 33;
        // Act
        const actual = sut(birthDate, targetDate);
        // Assert
        expect(actual).toBe(expected);
    });
 })