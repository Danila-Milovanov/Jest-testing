import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
    // TODO: Maak hier een nieuwe ShoppingCart aan
    // Hint: cart = new ShoppingCart();
  });

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: nieuwe cart is leeg', () => {
    cart = new ShoppingCart();
    expect(cart.getItemCount()).toBe(0);
  });

  test('addItem voegt product toe', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999});
    // TODO: Voeg een product toe: { id: 1, name: 'Laptop', price: 999 }
    // TODO: Check of getItemCount() nu 1 is
    expect(cart.getItemCount()).toBe(1); // Deze test faalt! Vervang met je eigen test
  });

  test('addItem met quantity voegt meerdere items toe', () => {
    cart.addItem({ id: 1, name: 'Muis', price: 25 }, 3);
    // TODO: Voeg product toe met quantity 3
    // TODO: Check of getItemCount() 3 is
    expect(cart.getItemCount()).toBe(3); // Deze test faalt! Vervang met je eigen test
  });

  test('getTotal berekent juiste totaal', () => {
      cart.addItem({ id: 1, name: 'Muis', price: 25 }, 2);
    // TODO: Voeg product toe: { id: 1, name: 'Muis', price: 25 }, quantity 2
    // TODO: Check of getTotal() 50 teruggeeft (2 x 25)
    expect(cart.getTotal()).toBe(50); // Deze test faalt! Vervang met je eigen test
  });

  test('removeItem verwijdert product', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999 });
    // TODO: Voeg een product toe met id: 1
    // TODO: Roep removeItem(1) aan
    cart.removeItem(1);
    // TODO: Check of getItemCount() 0 is
    expect(cart.getItemCount()).toBe(0); // Deze test faalt! Vervang met je eigen test
  });

  test('clear maakt cart leeg', () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999});
    cart.addItem({ id: 2, name: 'Muis', price: 25});
    cart.clear();
    // TODO: Voeg 2 producten toe
    // TODO: Roep clear() aan
    // TODO: Check of getItemCount() 0 is
    expect(cart.getItemCount()).toBe(0); // Deze test faalt! Vervang met je eigen test
  });

});
