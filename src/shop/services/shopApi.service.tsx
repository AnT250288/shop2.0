
export const getProducts = () => {
    return fetch("https://fakestoreapi.com/products", {
        method: "GET"
    })
}

export const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    })
}
