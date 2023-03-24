// like the controller where..
// gets the products from the API and sends to the view

import { getParam, loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';
import ProductDetails from './ProductDetails.mjs';

loadHeaderFooter();
// 'tends' is used to specify the cathegory you want
const dataSource = new ExternalServices('tents');
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();

