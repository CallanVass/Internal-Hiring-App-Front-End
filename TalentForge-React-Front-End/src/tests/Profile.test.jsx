import { render, fireEvent, screen } from '@testing-library/react';
import Profile from '../components/Profile';
import { act } from 'react-dom/test-utils';

describe('Profile Component', () => {
  it('should render without crashing', () => {
    render(<Profile />);
  });
    
});