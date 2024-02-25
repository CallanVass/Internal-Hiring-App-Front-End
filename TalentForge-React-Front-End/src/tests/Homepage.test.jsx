import { describe, expect, it, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react";
import HomePage from "../components/HomePage";
import '@testing-library/jest-dom';

describe('HomePage Component', () => {
    beforeEach(() => {
      render(<HomePage />);
    });
      
    it('renders without crashing', () => {
        const headings = screen.getAllByRole('heading');
        expect(headings.length).toBeGreaterThan(0);
      });
  
    it('renders the welcome text', () => {
      const welcomeText = screen.getByText('Welcome \'user.name\' to TalentForge');
      expect(welcomeText).toBeInTheDocument();
    });
  
    it('renders the intro text', () => {
      const introText = screen.getByText(/This is your home of....explore, interact, opportunities, develop...mission statement\/blurb\/ intro to let users know about the site and all of the benefits they can expect from it.../i);
      expect(introText).toBeInTheDocument();
    });
  
    it('renders the Latest Jobs button', () => {
      const latestJobsButton = screen.getByText('Latest Jobs');
      expect(latestJobsButton).toBeInTheDocument();
    });

    it('renders the My Profile button', () => {
      const myProfileButton = screen.getByText('My Profile');
      expect(myProfileButton).toBeInTheDocument();
    });

    it('renders the Company Network button', () => {
      const companyNetworkButton = screen.getByText('Company Network');
      expect(companyNetworkButton).toBeInTheDocument();
    });
});