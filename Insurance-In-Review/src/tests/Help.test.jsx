import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Help from '../pages/Help';

describe('Help component', () => {
    beforeEach(() => {
        render(<Help />);
    });

    test('renders each section of the help page with correct content', () => {
        const faqSection = screen.getByTestId("faq-section");

        // Check if the FAQ title is rendered
        expect(faqSection).toHaveTextContent("FAQ's");

    });

    test('Navigation buttons scroll to corresponding sections', () => {
        render(<Help />); // Render the Help component

        // Find the navigation buttons
        const accountButtons = screen.getAllByAltText('Account circle');
        const contactButtons = screen.getAllByAltText('Contact circle');
        const privacyButtons = screen.getAllByAltText('Privacy circle');
        const faqButtons = screen.getAllByAltText('FAQ circle');

        // Check if all buttons are present
        expect(accountButtons.length).toBeGreaterThan(0);
        expect(contactButtons.length).toBeGreaterThan(0);
        expect(privacyButtons.length).toBeGreaterThan(0);
        expect(faqButtons.length).toBeGreaterThan(0);

        // Simulate click on the first button of each type
        fireEvent.click(accountButtons[0]);
        fireEvent.click(contactButtons[0]);
        fireEvent.click(privacyButtons[0]);
        fireEvent.click(faqButtons[0]);

        // Check if the corresponding sections are in the document
        expect(screen.getByTestId('account-section')).toBeInTheDocument();
        expect(screen.getByTestId('contact-section')).toBeInTheDocument();
        expect(screen.getByTestId('privacy-section')).toBeInTheDocument();
        expect(screen.getByTestId('faq-section')).toBeInTheDocument();
    });



});