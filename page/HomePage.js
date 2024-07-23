class HomePage {
    constructor(page) {
      this.page = page;
      this.registerLink = 'a.ico-register';
      this.loginLink = 'a.ico-login';
      this.wishlistLink = 'a.ico-wishlist';
      this.shoppingCartLink = '#topcartlink a.ico-cart';
      this.searchStoreInput = 'input#small-searchterms';
      this.searchButton = 'button.search-box-button';
    }
  
    async clickRegister() {
      await this.page.click(this.registerLink);
    }
  
    async clickLogin() {
      await this.page.click(this.loginLink);
    }
  
    async clickWishlist() {
      await this.page.click(this.wishlistLink);
    }
  
    async clickShoppingCart() {
      await this.page.click(this.shoppingCartLink);
    }
  
    async typeSearchStore(text) {
      await this.page.type(this.searchStoreInput, text);
    }
  
    async clickSearchButton() {
      await this.page.click(this.searchButton);
    }
  }
  
  module.exports = HomePage;
  