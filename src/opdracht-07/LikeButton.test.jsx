import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';

describe('LikeButton', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont initiële aantal likes', () => {
    render(<LikeButton initialLikes={5} />);
    expect(screen.getByText('5 likes')).toBeInTheDocument();
  });

  test('verhoogt likes bij klik', () => {
    // TODO: Render LikeButton met initialLikes={0}
    // TODO: Vind de button (Hint: screen.getByRole('button'))
    // TODO: Klik op de button (Hint: fireEvent.click(button))
    // TODO: Check of "1 likes" op het scherm staat
      render(<LikeButton initialLikes={0} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
    const result = screen.getByText('1 likes');
    expect(result).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('verlaagt likes bij tweede klik', () => {
    // TODO: Render LikeButton
    // TODO: Klik 2x op de button
    // TODO: Check of we terug zijn bij "0 likes"
      render(<LikeButton initialLikes={0} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
    const result = screen.getByText('0 likes');
    expect(result).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont rood hartje als geliked', () => {
    // TODO: Render LikeButton
      render(<LikeButton initialLikes={0} />);
    // TODO: Klik op de button
    fireEvent.click(screen.getByRole('button'));
    // TODO: Check of de button tekst "❤️ Like" bevat
    const result = screen.getByText(/❤️ Like/);
    // Hint: screen.getByText(/❤️ Like/)
    expect(result).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

});
