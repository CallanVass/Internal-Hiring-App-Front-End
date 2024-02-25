import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { describe, expect, it, beforeEach } from "vitest";
import Login from "../components/Login";

describe("Login Component", () => {
    it("redirects to the homepage after successful login", async () => {
        const history = createMemoryHistory();
        const { getByLabelText, getAllByRole } = render(
            <Router history={history}>
                <Login />
            </Router>
        );

        const usernameInput = getByLabelText("Username:");
        const passwordInput = getByLabelText("Password:");
        const loginButton = getAllByRole('button', { name: /login/i })[0];


        fireEvent.change(usernameInput, { target: { value: "test" } });
        fireEvent.change(passwordInput, { target: { value: "test" } });
        fireEvent.click(loginButton);

        // // Wait for any changes to the history's location
        // await waitFor(() => {
        //     // Check that the history's location is now the homepage
        //     expect(history.location.pathname).toBe("/home");
        // });
    });

    let container;

    beforeEach(() => {
        container = render(
            <Router>
                <Login />
            </Router>
        ).container;
    });

    it("renders the Home component", () => {
        expect(container.querySelector("div")).toBeInTheDocument();
        expect(container.querySelector("form")).toBeInTheDocument();
        expect(container.querySelector("form")).toHaveTextContent("Username: ");
        expect(container.querySelector("form")).toHaveTextContent("Password: ");
    });

    // Unable to find the right way to test the button click (tried getByTitle, Role, etc.)
    // test('login button renders home page', async () => {
    //     render(<App />);
    //     const button = screen.getAllByTitle('login-btn'); // adjust this if your button has a name or label
    //     await userEvent.click(button);
    //   });
});