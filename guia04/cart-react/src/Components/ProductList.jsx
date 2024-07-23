import React, { useState } from "react";
import {data} from "../app/data";
export const ProductList = ({
allProducts,
setAllProducts,
countProducts,
setCountProducts,
total,
setTotal,
}) => {
const onAddProduct = product => {
if (allProducts.find(item => item.id === product.id)) {
const products = allProducts.map(item =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
);
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
return setAllProducts([...products]);
}
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
setAllProducts([...allProducts, product]);
};

const resumen =(id)=> {
if(id==1)
{
    alert("Cien años de soledad es");
}
else if(id==2)
{
    alert("El señor de los anillos es:");
}
else if(id==3)
    {
        alert("El señor de los anillos es:");
    }
else if(id==4)
     {
         alert("El señor de los anillos es:");
     }
}
return (
<div className='container-items'>
{data.map(product => (
<div className='item' key={product.id}>
<figure>
<img src={product.urlImage} onClick={()=>resumen(product.id)} alt={product.title} />
</figure>
<div className='info-product'>
<h2>{product.nameProduct}</h2>
<p className='price'>${product.price}</p>
<button onClick={() => onAddProduct(product)}>
Añadir al carrito
</button>
</div>
</div>
))}
</div>
);
};