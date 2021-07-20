import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />);
        // No act
        // const listItemElement = screen.getByRole('listitem'); // getByRolle failed if was more than 1
        // const listItemElements = screen.getAllByRole('listitem'); // Failed because look immediatelly for the list, and we test a Promise, which is not immediatelly
        const listItemElements = await screen.findAllByRole(
            'listitem',
            {},
            { timeout: 1000 }
        ); // find returns a promise. Second argument {exact:true/false}. Third argument {timeout: default 1 second}
        expect(listItemElements).not.toHaveLength(0);
    });
    test('renders posts if request succeeds with mock function', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }], // () => Simulate the response of the fetch, hardcoded, in thiscase an array []
        });
        render(<Async />);
        const listItemElements = await screen.findAllByRole(
            'listitem',
            {},
            { timeout: 1000 }
        );
        expect(listItemElements).not.toHaveLength(0);
    });
});
