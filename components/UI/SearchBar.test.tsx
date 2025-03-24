import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import SearchBar from './Searchbar';

describe('SearchBar component', () => {
  test('renders input and button', () => {
    render(<SearchBar onSearch={() => {}} />)
    const input = screen.getByPlaceholderText('Buscar aeropuertos...')
    const button = screen.getByRole('button', { name: /buscar/i })
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('calls onSearch with the correct value when button is clicked', () => {
    const mockOnSearch = jest.fn()
    render(<SearchBar onSearch={mockOnSearch} />)
    const input = screen.getByPlaceholderText('Buscar aeropuertos...')
    const button = screen.getByRole('button', { name: /buscar/i })
    fireEvent.change(input, { target: { value: 'Aeropuerto' } })
    fireEvent.click(button)
    expect(mockOnSearch).toHaveBeenCalledWith('Aeropuerto')
  })

  test('calls onSearch when Enter key is pressed', () => {
    const mockOnSearch = jest.fn()
    render(<SearchBar onSearch={mockOnSearch} />)
    const input = screen.getByPlaceholderText('Buscar aeropuertos...')
    fireEvent.change(input, { target: { value: 'Ciudad' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(mockOnSearch).toHaveBeenCalledWith('Ciudad')
  })
})
