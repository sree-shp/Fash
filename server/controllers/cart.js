const Cart = require("../models/Cart")


// Controller function to fetch the cart from the database
async function GetCart(req, res) {
  // Store the userId from the request   
  const userId = req.user.id;
  try {
    // Fetch the cart for the given user Id
    const cart = await Cart.findOne({ userId });

    // Check if cart is available or not
    if (cart) {
        // If it is available, send the cart as json object
      return res.status(200).json({ cart });
    } else {
        // If it is not available, send null
      return res.status(200).json(null);
    }
  } catch (err) {
    // Log the error message to the console
    console.error(err.message);
    // Send the status as 400(Bad Request) along with the error message
    res.status(400).json({ msg: "Server error", error: err.message });
  }
};

// Controller function to add products to cart
async function AddToCart(req, res)  {
  // Store userId from the request
  const userId = req.user.id;
  // Store the product id, quantity, size
  const product = {
    id: req.body.productId,
    quantity: req.body.quantity,
    size: req.body.size,
    price: req.body.price,
    img: req.body.img,
    name: req.body.name,
    brand: req.body.brand,
  };

  // Store total  by multiplying price and quantity from request
  const total = req.body.price * req.body.quantity;
  try {
    // Find the cart for the userId
    const cart = await Cart.find({ userId });


    // Check if the cart is already created 
    if (cart.length != 0) {
        // If length of cart is not equal to zero, it means the cart is already created
        // Store the updated cart total by adding previous cart total and the price of product to be added to cart
      let cartTotal = cart[0].total + total;
    //   Update the cart. 
    // Find the cart for the given user id
    // Push the product into the products array of the cart
    // Set the new total of the cart  
    await Cart.updateOne(
        { userId },
        { $push: { product: product }, $set: { total: cartTotal } }
      );
    }else {
        // If length of cart is equal to zero, it means there is no existing cart for the user id
        // Therefore create a new cart with the product and the total and save it
        const cart = new Cart({ userId: userId, product: product, total: total });
        await cart.save();
    }
    // Send status as 200(All Ok) along with the message 
    res.status(200).json({ msg: "Added to cart" });
  } catch (err) {
    // Log the error message to the console
    console.error(err);
    // Send the status as 400(Bad Request) along with the error message
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
};

// Controller funciton to remove item from the cart
async function RemoveItem(req, res)  {
    // Store the user Id from the request
    const userId = req.user.id;
    // Store the cart item id from the request
    const cartItemId = req.body.id;
    try {
        // Find the cart for the given user id
        // Select the product that matches with the cart item id that has to be removed 
        const cart = await Cart.find({ userId }).select({
        product: { $elemMatch: { _id: cartItemId } },
        });
        // Store the price of the produc to be removed
        const productPrice = cart[0].product[0].price;
        // Update the cart of the given user id
        // Remove the product
        // Adjust the total of the cart
        await Cart.updateOne(
        { userId: userId },
        {
            $pull: { product: { _id: cartItemId } },
            $inc: { total: -productPrice },
        }
        );
        // Send the status as 200(All Ok) along with the message
        res.status(200).json({ msg: "Removed from cart" });
    } catch (err) {
        // Log the error message to the console
        console.error(err.message);
        // Send the status as 400(Bad Request) along with the error message
        res.status(400).json({ msg: "Server Error", error: err.message });
    }
};

module.exports = {GetCart, AddToCart, RemoveItem}
