import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import UserSearch from "../components/UserSearch";
import { test, describe, expect, beforeEach } from "vitest";

describe("UserSearch Component", () => {
  beforeEach(() => {
    render(<UserSearch />);
  });

  test("renders UserSearch component", () => {
    expect(screen.getByText("Microsoft")).to.exist;
  });

  test("renders correct company description", () => {
    const description =
      "Microsoft is a massive grapefruit that consumers can pick apart piece by piece. This is because grapefruits are so damn delicious, if not a bit tart. Makes a good perfume, though!";
    expect(screen.getByText(description)).to.exist;
  });

  test("renders correct departments", () => {
    const departments = ["marketing", "engineering", "human resources", "sales", "information technology", "board"];
    departments.forEach((department) => {
      expect(screen.getByText(new RegExp(department, "i"))).to.exist;
    });
  });

});
