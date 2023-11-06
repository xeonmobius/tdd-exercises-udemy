// SOLID

import { CustomerCsvFileWriter } from "./custom-csv-file-writer"
import {Customer} from "./customer"
import {FileWriter} from "./file-writer"

describe("custom-csv-file-writer", () => {
    test('given one customer should write that customer to given file', () => {
        // Arrange
        const customer = new Customer("Shann", "123456789")
        const fileWriter: FileWriter = {
            writeLine: jest.fn()
        }
        const sut = new CustomerCsvFileWriter(fileWriter)
        // Act
        sut.writeCustomers("customers.csv",[customer]);
        // Assert
        expect(fileWriter.writeLine).toHaveBeenCalledTimes(1);
        expect(fileWriter.writeLine).toHaveBeenCalledWith("customers.csv", "Shann, 123456789");
    })
})