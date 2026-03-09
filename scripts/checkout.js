import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadCart, calculateCartQuantity} from '../data/cart.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
// import '../data/cart-class.js';
// import {loadProducts} from '../data/products.js';

export function updateCheckoutHeader() {
  const cartCountEl = document.querySelector('.js-return-to-home-link');
  const totalItems = calculateCartQuantity();

  cartCountEl.textContent = `${totalItems} item${totalItems > 1 ? 's' : ''}`;
}


async function loadPage() {
    try {
    await loadProductsFetch();

    await new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
   });
   } catch (error) {
     console.log(
        'Unexpected error. Please Try Again Later');
  }
   renderOrderSummary();
   renderPaymentSummary();
   updateCheckoutHeader();
}

loadPage();
 

/*
Promise.all(
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
        resolve('value2');
    });
 })
).then((values) => {

    console.log(values); // ["value1", "value2"]
   renderOrderSummary();
   renderPaymentSummary();
});
    

new Promise ((resolve) => {
loadProducts(() => {
    resolve();
});

}).then(() => {
return new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
 });

}).then(() => {
   renderOrderSummary();
   renderPaymentSummary();
});

loadProducts(() => {
    loadCart(() => {
      renderOrderSummary();
      renderPaymentSummary();
    })
}); */


