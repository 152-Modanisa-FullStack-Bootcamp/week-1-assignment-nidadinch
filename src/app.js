import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    console.log(response);
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;
    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    // console.log(products);

    products
      .forEach((product) => console.log(product.name));

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products
      .filter((product) => product.name.includes('Şal'))
      .map((product => ({ name: product.name, image: product.image })));

    console.log(mappedProducts)


    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    products
      .forEach((product) => {
        const products = document.getElementById("products");

        const productimg = document.createElement("div");
        productimg.className = "product-image";
        const productinfo = document.createElement("div");
        productinfo.className = "product-info";
        const div = document.createElement("div");
        div.className = "product-card";

        const title = document.createElement("h1");
        const img = document.createElement("img");

        var text = document.createTextNode(product.name);
        img.src = product.image;

        title.appendChild(text);
        productinfo.appendChild(title);
        productimg.appendChild(img);
        div.appendChild(productimg);
        div.appendChild(productinfo);

        products.appendChild(div);
      });



  });

