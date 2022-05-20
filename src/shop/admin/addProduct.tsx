import React, {ChangeEvent} from "react";
import {useState} from "react";
import {v1} from "uuid";
import p from './admin.module.css'


export const AddProduct = (props: any) => {
    const [title, setTitle] = useState<string>('')
    const [desc, setDisc] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    const addTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value
        setTitle(newTitle)
    }

    function addDescription(e: ChangeEvent<HTMLInputElement>) {
        const newDesc = e.target.value
        setDisc(newDesc)
    }

    function addPhoto(e: ChangeEvent<HTMLInputElement>) {
        const newPhoto = e.target.value
        setPhoto(newPhoto)
    }

    const addPrice = (e: ChangeEvent<HTMLInputElement>) => {
        const newPrice = e.target.value
        setPrice(newPrice)
    }

    const handleClickEvent = () => {
        const state = {id: v1(), title, urlToImage: photo, description: desc, price}
        props.addProduct(state)
    }

    return (
        <div className={p.span}>
            <input placeholder={'title'} onChange={addTitle}/>
            <input placeholder={'photo'} type={'text'} onChange={addPhoto}/>
            <input placeholder={'description'} onChange={addDescription}/>
            <input placeholder={'price'} onChange={addPrice}/>
            <button onClick={handleClickEvent}>Add new</button>
        </div>
    )
}