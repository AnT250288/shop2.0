import {useDispatch, useSelector} from "react-redux";
import {AddProduct} from "./addProduct";
import s from './admin.module.css'
import b from './button.module.css'
import {Preloader} from "../../components/preloader/preloader";
import React, {useState} from "react";
import {EditableSpan} from "./changeTitle";
import {changeTitleAC, createNewProduct, getAllProducts, removeProductAC} from "../actions/shop-actions";
import {AppStateType} from "../../store/store";
import {ShopStateType} from "./admin_reducers";
import {CardStateType} from "../user/client/shoppingCart/cartReducers";


export function Admin() {
    const [visible, setVisible] = useState<boolean>(true)

    const products = useSelector<AppStateType, ShopStateType>(state => state.adminStore)
    const productForCard = useSelector<AppStateType, CardStateType>(state => state.cartStore)

    const dispatch: any = useDispatch()

    const addNewProductHandler = (state: ShopStateType) => dispatch(createNewProduct(state))

    const removeProduct = (id: string) => {
        dispatch(removeProductAC(id))
    }

    const changeTitle = (id: string, title: string) => {
        dispatch(changeTitleAC(id, title))
    }

    const getProductsHandler = () => {
        dispatch(getAllProducts())
        setVisible(false)
    }

    const sortProductsByRating = () => {
        productForCard.newCard.sort((a, b) => a.counter - b.counter ? 1 : -1)
    }

    return (
        <>

            {visible
                ? <button onClick={getProductsHandler}>Get products</button>
                : <AddProduct addProduct={addNewProductHandler}/>}
            {products.isLoading
                ? <Preloader/>
                : null
            }
            <button onClick={() => sortProductsByRating()}>Sort by rating</button>
            <div className={s.schemaProduct}>
                {products.newShop.map(pr => (
                    <div key={pr.id} className={s.prod}>
                        <EditableSpan
                            id={pr.id}
                            title={pr.title}
                            changeTitle={changeTitle}/>
                        <img width={'200px'} alt={'logo'} src={pr.image}/>
                        <EditableSpan
                            id={pr.id}
                            title={pr.description}
                            changeTitle={changeTitle}/>
                        <ul>{pr.price}</ul>
                        <button className={b.btn} onClick={() => removeProduct(pr.id)}>Delete product</button>
                    </div>
                ))}
            </div>
        </>
    )
}