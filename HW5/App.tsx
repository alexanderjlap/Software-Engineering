import './App.css'
import {TaxStatusOO, Context, Single, Married, Separated} from "./TaxStatusOO.ts";
import {marriedTax, selectTaxStrategy, separatedTax, singleTax} from "./TaxStatusFP.ts";

function App() {
    const singleIncome: number = Number(prompt("Enter your income for single status", "0"));
    const marriedIncome: number = Number(prompt("Enter your income for married status", "0"));
    const separatedIncome: number = Number(prompt("Enter your income for separated status", "0"));

    // Object-oriented code. Complete the code below.
    // Create the classes
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();

    // calculate the tax by using the Context class
    const taxStatusSelection: Context = new Context(single);
    const singleTaxOO: number = taxStatusSelection.calculateTax(singleIncome);

    // Use the setter to change the TaxStatus class to Married and calculate the tax
    taxStatusSelection.taxStatus = married;
    const marriedTaxOO: number = taxStatusSelection.calculateTax(marriedIncome)

    // Use the setter to change the TaxStatus class to Separated and calculate the tax
    taxStatusSelection.taxStatus = separated;
    const separatedTaxOO: number = taxStatusSelection.calculateTax(separatedIncome);

    // Functional programming code.
    // Calculate the tax using the higher-order function selectTaxStrategy()
    const singleTaxFP: number = selectTaxStrategy(singleTax, singleIncome);
    const marriedTaxFP: number = selectTaxStrategy(marriedTax, marriedIncome);
    const separatedTaxFP: number = selectTaxStrategy(separatedTax, separatedIncome);

    // Fill in the variables for the code below
    return (
        <>
            <h2>Tax Strategy Pattern - Object Oriented</h2>
            <b>For an income of ${singleIncome}, the tax is ${singleTaxOO} for a single person</b>
            <br/><b>For an income of ${marriedIncome}, the tax is ${marriedTaxOO} for a married couple</b>
            <br/><b>For an income of ${separatedIncome}, the tax is ${separatedTaxOO} for a married couple filing separately</b>

            <h2>Tax Strategy Pattern - Functional Programming</h2>
            <b>For an income of ${singleIncome}, the tax is ${singleTaxFP} for a single person</b>
            <br/><b>For an income of ${marriedIncome}, the tax is ${marriedTaxFP} for a married couple</b>
            <br/><b>For an income of ${separatedIncome}, the tax is ${separatedTaxFP} for a married couple filing separately</b>
        </>
    );
}

export default App