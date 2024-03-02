// FILEPATH: /home/mattbryant/projects/talentforge/Talent-Forge-Front-End/TalentForge-React-Front-End/src/tests/NavBar.test.jsx

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, expect, it, beforeEach, test } from "vitest";
import NavBar from "../components/NavBar";
import { AuthContext } from "../authentication/AuthContext";

describe("NavBar Component", () => {
  beforeEach(() => {
    render(
      <AuthContext.Provider value={{ token: "testToken" }}>
        <Router>
          <NavBar />
        </Router>
      </AuthContext.Provider>
    );
  });

  it("renders without crashing", () => {
    const navBar = screen.getByRole("navigation");
    expect(navBar).to.exist;
  });

  it("renders the Home link", () => {
    const homeLink = screen.getByText("Home");
    expect(homeLink).to.exist;
  });

  it("renders the Company Network link", () => {
    const companyNetworkLink = screen.getByText("Company Network");
    expect(companyNetworkLink).to.exist;
  });

  it("renders the Opportunities link", () => {
    const opportunitiesLink = screen.getByText("Opportunities");
    expect(opportunitiesLink).to.exist;
  });

  it("does not render the Create User link when not admin", () => {
    const createUserLink = screen.queryByText("Create User");
    expect(createUserLink).toBeNull();
  });

  it("does not render the Create Listing link when not admin", () => {
    const createListingLink = screen.queryByText("Create Listing");
    expect(createListingLink).toBeNull();
  });
});
