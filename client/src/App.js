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
        <Route path="/Skeleton" element={<ProductCardSkeleton />} />

        {/* Men Routes */}
        <Route path="/Men" element={<Men />} />
        <Route path="/Men/TopWear/T-Shirts" element={<ProductBrowser title="T-Shirts"/>} />
        <Route path="/Men/TopWear/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/TopWear/Casual Shirts" element={<ProductBrowser title="Casual Shirts"/>} />
        <Route path="/Men/TopWear/Casual Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/TopWear/Formal Shirts" element={<ProductBrowser title="Formal Shirts" />} />
        <Route path="/Men/TopWear/Formal Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Jeans" element={<ProductBrowser title="Jeans" />} />
        <Route path="/Men/BottomWear/Jeans/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Casual Trousers" element={<ProductBrowser title="Casual Trousers" />} />
        <Route path="/Men/BottomWear/Casual Trousers/:id" element={<ProductDetails />} />
        <Route path="/Men/BottomWear/Formal Trousers" element={<ProductBrowser title="Formal Trousers" />} />
        <Route path="/Men/BottomWear/Formal Trousers/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" />} />
        <Route path="/Men/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Sports Shoes" element={<ProductBrowser title="Sports Shoes" />} />
        <Route path="/Men/FootWear/Sports Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/FootWear/Formal Shoes" element={<ProductBrowser title="Formal Shoes" />} />
        <Route path="/Men/FootWear/Formal Shoes/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Active T-Shirts" element={<ProductBrowser title="Active T-Shirts" />} />
        <Route path="/Men/ActiveWear/Active T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Track Pants & Shorts" element={<ProductBrowser title="Track Pants & Shorts" />} />
        <Route path="/Men/ActiveWear/Track Pants & Shorts/:id" element={<ProductDetails />} />
        <Route path="/Men/ActiveWear/Tracksuits" element={<ProductBrowser title="Tracksuits" />} />
        <Route path="/Men/ActiveWear/Tracksuits/:id" element={<ProductDetails />} />
        
        {/* Women Routes */}
        <Route path="/Women/Indian & Fusion Wear/Kurtas & Suits" element={<ProductBrowser title="Kurtas & Suits" />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtas & Suits/:id" element={<ProductDetails />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops" element={<ProductBrowser title="Kurtis, TUnics & Tops" />} />
        <Route path="/Women/Indian & Fusion Wear/Kurtis, TUnics & Tops/:id" element={<ProductDetails />} />
        <Route path="/Women/Indian & Fusion Wear/Sarees" element={<ProductBrowser title="Sarees" />} />
        <Route path="/Women/Indian & Fusion Wear/Sarees/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/Dresses" element={<ProductBrowser title="Dresses" />} />
        <Route path="/Women/Western Wear/Dresses/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/Tops" element={<ProductBrowser title="Tops" />} />
        <Route path="/Women/Western Wear/Tops/:id" element={<ProductDetails />} />
        <Route path="/Women/Western Wear/T-Shirts" element={<ProductBrowser title="T-Shirts" />} />
        <Route path="/Women/Western Wear/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Flats" element={<ProductBrowser title="Flats" />} />
        <Route path="/Women/FootWear/Flats/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" />} />
        <Route path="/Women/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Women/FootWear/Heels" element={<ProductBrowser title="Heels" />} />
        <Route path="/Women/FootWear/Heels/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Clothing" element={<ProductBrowser title="Clothing" />} />
        <Route path="/Women/Sports & ActiveWear/Clothing/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Footwear" element={<ProductBrowser title="Footwear" />} />
        <Route path="/Women/Sports & ActiveWear/Footwear/:id" element={<ProductDetails />} />
        <Route path="/Women/Sports & ActiveWear/Sports Accessories" element={<ProductBrowser title="Sports Accessories" />} />
        <Route path="/Women/Sports & ActiveWear/Sports Accessories/:id" element={<ProductDetails />} />


        {/* Kids Routes */}
        <Route path="/Kids/Boys Clothing/T-Shirts" element={<ProductBrowser title="T-Shirts" />} />
        <Route path="/Kids/Boys Clothing/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Boys Clothing/Shirts" element={<ProductBrowser title="Shirts" />} />
        <Route path="/Kids/Boys Clothing/Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Boys Clothing/Shorts" element={<ProductBrowser title="Shorts" />} />
        <Route path="/Kids/Boys Clothing/Shorts/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/Dresses" element={<ProductBrowser title="Dresses" />} />
        <Route path="/Kids/Girls Clothing/Dresses/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/Tops" element={<ProductBrowser title="Tops" />} />
        <Route path="/Kids/Girls Clothing/Tops/:id" element={<ProductDetails />} />
        <Route path="/Kids/Girls Clothing/T-Shirts" element={<ProductBrowser title="T-Shirts" />} />
        <Route path="/Kids/Girls Clothing/T-Shirts/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Flip Flops" element={<ProductBrowser title="Flip Flops" />} />
        <Route path="/Kids/FootWear/Flip Flops/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Casual Shoes" element={<ProductBrowser title="Casual Shoes" />} />
        <Route path="/Kids/FootWear/Casual Shoes/:id" element={<ProductDetails />} />
        <Route path="/Kids/FootWear/Sports Shoes" element={<ProductBrowser title="Sports Shoes" />} />
        <Route path="/Kids/FootWear/Sports Shoes/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Bodysuits" element={<ProductBrowser title="Bodysuits" />} />
        <Route path="/Kids/Infants/Bodysuits/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Rompers & Sleepsuits" element={<ProductBrowser title="Rompers & Sleepsuits" />} />
        <Route path="/Kids/Infants/Rompers & Sleepsuits/:id" element={<ProductDetails />} />
        <Route path="/Kids/Infants/Clothing Sets" element={<ProductBrowser title="Clothing Sets" />} />
        <Route path="/Kids/Infants/Clothing Sets/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bed Runners" element={<ProductBrowser title="Bed Runners" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bed Runners/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bedsheets" element={<ProductBrowser title="Bedsheets" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Bedsheets/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors" element={<ProductBrowser title="Mattress Protectors" />} />
        <Route path="/Lifestyle/Bed Linen & Furnishing/Mattress Protectors/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Bath Towels" element={<ProductBrowser title="Bath Towels" />} />
        <Route path="/Lifestyle/Bath/Bath Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Hand & Face Towels" element={<ProductBrowser title="Hand & Face Towels" />} />
        <Route path="/Lifestyle/Bath/Hand & Face Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Bath/Beach Towels" element={<ProductBrowser title="Beach Towels" />} />
        <Route path="/Lifestyle/Bath/Beach Towels/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Floor Lamps" element={<ProductBrowser title="FLoor Lamps" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Floor Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Ceiling Lamps" element={<ProductBrowser title="Ceiling Lamps" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Ceiling Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Lamps & Lighting/Table Lamps" element={<ProductBrowser title="Table Lamps" />} />
        <Route path="/Lifestyle/Lamps & Lighting/Table Lamps/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Plants & Planters" element={<ProductBrowser title="Plants & Planters" />} />
        <Route path="/Lifestyle/Home Decor/Plants & Planters/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles" element={<ProductBrowser title="Aromas & Candles" />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles" element={<ProductBrowser title="Aromas & Candles" />} />
        <Route path="/Lifestyle/Home Decor/Aromas & Candles/:id" element={<ProductDetails />} />
        <Route path="/Lifestyle/Home Decor/Clocks" element={<ProductBrowser title="Clocks" />} />
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
