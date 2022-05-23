import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "../../admin/admin.module.css";
import {getAllProducts, searchProductAC} from "../../actions/shop-actions";
import {useState} from "react";
import {Preloader} from "../../../components/preloader/preloader";
import {AppStateType} from "../../../store/store";
import {ItemShopType, ShopStateType} from "../../admin/admin_reducers";
import {addProductToCart} from "./shoppingCart/cartActions";



export const Client = React.memo(() => {
    const [visible, setVisible] = useState(true)
    const products = useSelector<AppStateType, ShopStateType>(state => state.adminStore)
    const dispatch: any = useDispatch()

    const searchProduct = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchProductAC(event))
    }

    const getProductsHandler = () => {
        dispatch(getAllProducts())
        setVisible(false)
    }

    const [arrItems, setArrItems] = useState<Array<ItemShopType>>([]);

    const append = (products: ItemShopType, counter: number = 1) => {
        const itemIndex = arrItems.findIndex(value => value.id === products.id);
        if (itemIndex < 0) {
            const newItem = {
                ...products,
                counter: counter
            };
            setArrItems([...arrItems, newItem]);
        } else {
            const newItem = {
                ...arrItems[itemIndex],
                counter: arrItems[itemIndex].counter + counter
            };
            const newCart = arrItems.slice();
            newCart.splice(itemIndex, 1, newItem);
            setArrItems(newCart);
        }
        console.log(arrItems)
    };

    const addItem = (arrItems: any, counter: number = 1) => {
        dispatch(addProductToCart(arrItems, counter))
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
                    <button onClick={(e) => addItem(pr, pr.counter)}>Buy</button>
                </div>
            ))}
        </>
    )
})