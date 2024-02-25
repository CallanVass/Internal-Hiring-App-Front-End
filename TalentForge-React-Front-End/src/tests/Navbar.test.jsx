import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import NavBar from "../components/NavBar";

describe('NavBar Component', () => {
    beforeEach(() => {
      render(<NavBar />);
    });
  
    it('renders the NavBar component', () => {
      const navElement = screen.getByRole('navigation');
      expect(navElement).toBeInTheDocument();
    });
  
    it('renders the mobile menu button', () => {
      const mobileMenuButton = screen.getByRole('button', { name: /Open main menu/i });
      expect(mobileMenuButton).toBeInTheDocument();
    });
  
    it('renders the profile dropdown button', () => {
      const profileDropdownButton = screen.getByRole('button', { name: /Open user menu/i });
      expect(profileDropdownButton).toBeInTheDocument();
    });
  
    // Assuming you have a navigation array with items { name: 'Home', href: '/home' }, { name: 'About', href: '/about' }
    it('renders navigation items', () => {
      const navigationItems = ['Home', 'Company Network', 'Opportunities']; // replace with your actual navigation items
      navigationItems.forEach(item => {
        const navItem = screen.getByRole('link', { name: new RegExp(item, 'i') });
        expect(navItem).toBeInTheDocument();
      });
    });
  });