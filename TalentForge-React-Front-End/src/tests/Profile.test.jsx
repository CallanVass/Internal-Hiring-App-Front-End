import { render, fireEvent, screen } from "@testing-library/react";
import Profile from "../components/Profile";
import {  describe, expect, it } from "vitest";

describe("Profile Component", () => {
  it("should render without crashing", () => {
    render(<Profile />);
  });

  it('should toggle edit mode', () => {
    render(<Profile />);
    const editButton = screen.getByRole('button', { name: /edit profile/i });
    fireEvent.click(editButton);
    expect(screen.getByRole('button', { name: /save changes/i })).to.exist;
    fireEvent.click(editButton);
    expect(screen.getByRole('button', { name: /edit profile/i })).to.exist;
  });

  it('should add a skill', () => {
    render(<Profile />);
    const editButton = screen.getByRole('button', { name: /edit profile/i });
    fireEvent.click(editButton);
    const addSkillInput = screen.getByPlaceholderText(/15 character max/i);
    const addSkillButton = screen.getByRole('button', { name: /add skill/i });
    fireEvent.change(addSkillInput, { target: { value: 'New Skill' } });
    fireEvent.click(addSkillButton);
    expect(screen.getByText(/new skill/i)).to.exist;
  });

});
