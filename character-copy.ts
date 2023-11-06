// Test dobules
// - fakes
// - stubs
// - mocks

import { Copier, Destination, Source } from "./character-copy.test";

describe("character-copy", () => {
    describe("copy", () => {
        test('one character', () => {
            // Arrange
            const mockReadChar = jest.fn(() => 'a');
            const source: Source = {
                readChar: mockReadChar
            };

            const mockWriteChar = jest.fn();
            const destination: Destination = {
                writeChar: mockWriteChar
            };
            const sut = new Copier(source, destination);
            // Act
            sut.copy();
            // Assert
            expect(mockWriteChar).toHaveBeenCalledTimes(1);
            expect(mockWriteChar).toHaveBeenCalledWith('a');
        })
    })
})