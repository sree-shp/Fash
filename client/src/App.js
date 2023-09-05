import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";
import LifeStyle from "./components/LifeStyle/LifeStyle";
import ProductBrowser from "./components/ProductsBrowser/ProductsBrowser";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import {useCookies } from "react-cookie";
import axios from "axios";
import { SkeletonTheme } from "react-loading-skeleton";
import ProductCardSkeleton from "./components/Skeletons/ProductCardSkeleton";

function App() {
  const[cookies, setCookies, removeCookies] = useCookies();
  const[userName, setUserName] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    async function getUserName(){
      try{
        const res= await axios.get("https://fash-server.onrender.com/api/users/getUserName",{withCredentials: true});
        console.log(res.data)
        setUserName(res.data.userName);
      }catch(err){
        console.error(err.message);
      }
    }
    getUserName()
  }, [])

  return (
    <div className="App">
      <SkeletonTheme baseColor="#d0cccc" highlightColor="white">
      <Navbar userName={userName} setUserName={setUserName} removeCookies={removeCookies} selectedId={selectedId}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login userName={userName} setUserName={setUserName}/>} />
        <Route path="/Register" element={<Register userName={userName} setUserName={setUserName}/>} />
        <Route path="/Cart" element={<Cart selectedId={selectedId} setSelectedId={setSelectedId}/>} />
        <Route path="/Orders" element={<Orders />} />
        
        {/* Category Routes */}
        <Route path="/Top Wear" element={<ProductBrowser title="Top Wear"/>} />
        <Route path="/Western Wear" element={<ProductBrowser title="Western Wear"/>} />
        <Route path="/Active Wear" element={<ProductBrowser title="Active Wear"/>} />
        <Route path="/Boys Clothing" element={<ProductBrowser title="Boys Clothing"/>} />
        <Route path="/Sports Wear" element={<ProductBrowser title="Sports Wear"/>} />
        <Route path="/Bath" element={<ProductBrowser title="Bath"/>} />
        <Route path="/Foot Wear" element={<ProductBrowser title="Foot Wear"/>} />
        <Route path="/Girls Clothing" element={<ProductBrowser title="Girls Clothing"/>} />

      
        {/* Men Routes */}
        <Route path="/Men" element={<Men />} />
        <Route path="/Men/TopWear/T-Shirts" element={<ProductBrowser title="T-Shirts" subCategory="TopWear" group="Men"/>} />
        <Route path="/Men/TopWear/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/TopWear/Casual Shirts" element={<ProductBrowser title="Casual Shirts" subCategory="TopWear" group="Men"/>} />
        <Route path="/Men/TopWear/Casual Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/TopWear/Formal Shirts" element={<ProductBrowser title="Formal Shirts" subCategory="TopWear" group="Men" />} />
        <Route path="/Men/TopWear/Formal Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Jeans" element={<ProductBrowser title="Jeans" subCategory="BottomWear" group="Men" />} />
        <Route path="/Men/BottomWear/Jeans/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Casual Trousers" element={<ProductBrowser title="Casual Trousers" subCategory="BottomWear" group="Men" />} />
        <Route path="/Men/BottomWear/Casual Trousers/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Formal Trousers" element={<ProductBrowser title="Formal Trousers" subCategory="BottomWear" group="Men" />} />
        <Route path="/Men/BottomWear/Formal Trousers/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" subCategory="FootWear" group="Men" />} />
        <Route path="/Men/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Sports Shoes" element={<ProductBrowser title="Sports Shoes" subCategory="FootWear" group="Men" />} />
        <Route path="/Men/FootWear/Sports Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Formal Shoes" element={<ProductBrowser title="Formal Shoes" subCategory="FootWear" group="Men" />} />
        <Route path="/Men/FootWear/Formal Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Active T-Shirts" element={<ProductBrowser title="Active T-Shirts" subCategory="ActiveWear" group="Men" />} />
        <Route path="/Men/ActiveWear/Active T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Track Pants & Shorts" element={<ProductBrowser title="Track Pants & Shorts" subCategory="ActiveWear" group="Men" />} />
        <Route path="/Men/ActiveWear/Track Pants & Shorts/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Tracksuits" element={<ProductBrowser title="Tracksuits" subCategory="ActiveWear" group="Men" />} />
        <Route path="/Men/ActiveWear/Tracksuits/:id" element={<ProductDetails />} />
        
        {/* Women Routes */}
        <Route path="/Women/Indian & Fusion Wear/Kurtas & Suits" element={<ProductBrowser title="Kurtas & Suits" subCategory="Indian & Fusion wear" group="Women" />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtas & Suits/:id" element={<ProductDetails />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops" element={<ProductBrowser title="Kurtis, TUnics & Tops" subCategory="Indian & Fusion wear" group="Women" />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops/:id" element={<ProductDetails />} />
        <Route path="/Women/Indian & Fusion Wear/Sarees" element={<ProductBrowser title="Sarees" subCategory="Indian & Fusion wear" group="Women" />} />
        <Route path="/Women/Indian & Fusion Wear/Sarees/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/Dresses" element={<ProductBrowser title="Dresses" subCategory="Western Wear" group="Women" />} />
        <Route path="/Women/Western Wear/Dresses/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/Tops" element={<ProductBrowser title="Tops" subCategory="Western Wear" group="Women" />} />
        <Route path="/Women/Western Wear/Tops/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/T-Shirts" element={<ProductBrowser title="T-Shirts" subCategory="Western Wear" group="Women" />} />
        <Route path="/Women/Western Wear/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Flats" element={<ProductBrowser title="Flats" subCategory="FootWear" group="Women" />} />
        <Route path="/Women/FootWear/Flats/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" subCategory="FootWear" group="Women" />} />
        <Route path="/Women/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Heels" element={<ProductBrowser title="Heels" subCategory="FootWear" group="Women" />} />
        <Route path="/Women/FootWear/Heels/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Clothing" element={<ProductBrowser title="Clothing" subCategory="Sports & ActiveWear" group="Women" />} />
        <Route path="/Women/Sports & ActiveWear/Clothing/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Footwear" element={<ProductBrowser title="Footwear" subCategory="Sports & ActiveWear" group="Women" />} />
        <Route path="/Women/Sports & ActiveWear/Footwear/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Sports Accessories" element={<ProductBrowser title="Sports Accessories" subCategory="Sports & ActiveWear" group="Women" />} />
        <Route path="/Women/Sports & ActiveWear/Sports Accessories/:id" element={<ProductDetails />} />


        {/* Kids Routes */}
        <Route path="/Kids/Boys Clothing/T-Shirts" element={<ProductBrowser title="T-Shirts" subCategory="Boys Clothing" group="Kids" />} />
        <Route path="/Kids/Boys Clothing/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Boys Clothing/Shirts" element={<ProductBrowser title="Shirts" subCategory="Boys Clothing" group="Kids" />} />
        <Route path="/Kids/Boys Clothing/Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Boys Clothing/Shorts" element={<ProductBrowser title="Shorts" subCategory="Boys Clothing" group="Kids" />} />
        <Route path="/Kids/Boys Clothing/Shorts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/Dresses" element={<ProductBrowser title="Dresses" subCategory="Girls Clothing" group="Kids" />} />
        <Route path="/Kids/Girls Clothing/Dresses/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/Tops" element={<ProductBrowser title="Tops" subCategory="Girls Clothing" group="Kids" />} />
        <Route path="/Kids/Girls Clothing/Tops/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/T-Shirts" element={<ProductBrowser title="T-Shirts" subCategory="Girls Clothing" group="Kids" />} />
        <Route path="/Kids/Girls Clothing/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Flip Flops" element={<ProductBrowser title="Flip Flops" subCategory="FootWear" group="Kids" />} />
        <Route path="/Kids/FootWear/Flip Flops/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" subCategory="FootWear" group="Kids" />} />
        <Route path="/Kids/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Sports Shoes" element={<ProductBrowser title="Sports Shoes" subCategory="FootWear" group="Kids" />} />
        <Route path="/Kids/FootWear/Sports Shoes/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Bodysuits" element={<ProductBrowser title="Bodysuits" subCategory="Infants" group="Kids" />} />
        <Route path="/Kids/Infants/Bodysuits/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Rompers & Sleepsuits" element={<ProductBrowser title="Rompers & Sleepsuits" subCategory="Infants" group="Kids" />} />
        <Route path="/Kids/Infants/Rompers & Sleepsuits/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Clothing Sets" element={<ProductBrowser title="Clothing Sets" subCategory="Infants" group="Kids" />} />
        <Route path="/Kids/Infants/Clothing Sets/:id" element={<ProductDetails />} />

        {/* Lifestyle */}
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bed Runners" element={<ProductBrowser title="Bed Runners" subCategory="Bed Linen & Furnishing" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bed Runners/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bedsheets" element={<ProductBrowser title="Bedsheets" subCategory="Bed Linen & Furnishing" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bedsheets/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors" element={<ProductBrowser title="Mattress Protectors" subCategory="Bed Linen & Furnishing" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Bath Towels" element={<ProductBrowser title="Bath Towels" subCategory="Bath" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bath/Bath Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Hand & Face Towels" element={<ProductBrowser title="Hand & Face Towels" subCategory="Bath" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bath/Hand & Face Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Beach Towels" element={<ProductBrowser title="Beach Towels" subCategory="Bath" group="LifeStyle" />} />
        <Route path="/Lifestyle/Bath/Beach Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Floor Lamps" element={<ProductBrowser title="FLoor Lamps" subCategory="Lamps & Lighting" group="LifeStyle" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Floor Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Ceiling Lamps" element={<ProductBrowser title="Ceiling Lamps" subCategory="Lamps & Lighting" group="LifeStyle" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Ceiling Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Table Lamps" element={<ProductBrowser title="Table Lamps" subCategory="Lamps & Lighting" group="LifeStyle" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Table Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Plants & Planters" element={<ProductBrowser title="Plants & Planters" subCategory="Home Decor" group="LifeStyle" />} />
        <Route path="/Lifestyle/Home Decor/Plants & Planters/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles" element={<ProductBrowser title="Aromas & Candles" subCategory="Home Decor" group="LifeStyle" />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Clocks" element={<ProductBrowser title="Clocks" subCategory="Home Decor" group="LifeStyle" />} />
        <Route path="/Lifestyle/Home Decor/Clocks/:id" element={<ProductDetails />} />
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        <Route path="/Men/ActiveWear/Active T-Shirts" element={<ProductBrowser title="Active T-Shirts"/>} />
        <Route path="/Men/Casual Shoes" element={<ProductBrowser title="Casual Shoes"/>} />
        <Route path="/Men/Casual Trousers" element={<ProductBrowser title="Causal Trousers"/>} />
        <Route path="/Men/Formal Shoes" element={<ProductBrowser title="Formal Shoes"/>} />
        <Route path="/Men/Formal Trousers" element={<ProductBrowser title="FormalTrousers"/>} />
        <Route path="/Men/Jeans" element={<ProductBrowser title="Jeans"/>} />
        <Route path="/Men/Sports Shoes" element={<ProductBrowser title="Sport Shoes"/>} />
        <Route
          path="/Men/Track Pants and Shorts"
          element={<ProductBrowser title="Track Pants and Shorts"/>}
        />
        <Route path="/Men/Track Suits" element={<ProductBrowser title="Track Suits"/>} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/LifeStyle" element={<LifeStyle />} />
      </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
