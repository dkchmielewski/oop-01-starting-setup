class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;
}

console.log(new Product());

const productList = {
    products : [
        // new Product()
        { 
            title: 'A pillow',
            imageUrl: 'https://images-us-prod.cms.dynamics365commerce.ms/cms/api/cncgmclkfv/imageFileData/search?fileName=/Products%2F142907P%20%5E%20%20%5E%20King%20%5E%20%20%5E%20Prime_000_001.png&fallback=/Products/142907P_000_001.png,Product-Fallback-Image.png&m=6&q=80&cropfocalregion=true',
            price: 19.99,
            description: 'A soft pillow!'
        },
        { 
            title: 'A carpet',
            imageUrl: 'https://www.claremontrug.com/antique-oriental-rugs-carpets/images_rugs/5532/Antique-Persian-Rug-Serapi-11-1x12-5.SGC4.jpg',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products) {
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
    }
};

productList.render();