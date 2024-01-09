
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import {Link} from "react-router-dom";

function ProductContainer(props) {

  function handleSortChange(event){
    props.setSort(event.target.value)
    
  }

  //Function to create Product cards
  function createProductCard(product, index) {
    
    return (
      <>
        {/* Based on productGroup element, if present, include it in the Link address, if not, dont include   */}
        {props.productGroup ? (
          <li key={index}>
            <Link
              to={
                "/" +
                props.productGroup +
                "/" +
                props.productSubCategory +
                "/" +
                props.ProductContainerName +
                "/" +
                product._id
              }>
              <ProductCard
                key={index}
                productImg={product.images[0]}
                productBrand={product.brand}
                productPrice={product.price}
                productDiscountedPrice={product.discountedPrice}
                productDiscount={product.discount}
              />
            </Link>
          </li>
        ) : (
          <li key={index}>
            <Link to={"/" + props.ProductContainerName + "/" + product._id}>
              <ProductCard
                key={index}
                productImg={product.images[0]}
                productBrand={product.brand}
                productPrice={product.price}
                productDiscountedPrice={product.discountedPrice}
                productDiscount={product.discount}
              />
            </Link>
          </li>
        )}
      </>
    );
  }


  return (
    <div className="product-container">
      <div className="product-sort-wrapper">
        <h2 className="product-container-heading">
          {/* to capitalize the text */}
          {props.ProductContainerName.charAt(0).toUpperCase() +
            props.ProductContainerName.slice(1)}
        </h2>
        <div className="sort-container">
          Sort:   
          <select onChange={handleSortChange}>
            <option value={1}>Price: Lowest to Highest</option>
            <option value={-1}> Price: Highest to Lowest</option>
          </select>
        </div>
      </div>
      {/* Map the array objects received as props from the ProductBrowser  */}
      <div className="product-card-wrapper">
        {props.list.map(createProductCard)}
      </div>
    </div>
  );
}

export default ProductContainer;
