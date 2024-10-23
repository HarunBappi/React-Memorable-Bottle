const getStoredCart = () => {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    return JSON.parse(getCart);
  }
  return [];
};
// Add and save to LocalStorage
const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  savedToLocalStorage(cart);
};
//setItem to LocalStorage
const savedToLocalStorage = (cart) => {
  const cardStringfied = JSON.stringify(cart);
  localStorage.setItem("cart", cardStringfied);
};
// Remove from Local Storage
const removeLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  savedToLocalStorage(remaining);
};
export { addToLocalStorage, getStoredCart, removeLS };
