import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, beforeEach, test } from "vitest"
import App from "../components/App"




describe('Login Component', () => {
    let container

    beforeEach(() => {
        container = render(< App />).container
    })

    it('renders the Home component', () => {
        expect(container.querySelector('div')).toBeInTheDocument()
        expect(container.querySelector('form')).toBeInTheDocument()
        expect(container.querySelector('form')).toHaveTextContent('Username: ')
        expect(container.querySelector('form')).toHaveTextContent('Password: ')
    })



// Unable to find the right way to test the button click (tried getByTitle, Role, etc.)
    // test('login button renders home page', async () => {
    //     render(<App />);
    //     const button = screen.getAllByTitle('login-btn'); // adjust this if your button has a name or label
    //     await userEvent.click(button);
    //   });


})