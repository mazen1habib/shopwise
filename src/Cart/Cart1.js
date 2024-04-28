import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from '../Components/images/pexels-alena-shekhovtcova-6995882.jpg'
import './cartshop.css'
import Scrollh from '../Routes/Scrollh'
import './cart1.css'
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,

} from "./Cartslice";

import { Link } from "react-router-dom";
import Nav from "../Routes/Nav";
import Session8home from "../Components/Home/Session8home";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(  addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  // const handleDecreasefurn = (product) => {
  //   dispatch(decreasefurn(product));
  // };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Fragment>
    <Nav/>
    <section className='shop4'>
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {(cart.cart || cart.furn) &&
             (cart.cart || cart.furn).map((cartItem) => (
                <div className="cart-item" >
                  <div className="cart-product">
                    <img src={cartItem.node.featuredImage.url || cartItem.images[0]} alt={cartItem.node.title} />
                    <div className="sec1">
                      <h3>{cartItem.node.title ||cartItem.title}</h3>
                      <p>{cartItem.node.description}</p>
                      <button class="btn" onClick={() => handleRemoveFromCart(cartItem)}>
  <p class="paragraph"> delete </p>
  <span class="icon-wrapper">
    <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</button>
                      {/* <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button> */}
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.node.variants.edges[0].node.price.amount || cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart (cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(cartItem.node.variants.edges[0].node.price.amount ||cartItem.price) * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-items">
            {( cart.furn) &&
             (cart.furn).map((cartItem) => (
                <div className="cart-item" >
                  <div className="cart-product">
                    <img src={cartItem.images[0]} alt={''} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <p>{cartItem.description}</p>
                        <button class="btn" onClick={() => handleRemoveFromCart(cartItem)}>
  <p class="paragraph"> delete </p>
  <span class="icon-wrapper">
    <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</button>
  </div>
    </div>
      <div className="cart-product-price">${cartItem.price}</div>
          <div className="cart-product-quantity">
             <button onClick={() => handleDecreaseCart(cartItem)}>
              -
             </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(cartItem.price) * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
          <button class="btn" onClick={() => handleClearCart()}>
  <p class="paragraph">  Clear </p>
  <span class="icon-wrapper">
    <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </span>
</button>
          </div>
        </div>
      )}
      
    </div>
    <div className='slideshop scart' > <div className='opshop'> <h3>NEW COLLECTION</h3>
   <h1>
SALE 60% OFF</h1> <button class="c-button c-button--gooey"> Shop Now
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: '0px', width: '0px'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg></div> <img src={img1} alt=''/></div>
        </section>
    <Session8home/>
    <Scrollh/>
    <Footer/>
    </Fragment>
  );
};

export default Cart;
