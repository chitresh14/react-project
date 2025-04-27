import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeAll(() => {
  console.log('Before All');
});
beforeEach(() => {
  console.log('Before Each');
});
afterAll(() => {
  console.log('After All');
});
afterEach(() => {
  console.log('After Each');
});
it('Should render the component with search', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole('button', { name: 'search' });
  const searchInput = screen.getByTestId('searchInput');
  fireEvent.change(searchInput, { target: { value: 'Food' } });
  fireEvent.click(searchBtn);
  // screen should load n cards
  const cards = screen.getAllByTestId('resCard');
  expect(searchBtn).toBeInTheDocument();
  expect(cards.length).toBe(1);
});

it('Should render the component with topRated restaurant i.e. 4.5 or greater', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });
  fireEvent.click(topRatedBtn);
  // screen should load n cards
  const cards = screen.getAllByTestId('resCard');
  expect(topRatedBtn).toBeInTheDocument();
  expect(cards.length).toBe(3);
});
