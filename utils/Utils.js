class Utils {
    constructor(page) {
      this.page = page;
    }
  
    // Método para obter o texto do elemento
    async getTextContent(selector) {
      return await this.page.$eval(selector, el => el.textContent.trim());
    }
  
    // Método para adicionar um atraso
    static delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
  }
  
  module.exports = Utils;
  