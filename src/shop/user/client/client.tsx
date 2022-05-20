import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "../../admin/admin.module.css";
import {getAllProducts, searchProductAC} from "../../actions/shop-actions";
import {useState} from "react";
import {Preloader} from "../../../components/preloader/preloader";
import {AppStateType} from "../../../store/store";
import {ShopStateType} from "../../admin/admin_reducers";
import {CardStateType} from "./shoppingCart/cartReducers";
import {addProductToCart} from "./shoppingCart/cartActions";


export const Client = React.memo(() => {
    const [visible, setVisible] = useState(true)
    const products = useSelector<AppStateType, ShopStateType>(state => state.adminStore)
   /* const prod = useSelector<AppStateType, CardStateType>(state => state.cartStore)*/
    const dispatch: any = useDispatch()

    const searchProduct = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchProductAC(event))
    }

    const getProductsHandler = () => {
        dispatch(getAllProducts())
        setVisible(false)
    }

    const addProduct = (state: CardStateType) => {
        dispatch(addProductToCart(state))
    }

    return (
        <>

            <div>

            </div>
            {visible
                ? <button onClick={getProductsHandler}>Get products</button>
                : <input className={s.span} placeholder={'Search'} type={'text'} onChange={searchProduct}/>}
            {products.isLoading
                ? <Preloader/>
                : null}
            {products.newShop.map(pr => (
                <div key={pr.id} className={s.prod}>
                    <span> {pr.title} </span>
                    <img width={'200px'} alt={'logo'} src={pr.image}/>
                    <ul>{pr.description}</ul>
                    <ul>{pr.price}</ul>
                    {/*<button onClick={addProduct}>Buy</button>*/}
                </div>
            ))}
        </>
    )
})