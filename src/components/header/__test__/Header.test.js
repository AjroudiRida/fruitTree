import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header testing', () => {
  it('shoud be in the document', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('shoud be visible in the document', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeVisible();
  });
});
