import { render, screen } from "@testing-library/react";
import Profile from "../components/Profile";
import { UserContext, CurrentUserContext } from "../components/App";
import { describe, expect, beforeEach, test } from "vitest";

describe("Profile component", () => {
  const mockCurrentUser = {
    // Add properties for the current user here
  };

  const mockProfileUser = {
    // Add properties for the profile user here
    aboutMe: {
      text: "Mock text",
      careerDevelopment: "Mock career development",
    },
  };

  beforeEach(() => {
    render(
      <CurrentUserContext.Provider value={mockCurrentUser}>
        <UserContext.Provider value={mockProfileUser}>
          <Profile />
        </UserContext.Provider>
      </CurrentUserContext.Provider>
    );
  });

  test("renders profile image", () => {
    const profileImage = screen.getByAltText("Profile Picture");
    expect(profileImage).to.exist;
  });

  test("renders skills", () => {
    const skills = screen.getByText("Edit Profile to add skills!");
    expect(skills).to.exist;
  });

  test("renders edit button when authorized", () => {
    const editButton = screen.getByText("Edit Profile");
    expect(editButton).to.exist;
  });

});
