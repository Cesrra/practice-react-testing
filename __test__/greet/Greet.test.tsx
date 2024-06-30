/* REQUERIMENTS
*Gree should render the text Hellow
*If a names is passed into the component, it shoudl render Hellow followed by the name

---------Documentation-----------
Automated Test
    This are programs that automate the task of testingyour software.
    Write code to test the software code.
Type of Test
    Unit Test, Integration Test, and E2E Test
Unite Test
    Focus is on testing the individual building blocks of an application such 
    as a class or funtion or a component. 
    Each unit or building block is tested in isolation, independent of their units
    Dependecies are mocked
    Run in a short amount of time and make it very easy to pinpoint failures
    Relative easier to write and maintain
RLT Philosophy
    With RLT we are not concerned about the implementation details of a component.
    Instead we are testing how the component behaves whe a user interacts with it.
    RLT will not care if  you add 4+4 or 5+3 to display the number 8.
    Refactoring will not affect your test as long as the end result is the same.
Assertions
    When writing tests, we often need to check that value meet certain conditions.
    Assertion decide if a test passes or fails.
*/

import { render, screen } from "@testing-library/react"
import Greet from "@/app/greet/page"

describe("Greet page Tests", () => {
    test("Render Component correctly", () => {
        render(<Greet />)
        const nameElement = screen.getByRole("textbox", {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
                                          //Query
        expect(jobLocationElement).toBeInTheDocument()
        //Assertion

        const checkboxElement = screen.getByRole("checkbox")
        expect(checkboxElement).toBeInTheDocument()
    })

    test("Renders correctly the text Hellow", () => {
        render(<Greet />)
        const textElement = screen.getByText("Hellow")
        expect(textElement).toBeInTheDocument()
    })

    test("Renders the bane side the Hellow", () => {
        render(<Greet name="Cesar" />)
        const textElement = screen.getByText("Hellow Cesar")
        expect(textElement).toBeInTheDocument()
    })
})