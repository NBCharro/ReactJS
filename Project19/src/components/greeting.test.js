import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './greeting';

describe('Greeting Component', () => {
    test('renders Hello World', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // Nothing in this example
        // Assert
        const helloWorld = screen.getByText('Hello World!', { exact: true });
        // expect(helloWorld).not.toBeInTheDocument;
        expect(helloWorld).toBeInTheDocument();
    });
    test('renders good to see you if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // Nothing in this example
        // Assert
        const outputElement = screen.getByText('good to see you', {
            exact: false,
        });
        // expect(outputElement).not.toBeInTheDocument;
        expect(outputElement).toBeInTheDocument();
    });
    test('renders Changed! if the button WAS clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.getByText('Changed!', {
            exact: false,
        });
        expect(outputElement).toBeInTheDocument();
    });
    test('NOT renders good to see yo if the button WAS clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.queryByText('good to see you', {
            exact: false,
        });
        expect(outputElement).toBeNull();
    });
});
