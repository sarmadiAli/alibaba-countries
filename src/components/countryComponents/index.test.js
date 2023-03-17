import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Country from "./index";
import '@testing-library/jest-dom/extend-expect';


jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))
const mockOn = jest.fn()

describe("Country", () => {
    it("renders country data", async () => {
        const item = {
            name: {
              common: 'United States of America'
            },
            flags: {
              png: '/us.png',
              alt: 'US Flag'
            },
            region: 'Americas',
            population: 328239523,
            capital: ['Washington D.C.'],
            tld: ['.us'],
            currencies: {
              USD: {
                name: 'United States Dollar'
              }
            },
            languages: {
              eng: 'English'
            },
            borders: ['CAN', 'MEX']
          };
        useRouter.mockReturnValue({
            events: {
                on: mockOn,
                off: () => { },
            }
        })
        const { getByAltText, getByText } = await render(<Country item={item} />);
        expect(getByText('Back')).toBeInTheDocument();
        expect(getByAltText('US Flag')).toBeInTheDocument();
        expect(getByText('United States of America')).toBeInTheDocument();
        expect(getByText('Native Name:')).toBeInTheDocument();
        expect(getByText('Population:')).toBeInTheDocument();
        expect(getByText('328239523')).toBeInTheDocument();
        expect(getByText('Region:')).toBeInTheDocument();
        expect(getByText('Sub Region:')).toBeInTheDocument();
        expect(getByText('Capital:')).toBeInTheDocument();
        expect(getByText('Washington D.C.')).toBeInTheDocument();
        expect(getByText('Top Level Domain:')).toBeInTheDocument();
        expect(getByText('.us')).toBeInTheDocument();
        expect(getByText('Currencies:')).toBeInTheDocument();
        expect(getByText('United States Dollar')).toBeInTheDocument();
        expect(getByText('Languages:')).toBeInTheDocument();
        expect(getByText('English')).toBeInTheDocument();
    });
});