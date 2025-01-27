import { render, screen } from "@testing-library/react"
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from "@/app/page"

describe("Home page Tests", () => {
    test("Should have the Docs text", () => {
        render(<Home />)
    
        const myElement = screen.getByText("Docs")
    
        expect(myElement).toBeInTheDocument()
    })
})
