import { render, screen } from '@testing-library/react';
import RecurringDatePicker from '../components/RecurringDatePicker';

describe('RecurringDatePicker', () => {
  it('renders all core sections', () => {
    render(<RecurringDatePicker />);
    expect(screen.getByText(/Recurring Date Picker/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Date/i)).toBeInTheDocument();
  });
});
