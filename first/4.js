const item = {
    name: 'volkswagen passat b3',
    quantity: '4',
    price: '25.43891',
}

function calculateTotalPrice(item){
    if(!item || !item.hasOwnProperty('quantity') || !item.hasOwnProperty('price')){ //добавить проверку является ли item объектом?
        return null;
    }

    const quantity = parseInt(item.quantity);
    const price = patseFloat(item.price); // проверка на то, как преобразовалось нужна ли?
    
    const totalPrice = quantity * price;
    return totalPrice;
}

const totalPrice = calculateTotalPrice(item);
console.log(totalPrice);