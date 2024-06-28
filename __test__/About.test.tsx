import { render, screen } from "@testing-library/react"
import About from "@/app/about/page"


describe("About page Test", () => {
    test('should show the text Software Engineer on the page', () => {
        render(<About />)

        const textElement = screen.getByText("Software Engineer")

        expect(textElement).toBeInTheDocument()
    })
})