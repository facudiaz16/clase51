import React from "react"
import { useParams, Link } from "react-router-dom";
const productList = [
    {
        id: 1,
        name: 'Televisor',
        price: 123,
        description: 'Televisor - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto, repellat voluptatem doloribus ullam nisi fugiat dolorum neque ipsam nostrum, earum expedita officiis voluptatum! Recusandae iste repudiandae animi fugit officiis.'
    },
    {
        id: 2,
        name: 'Computadora',
        price: 432,
        description: 'Computadora - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto, repellat voluptatem doloribus ullam nisi fugiat dolorum neque ipsam nostrum, earum expedita officiis voluptatum! Recusandae iste repudiandae animi fugit officiis.'
    },
    {
        id: 3,
        name: 'Celular',
        price: 765,
        description: 'Celular - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto, repellat voluptatem doloribus ullam nisi fugiat dolorum neque ipsam nostrum, earum expedita officiis voluptatum! Recusandae iste repudiandae animi fugit officiis.'
    }
];

function Products(){
    let {id} = useParams()
    let product = productList.find(oneProduct => oneProduct.id === parseInt(id))
    if(!product){
        return <div>Producto No Encontrado</div>
    }
    return (
        <div>
            <h2>Soy el componente Products!!</h2>
            <Link to='/products/1'>Producto 1</Link> <br />
            <Link to='/products/2'>Producto 2</Link> <br />
            <Link to='/products/3'>Producto 3</Link> <br />


            <p><b>ID:</b> {product.id} </p>
            <p><b>Nombre:</b>{product.name}</p>
            <p><b>Precio:</b>{product.price}</p>
            <p><b>Descripción:</b>{product.description}</p>
        </div>
    )
}

export default Products