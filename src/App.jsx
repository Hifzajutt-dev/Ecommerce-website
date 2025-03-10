import Navbar from "./ui/common/Navbar/Navbar";
import Home from "./ui/pages/home/Home";
// import Products from "./ui/pages/Products/Products";
import Flash from "./ui/section/Flashsale/Flash";
import Category from "./ui/section/Category/Category";
import Selling from "./ui/section/Selling/Selling";
import Music from "./ui/section/Music/Music";
import OurProduct from "./ui/section/OurProduct/Index";
import Featured from "./ui/section/Featured/Featured";
import Testimonials from "./ui/section/Testimonials/Testimonials";
import Footer from "./ui/common/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Flash />
      <Category />
      <Selling />
      <Music />
      <OurProduct />
      <Featured />
      <Testimonials />
      <Footer />
      {/* <Products /> */}
    </>
  );
}
export default App;
