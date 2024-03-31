import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Account from '../pages/Account';

// Mocking axios GET request
jest.mock('axios');

describe('Account component', () => {
  // Mocking local storage
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  test('renders account information when user is logged in', async () => {
    // Mocking user data
    const userData = {
      first_name: 'John',
      last_name: 'Hetherington',
      email: 'john@insurify.com',
    };

    // Mocking axios GET request to return user data
    axios.get.mockResolvedValueOnce({ status: 200, data: userData });

    // Setting token in local storage
    localStorage.setItem('token', 'fake-token');

    // Rendering Account component
    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>
    );

    // Waiting for the user data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText(/John Hetherington/)).toBeInTheDocument();
      expect(screen.getByText(/john@insurify.com/)).toBeInTheDocument();
    });
  });

  test('redirects to login page when user is not logged in', async () => {
    // Mocking axios GET request to simulate user not logged in
    axios.get.mockRejectedValueOnce(new Error('Unauthorized'));

    // Rendering Account component
    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>
    );

    // Waiting for the redirect to login page
    await waitFor(() => {
      expect(screen.getByText(/Insurify Account/)).toBeInTheDocument();
      expect(screen.getByText(/Logout/)).toBeInTheDocument();
    });
  });
});
