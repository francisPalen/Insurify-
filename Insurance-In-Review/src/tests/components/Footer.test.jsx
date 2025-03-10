import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  test('renders copyright and website information', () => {
    render(<Footer />);
    
    // Check if copyright information is rendered
    expect(screen.getByText(/Copyright © 2024 - All right reserved by Insurify/i)).toBeInTheDocument();

    // Check if website information is rendered
    expect(screen.getByText(/Website by Team 15/i)).toBeInTheDocument();
  });
});
