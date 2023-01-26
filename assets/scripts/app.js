class Product {
  //   title = 'DEFAULT';
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }
  
  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
                    <div>
                        <img src="${this.product.imageUrl}" alt="${this.product.title}">
                        <div class="product-item__content">
                            <h2>${this.product.title}</h2>
                            <h3>\$${this.product.price}</h3>
                            <p>${this.product.description}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A pillow',
      'https://images-us-prod.cms.dynamics365commerce.ms/cms/api/cncgmclkfv/imageFileData/search?fileName=/Products%2F142907P%20%5E%20%20%5E%20King%20%5E%20%20%5E%20Prime_000_001.png&fallback=/Products/142907P_000_001.png,Product-Fallback-Image.png&m=6&q=80&cropfocalregion=true',
      19.99,
      'A soft pillow!'
    ),
    new Product(
      'A carpet',
      'https://www.claremontrug.com/antique-oriental-rugs-carpets/images_rugs/5532/Antique-Persian-Rug-Serapi-11-1x12-5.SGC4.jpg',
      89.99,
      'A carpet which you might like - or not.'
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
