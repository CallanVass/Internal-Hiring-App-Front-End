import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import { act } from "react-dom/test-utils";
import { describe, expect, it } from "vitest";

describe("SearchBar Component", () => {
  const mockUsers = [
    {
      department: "Engineering",
      name: "John Doe",
      role: "Software Engineer",
      aboutMe: {
        text: "I love coding",
        careerDevelopment: "Senior Engineer",
      },
    },
  ];

  it("should render without crashing", () => {
    render(<SearchBar users={mockUsers} />);
  });

  it("should update query state when typing in search input", () => {
    render(<SearchBar users={mockUsers} />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "John" } });
    expect(searchInput.value).toBe("John");
  });

  it("should display search results when query length is more than 2", async () => {
    render(<SearchBar users={mockUsers} />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "John" } });
    // Wait for state update and re-render
    await act(async () => {});
    expect(screen.getByText(/John Doe/i)).to.exist;
  });

  it("should not display search results when query length is less than 3", async () => {
    render(<SearchBar users={mockUsers} />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: "Jo" } });
    // Wait for state update and re-render
    await act(async () => {});
    expect(screen.queryByText(/John Doe/i)).not.to.exist;
  });
});
