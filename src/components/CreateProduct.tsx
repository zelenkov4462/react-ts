import React, {useState} from 'react';
import {IProduct} from "../models";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";

const productData: IProduct = {
    title: "",
    price: 13.5,
    description: 'dfsjkfsdfbsdnfsdfmsdfb',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>)  => {
        setError('')
        setValue(e.target.value)
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Form does not be empty')
            setValue('')
            return
        }
        productData.title = value
        const response = await axios.post('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>
                Add
            </button>
        </form>
    );
};

export default CreateProduct;