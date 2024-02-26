import { render, screen } from "@testing-library/react";
import { test, describe, expect, beforeEach } from "vitest";
import ViewListing from "../components/ViewListing";

describe("ViewListing", () => {
    beforeEach(() => {
      render(<ViewListing />);
    });
  
    test("renders listing title", () => {
      expect(screen.getByRole("heading", { level: 1 })).to.exist;
    });
  
    test("renders listing department", () => {
      expect(screen.getByRole("heading", { level: 2 })).to.exist;
    });
  
    test("renders listing date posted", () => {
      expect(screen.getByRole("heading", { level: 4, name: /listing.dateposted/i })).to.exist;
    });
  
    test("renders listing location", () => {
      expect(screen.getByRole("heading", { level: 4, name: /listing.location/i })).to.exist;
    });
  
    test("renders listing role type", () => {
      expect(screen.getByRole("heading", { level: 4, name: /listing.roleType/i })).to.exist;
    });
  
    test("renders listing role duration", () => {
      expect(screen.getByRole("heading", { level: 4, name: /listing.roleduration/i })).to.exist;
    });
  
    test("renders Apply Now button", () => {
      expect(screen.getByRole("button", { name: /apply now/i })).to.exist;
    });
  
    test("renders closing date", () => {
      expect(screen.getByText(/closing date/i)).to.exist;
    });
  });
