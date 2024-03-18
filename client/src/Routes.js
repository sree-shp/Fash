import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import LifeStyle from "./components/LifeStyle/LifeStyle";
import ProductBrowser from "./components/ProductsBrowser/ProductsBrowser";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import Search from "./components/Search/Search";

function RoutesList({ userName, setUserName, selectedId, setSelectedId }) {
  return (
    <>
      <Routes>
        {/*Routes for Home, Login, Register, Cart, */}
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route
          path="/Login"
          element={<Login userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/Register"
          element={<Register userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/Cart"
          element={
            <Cart selectedId={selectedId} setSelectedId={setSelectedId} />
          }
        />
        <Route path="/Orders" element={<Orders />} />

        <Route path="/Men" element={<Men />} />

        <Route path="/Women" element={<Women />} />

        <Route path="/Kids" element={<Kids />} />

        <Route path="/LifeStyle" element={<LifeStyle />} />

        {/* Men Page Shop by category Routes */}

        <Route
          path="/Men/TopWear/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route path="/Men/TopWear/T-Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Men/TopWear/Casual Shirts"
          element={
            <ProductBrowser
              subCategory="Casual Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Casual Shirts/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Men/TopWear/Formal Shirts"
          element={
            <ProductBrowser
              subCategory="Formal Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Formal Shirts/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Men/BottomWear/Jeans"
          element={
            <ProductBrowser
              subCategory="Jeans"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route path="/Men/BottomWear/Jeans/:id" element={<ProductDetails />} />

        <Route
          path="/Men/BottomWear/Casual Trousers"
          element={
            <ProductBrowser
              subCategory="Casual Trousers"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Casual Trousers/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Men/BottomWear/Formal Trousers"
          element={
            <ProductBrowser
              subCategory="Formal Trousers"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Formal Trousers/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Men/TopWear/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route path="/Men/TopWear/T-Shirts/:id" element={<ProductDetails />} />
        <Route
          path="/Men/TopWear/Casual Shirts"
          element={
            <ProductBrowser
              subCategory="Casual Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Casual Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/TopWear/Formal Shirts"
          element={
            <ProductBrowser
              subCategory="Formal Shirts"
              category="TopWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/TopWear/Formal Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/BottomWear/Jeans"
          element={
            <ProductBrowser
              subCategory="Jeans"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route path="/Men/BottomWear/Jeans/:id" element={<ProductDetails />} />
        <Route
          path="/Men/BottomWear/Casual Trousers"
          element={
            <ProductBrowser
              subCategory="Casual Trousers"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Casual Trousers/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/BottomWear/Formal Trousers"
          element={
            <ProductBrowser
              subCategory="Formal Trousers"
              category="BottomWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/BottomWear/Formal Trousers/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              subCategory="Casual Shoes"
              category="FootWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Sports Shoes"
          element={
            <ProductBrowser
              subCategory="Sports Shoes"
              category="FootWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Sports Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/FootWear/Formal Shoes"
          element={
            <ProductBrowser
              subCategory="Formal Shoes"
              category="FootWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/FootWear/Formal Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Active T-Shirts"
          element={
            <ProductBrowser
              subCategory="Active T-Shirts"
              category="ActiveWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Active T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Track Pants & Shorts"
          element={
            <ProductBrowser
              subCategory="Track Pants & Shorts"
              category="ActiveWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Track Pants and Shorts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Men/ActiveWear/Tracksuits"
          element={
            <ProductBrowser
              subCategory="Tracksuits"
              category="ActiveWear"
              categoryGroup="Men"
            />
          }
        />
        <Route
          path="/Men/ActiveWear/Tracksuits/:id"
          element={<ProductDetails />}
        />

        {/* Women Page Shop by category Routes */}

        <Route
          path="/Women/Indian & Fusion Wear/Sarees"
          element={
            <ProductBrowser
              subCategory="Sarees"
              category="Indian & Fusion Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Sarees/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Women/Western Wear/Dresses"
          element={
            <ProductBrowser
              subCategory="Dresses"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Dresses/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Women/Western Wear/Tops"
          element={
            <ProductBrowser
              subCategory="Tops"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Tops/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Women/Western Wear/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/T-Shirts/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Women/FootWear/Heels"
          element={
            <ProductBrowser
              subCategory="Heels"
              category="FootWear"
              categoryGroup="Women"
            />
          }
        />
        <Route path="/Women/FootWear/Heels/:id" element={<ProductDetails />} />

        {/* Women Routes */}
        <Route
          path="/Women/Indian & Fusion Wear/Kurtas & Suits"
          element={
            <ProductBrowser
              subCategory="Kurtas & Suits"
              category="Indian & Fusion wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtas & Suits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops"
          element={
            <ProductBrowser
              subCategory="Kurtis, Tunics & Tops"
              category="Indian & Fusion wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Indian & Fusion Wear/Sarees"
          element={
            <ProductBrowser
              subCategory="Sarees"
              category="Indian & Fusion wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Indian & Fusion Wear/Sarees/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/Dresses"
          element={
            <ProductBrowser
              subCategory="Dresses"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Dresses/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/Tops"
          element={
            <ProductBrowser
              subCategory="Tops"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Western Wear/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="Western Wear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Western Wear/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/FootWear/Flats"
          element={
            <ProductBrowser
              subCategory="Flats"
              category="FootWear"
              categoryGroup="Women"
            />
          }
        />
        <Route path="/Women/FootWear/Flats/:id" element={<ProductDetails />} />
        <Route
          path="/Women/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              subCategory="Casual Shoes"
              category="FootWear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/FootWear/Heels"
          element={
            <ProductBrowser
              subCategory="Heels"
              category="FootWear"
              categoryGroup="Women"
            />
          }
        />
        <Route path="/Women/FootWear/Heels/:id" element={<ProductDetails />} />
        <Route
          path="/Women/Sports & ActiveWear/Clothing"
          element={
            <ProductBrowser
              subCategory="Clothing"
              category="Sports & ActiveWear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Clothing/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Sports & ActiveWear/Footwear"
          element={
            <ProductBrowser
              subCategory="Footwear"
              category="Sports & ActiveWear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Footwear/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Women/Sports & ActiveWear/Sports Accessories"
          element={
            <ProductBrowser
              subCategory="Sports Accessories"
              category="Sports & ActiveWear"
              categoryGroup="Women"
            />
          }
        />
        <Route
          path="/Women/Sports & ActiveWear/Sports Accessories/:id"
          element={<ProductDetails />}
        />

        {/* Kids Routes */}
        <Route
          path="/Kids/Boys Clothing/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="Boys Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Boys Clothing/Shirts"
          element={
            <ProductBrowser
              subCategory="Shirts"
              category="Boys Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Boys Clothing/Shorts"
          element={
            <ProductBrowser
              subCategory="Shorts"
              category="Boys Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Boys Clothing/Shorts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/Dresses"
          element={
            <ProductBrowser
              subCategory="Dresses"
              category="Girls Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/Dresses/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/Tops"
          element={
            <ProductBrowser
              subCategory="Tops"
              category="Girls Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/Tops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Girls Clothing/T-Shirts"
          element={
            <ProductBrowser
              subCategory="T-Shirts"
              category="Girls Clothing"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Girls Clothing/T-Shirts/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Flip Flops"
          element={
            <ProductBrowser
              subCategory="Flip Flops"
              category="FootWear"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Flip Flops/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Casual Shoes"
          element={
            <ProductBrowser
              subCategory="Casual Shoes"
              category="FootWear"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Casual Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/FootWear/Sports Shoes"
          element={
            <ProductBrowser
              subCategory="Sports Shoes"
              category="FootWear"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/FootWear/Sports Shoes/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Bodysuits"
          element={
            <ProductBrowser
              subCategory="Bodysuits"
              category="Infants"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Bodysuits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Rompers & Sleepsuits"
          element={
            <ProductBrowser
              subCategory="Rompers & Sleepsuits"
              category="Infants"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Rompers & Sleepsuits/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Kids/Infants/Clothing Sets"
          element={
            <ProductBrowser
              subCategory="Clothing Sets"
              category="Infants"
              categoryGroup="Kids"
            />
          }
        />
        <Route
          path="/Kids/Infants/Clothing Sets/:id"
          element={<ProductDetails />}
        />

        {/* Lifestyle */}
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bed Runners"
          element={
            <ProductBrowser
              subCategory="Bed Runners"
              category="Bed Linen & Furnishing"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bed Runners/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bedsheets"
          element={
            <ProductBrowser
              subCategory="Bedsheets"
              category="Bed Linen & Furnishing"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Bedsheets/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors"
          element={
            <ProductBrowser
              subCategory="Mattress Protectors"
              category="Bed Linen & Furnishing"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Bath Towels"
          element={
            <ProductBrowser
              subCategory="Bath Towels"
              category="Bath"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Bath Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Hand & Face Towels"
          element={
            <ProductBrowser
              subCategory="Hand & Face Towels"
              category="Bath"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Hand & Face Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Bath/Beach Towels"
          element={
            <ProductBrowser
              subCategory="Beach Towels"
              category="Bath"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Bath/Beach Towels/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Floor Lamps"
          element={
            <ProductBrowser
              subCategory="Floor Lamps"
              category="Lamps & Lighting"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Floor Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Ceiling Lamps"
          element={
            <ProductBrowser
              subCategory="Ceiling Lamps"
              category="Lamps & Lighting"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Ceiling Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Table Lamps"
          element={
            <ProductBrowser
              subCategory="Table Lamps"
              category="Lamps & Lighting"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Lamps & Lighting/Table Lamps/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Decor/Plants & Planters"
          element={
            <ProductBrowser
              subCategory="Plants & Planters"
              category="Home Decor"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Decor/Plants & Planters/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Decor/Aromas & Candles"
          element={
            <ProductBrowser
              subCategory="Aromas & Candles"
              category="Home Decor"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Decor/Aromas & Candles/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/Lifestyle/Home Decor/Clocks"
          element={
            <ProductBrowser
              subCategory="Clocks"
              category="Home Decor"
              categoryGroup="Lifestyle"
            />
          }
        />
        <Route
          path="/Lifestyle/Home Decor/Clocks/:id"
          element={<ProductDetails />}
        />

        {/* Shop By Category Routes */}

        <Route
          path="/Men/TopWear"
          element={<ProductBrowser categoryGroup="Men" category="TopWear" />}
        />
        <Route path="/Men/TopWear/:id" element={<ProductDetails />} />

        <Route
          path="/Men/BottomWear"
          element={<ProductBrowser categoryGroup="Men" category="BottomWear" />}
        />
        <Route path="/Men/BottomWear/:id" element={<ProductDetails />} />

        <Route
          path="/Men/FootWear"
          element={<ProductBrowser categoryGroup="Men" category="FootWear" />}
        />
        <Route path="/Men/FootWear/:id" element={<ProductDetails />} />

        <Route
          path="/Women/Western Wear"
          element={
            <ProductBrowser categoryGroup="Women" category="Western Wear" />
          }
        />
        <Route path="/Women/Western Wear/:id" element={<ProductDetails />} />

        <Route
          path="/Women/ActiveWear"
          element={
            <ProductBrowser
              categoryGroup="Women"
              category="Sports & ActiveWear"
            />
          }
        />
        <Route path="/Women/ActiveWear/:id" element={<ProductDetails />} />

        {/* Kids Page Shop by category Routes */}

        <Route
          path="/Kids/T-Shirts"
          element={<ProductBrowser category="T-Shirts" categoryGroup="Kids" />}
        />
        <Route path="/Kids/T-Shirts/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Shorts"
          element={<ProductBrowser category="Shorts" categoryGroup="Kids" />}
        />
        <Route path="/Kids/Shorts/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Tops"
          element={<ProductBrowser category="Tops" categoryGroup="Kids" />}
        />
        <Route path="/Kids/Tops/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Flip Flops"
          element={
            <ProductBrowser category="Flip Flops" categoryGroup="Kids" />
          }
        />
        <Route path="/Kids/Flip Flops/:id" element={<ProductDetails />} />

        <Route
          path="/Kids/Bodysuits"
          element={<ProductBrowser category="Bodysuits" categoryGroup="Kids" />}
        />
        <Route path="/Kids/Bodysuits/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Beach Towels"
          element={
            <ProductBrowser category="Beach Towels" categoryGroup="Lifestyle" />
          }
        />
        <Route
          path="/Lifestyle/Beach Towels/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/Lifestyle/Table Lamps"
          element={
            <ProductBrowser category="Table Lamps" categoryGroup="Lifestyle" />
          }
        />
        <Route path="/Lifestyle/Table Lamps/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Bedsheets"
          element={
            <ProductBrowser category="Bedsheets" categoryGroup="Lifestyle" />
          }
        />
        <Route path="/Lifestyle/Bedsheets/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Bath Towels"
          element={
            <ProductBrowser category="Bath Towels" categoryGroup="Lifestyle" />
          }
        />
        <Route path="/Lifestyle/Bath Towels/:id" element={<ProductDetails />} />

        <Route
          path="/Lifestyle/Clocks"
          element={
            <ProductBrowser category="Clocks" categoryGroup="Lifestyle" />
          }
        />
        <Route path="/Lifestyle/Clocks/:id" element={<ProductDetails />} />

        {/* Product Details through Search */}
        <Route path="/Search/:id" element={<ProductDetails />} />

        <Route
          path="/End of Season Sale"
          element={
            <ProductBrowser
              categoryGroup="Men"
              EoSSheading="End of Season Sale"
            />
          }
        />
        <Route
          path="/End of Season Sale/Men"
          element={
            <ProductBrowser
              categoryGroup="Men"
              EoSSheading="End of Season Sale"
            />
          }
        />
        <Route
          path="/End of Season Sale/Men/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/End of Season Sale/Women"
          element={
            <ProductBrowser
              categoryGroup="Women"
              EoSSheading="End of Season Sale"
            />
          }
        />
        <Route
          path="/End of Season Sale/Women/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/End of Season Sale/Kids"
          element={
            <ProductBrowser
              categoryGroup="Kids"
              EoSSheading="End of Season Sale"
            />
          }
        />
        <Route
          path="/End of Season Sale/Kids/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/End of Season Sale/Lifestyle"
          element={
            <ProductBrowser
              categoryGroup="Lifestyle"
              EoSSheading="End of Season Sale"
            />
          }
        />
        <Route
          path="/End of Season Sale/Lifestyle/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
}

export default RoutesList;
