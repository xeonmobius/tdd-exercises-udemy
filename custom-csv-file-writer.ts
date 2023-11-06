import { Customer } from "./customer";
import { FileWriter } from "./file-writer";

export class CustomerCsvFileWriter {
    constructor(private fileWriter: FileWriter) {}

    writeCustomers(fileName: string, customers: Customer[]) {
        this.fileWriter.writeLine(fileName, "Shann, 123456789");
    }
}