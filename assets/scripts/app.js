class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

const productList = {
  products: [
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
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
