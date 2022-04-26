import { describe, expect, test, vi } from 'vitest';
import { render, screen, getByText, getByPlaceholderText } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
    test('render', () => {
        const { container } = render(<App />);
        expect(container).not.toBeNull();
        expect(container).toContain(/learn react/)
    })

    test('function', () => {
        const spy = vi.fn();
        const { container } = render(<App />);
        const input = getByPlaceholderText(container, /닉네임입력/);
        expect(input).not.toBeNull();
        expect(spy.getMockName()).toEqual(spy)
    })
});
