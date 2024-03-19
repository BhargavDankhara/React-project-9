const AddToCart = (id) => ({
    type: 'AddToCart',
    payload: id,
})

export default AddToCart;


export const Delete = (id) =>({
    type: 'DeleteItem',
    payload: id,
})

export const Count = () =>({
    type : 'Count'
})
export const Increment = (id) =>({
    type : 'Increment',
    payload: id,
})
export const Decrement = (id) =>({
    type : 'Decrement',
    payload: id,
})

export const DeleteAll = (id) => ({
    type:'DeleteAll',  
})

