const setItemLocalStor = (name, id) => {
    const savedProduct = getStoredItem();
    savedProduct[name] = id;
    localStorage.setItem('Cart', JSON.stringify(savedProduct));
}

const getStoredItem = () => {
    let cart = {};
    const savedCart = localStorage.getItem('Cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

export {
    setItemLocalStor,
    getStoredItem,
};
