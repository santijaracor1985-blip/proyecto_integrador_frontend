export const cartService = {
  getCart() {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("cart") || "[]");
  },

  addToCart(product: any) {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  removeFromCart(id: string) {
    const cart = this.getCart().filter((item: any) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  clearCart() {
    localStorage.removeItem("cart");
  }
};
