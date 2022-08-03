import React, {useState} from 'react';
import {IProduct} from "../models";
import {products} from "../data/products";

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = !details ? 'bg-yellow-400' : "bg-blue-400"

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center bm-2'>
            <img src={product.image} className='w-1/6' alt="1"/>
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev=> !prev)}
            >
                {!details ? "Show details" : "Hide details"}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: '700'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    );
};

export default Product;