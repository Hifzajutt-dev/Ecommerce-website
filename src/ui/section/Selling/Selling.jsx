import React from 'react';
import './Selling.css'; 
import Coat  from '../../../assets/coat.png'
import Heart from '../../../assets/heart small.png'
import QuickView from '../../../assets/Quick View.png'
import Bag from '../../../assets/bag.png'
import Bookshlef from '../../../assets/bookshelf.png'
import Gammax from '../../../assets/gammax.png'


const Selling= () => {
  return (
    
    <section>
      <div className="first-div ">
          <div className="rectangle"></div>
          <h1>This Month</h1>
        </div>
        <div className="selling-div">
        <div className="selling-product">
          <h1>Best Selling Products</h1>
        </div>
        <div className="selling">
          <button>View All</button>
        </div>
        </div>

    <div class="main-container">
  <div class="product-box">
    <div class="top-section">
      <div class="icons-container">
        <img src={Heart} alt="favorite icon" />
        <img src={QuickView} alt="view icon" />
      </div>
      <img class="product-image" src={Coat} alt="The north coat" />
    </div>
    <div class="bottom-section">
      <div class="product-title">The north coat</div>
      <div class="price-group">
        <span class="new-price">$260</span>
        <span class="old-price">$360</span>
      </div>
      <div class="stars">⭐⭐⭐⭐⭐ <span>(65)</span></div>
    </div>
  </div>

  <div class="product-box">
    <div class="top-section">
      <div class="icons-container">
        <img src={Heart} alt="favorite icon" />
        <img src={QuickView} alt="view icon" />
      </div>
      <img class="product-image" src={ Bag}alt="Product Image" />
    </div>
    <div class="bottom-section">
      <div class="product-title">Gucci duffle bag</div>
      <div class="price-group">
        <span class="new-price">$260</span>
        <span class="old-price">$900</span>
      </div>
      <div class="stars">⭐⭐⭐⭐⭐ <span>(60)</span></div>
    </div>
  </div>

  <div class="product-box">
    <div class="top-section">
      <div class="icons-container">
        <img src={Heart} alt="favorite icon" />
        <img src={QuickView} alt="view icon" />
      </div>
      <img class="product-image" src={ Gammax}alt="Product Image" />
    </div>
    <div class="bottom-section">
      <div class="product-title">RGB liquid CPU Cooler</div>
      <div class="price-group">
        <span class="new-price">$600</span>
        <span class="old-price">$800</span>
      </div>
      <div class="stars">⭐⭐⭐⭐⭐ <span>(65)</span></div>
    </div>
  </div>
 
  <div class="product-box">
    <div class="top-section">
      <div class="icons-container">
        <img src={Heart} alt="favorite icon" />
        <img src={QuickView} alt="view icon" />
      </div>
      <img class="product-image" src={ Bookshlef}alt="Product Image" />
    </div>
    <div class="bottom-section">
      <div class="product-title">Small BookSelf</div>
      <div class="price-group">
        <span class="new-price">$575</span>
        <span class="old-price">$700</span>
      </div>
      <div class="stars">⭐⭐⭐⭐⭐ <span>(25)</span></div>
    </div>
  </div>
  </div>
</section>
    
  );
};

export default Selling;


