import React from 'react'
import './Index.css'
import Arrows from "../../../assets/arrows.png";
import Secondarrow from "../../../assets/secondarrow.png";
import KidsCar from '../../../assets/kidsCar.png'
import Shoes from '../../../assets/shoes.png'
import Jacket from '../../../assets/jacket.png'
import Gaming from '../../../assets/gaming.png'
import Heart from '../../../assets/heart small.png'
import QuickView from '../../../assets/Quick View.png'
import DryFood from '../../../assets/DryFood.png'
import Cameraimg from '../../../assets/Camera-img.png'
import Laptop from '../../../assets/laptop.png'
import ProductSet from '../../../assets/Productset.png'



function Index() {
  return (
    
    <>
    <section>
    <div className="first-div">
          <div className="rectangle"></div>
          <h1>Our Products</h1>
        </div>
         <div className="Category-container">
                  <div className=" Category sale">
                    <h1>Browse By Category</h1>
                  </div>
        
                  <div className="arrows">
                    <div className="first-arrow">
                      <img src={Arrows} alt="" />
                    </div>
                    <div className="second-arrow">
                      <img src={Secondarrow} alt="" />
                    </div>
                  </div>
                </div>
                  <div class="main-container">
                  <div class="product-box">
                    <div class="top-section">
                      <div class="icons-container">
                        <img src={Heart} alt="favorite icon" />
                        <img src={QuickView} alt="view icon" />
                      </div>
                      <img class="product-image" src={DryFood} alt="The north coat" />
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
                      <img class="product-image" src={Cameraimg}alt="Product Image" />
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
                      <img class="product-image" src={Laptop}alt="Product Image" />
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
                      <img class="product-image" src={ProductSet}alt="Product Image" />
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
                  <div class="main-container">
                  <div class="product-box">
                    <div class="top-section">
                      <div class="icons-container">
                        <img src={Heart} alt="favorite icon" />
                        <img src={QuickView} alt="view icon" />
                      </div>
                      <img class="product-image" src={KidsCar} alt="The north coat" />
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
                      <img class="product-image" src={Shoes}alt="Product Image" />
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
                      <img class="product-image" src={ Gaming }alt="Product Image" />
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
                      <img class="product-image" src={Jacket}alt="Jacket Image" />
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
                  <div className="product-btn">
         <button> View All Products</button>
          </div>
              
    </section>
    </>
  )
}

export default Index