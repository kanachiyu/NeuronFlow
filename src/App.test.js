// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NeuronFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NeuronFlow/i);
    expect(titleElement).toBeInTheDocument();
});
