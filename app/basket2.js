let balance = 0;
let itemsInBasket = [];


function addToBasket(book, copies) {
    for (i = 0; i < copies; i++) {
        itemsInBasket.push(book);
        balance += book.price;
    };
};

function findBookInBasket(book) {
    let isbnNumberToCheck = book.isbn;
    let result = itemsInBasket.filter(val => val.isbn == isbnNumberToCheck);
    return result;
};

function removeFromBasket(book, copies) {
    for (i = 0; i < copies; i++) {
            let result = findBookInBasket(book);
            if (result.length >= i) {
               let indexToRemove = itemsInBasket.indexOf(book);
               itemsInBasket.splice(indexToRemove, 1);
               balance -= book.price;
            };
        };
};


function compare(a,b) {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }

function subTotal() {
    if (itemsInBasket.length > 10) {
       itemsInBasket.sort(compare);
       itemsInBasket.reverse();
        for (i=10; i <= itemsInBasket.length; i++) {
            let discountedPrice = (itemsInBasket[i].price*0.25);
            balance -= discountedPrice;
            };
        };
    };


/*function emptyBasket(){
    itemsInBasket = 0;
    discountedItems = 0;
    fullPriceItems = 0;
    balance = 0;
}
*/

function getItems() {
    return itemsInBasket.length;
};


function getBalance(){
    return balance
};


module.exports = {
    addToBasket,
    findBookInBasket,
    removeFromBasket,
    subTotal,
    getItems,
    getBalance
};
