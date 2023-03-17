import { useRouter } from 'next/router'
import '@testing-library/jest-dom/extend-expect';
import HomeContainer from "../../pages/index";

import { fireEvent, render, screen, within } from "@testing-library/react";


jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))
const countries = [
  {
    name: { common: 'Canada' },
    region: 'Americas',
    capital: ['Ottawa'],
    population: 37742154,
    flags: { png: '/canada.png', alt: 'Canadian flag' },
  },
  {
    name: { common: 'Germany' },
    region: 'Europe',
    capital: ['Berlin'],
    population: 83019200,
    flags: { png: '/germany.png', alt: 'German flag' },
  },
  {
    name: { common: 'testName' },
    region: 'Africa',
    capital: ['Test'],
    population: 83019200,
    flags: { png: '/germany.png', alt: 'German flag' },
  },
];

const mockOn = jest.fn()
describe('HomeContainer component', () => {
    window.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve(countries)
        })
    );


    it("renders list of countries", async () => {
        useRouter.mockReturnValue({
            events: {
                on: mockOn,
                off: () => { },
            }
        })

        render(<HomeContainer countries={countries} />);
        // check if all components are rendered
        expect(screen.getByTestId("homeMain")).toBeInTheDocument();
        const listItems = await screen.getAllByTestId("countriesCart")

        expect(listItems).toHaveLength(countries.length)
        listItems.forEach((item, _ind) => {
            const { getByText, queryByText } = within(item)
            const { population, region, name: { common } } = countries[_ind]
            expect(getByText(common)).toBeInTheDocument();
            expect(getByText(region)).toBeInTheDocument();
            expect(getByText(population)).toBeInTheDocument();
        })
    })
  test('renders the search input and filter', () => {
    render(<HomeContainer countries={countries} />);
    const searchInput = screen.getByTestId('searchInput');
    const selectOption = screen.getByTestId('selectOption');
    expect(searchInput).toBeInTheDocument();
    expect(selectOption).toBeInTheDocument();
  });

  test('displays the country cards', () => {
    render(<HomeContainer countries={countries} />);
    const countryCards = screen.getAllByTestId('countriesCart');
    expect(countryCards).toHaveLength(3);
  });

  test('filters countries by region', () => {
    render(<HomeContainer countries={countries} />);
    const selectOption = screen.getByTestId('selectOption');
    fireEvent.change(selectOption, { target: { value: 'Europe' } });
    const countryCards = screen.getAllByTestId('countriesCart');
    expect(countryCards).toHaveLength(1);
  });

  test('searches for countries by name or capital', () => {
    render(<HomeContainer countries={countries} />);
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, { target: { value: 'Canada' } });
    const countryCards = screen.getAllByTestId('countriesCart');
    expect(countryCards).toHaveLength(1);
  });
  it('should update the region filter when a different option is selected', () => {
    render(<HomeContainer countries={countries} />);
    
    const selectElement = screen.getByTestId('selectOption');
    // select the "Africa" option
    fireEvent.change(selectElement, { target: { value: 1 } })

    
  });
  
});




