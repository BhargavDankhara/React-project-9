import Img1 from '.././../Assets/Image/picture1.jpg'
import Img2 from '.././../Assets/Image/picture2.jpg'
import Img3 from '.././../Assets/Image/picture3.jpg'
import Img4 from '.././../Assets/Image/picture4.jpg'
import Img5 from '.././../Assets/Image/picture5.jpg'
import Img6 from '.././../Assets/Image/picture6.jpg'
import Img7 from '.././../Assets/Image/picture7.jpg'

const initialState = {
    product: [
        { id: 0, name: "APPLE", image: Img1, price:80, qty: 1 },
        { id: 1, name: "GREEN APPLE", image: Img2, price:75, qty: 1 },
        { id: 2, name: "ORANGE", image: Img3, price:90, qty: 1 },
        { id: 3, name: "MANGO", image: Img4, price:230, qty: 1 },
        { id: 4, name: "PINEAPPLE", image: Img5, price:180, qty: 1 },
        { id: 5, name: "DRAGONFRUIT", image: Img6, price:5000, qty: 1 },
        { id: 6, name: "WATERMALON", image: Img7, price:130, qty: 1 },
    ],
    cart: [],
    count: 0,
    total: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === "AddToCart") {
        const itemExist = state.cart.some((item) => item.id === state.product[action.payload].id);
        if (!itemExist) {
            return {
                ...state, cart: [...state.cart, { ...state.product[action.payload] }],
                total: state.total + parseFloat(state.product[action.payload].price),
            };
        } else {
            return {
                ...state, cart: state.cart.map((item) => item.id === state.product[action.payload].id ? { ...item, qty: item.qty + 1 } : item),
                total: state.total + parseFloat(state.product[action.payload].price),
            };
        }
       
    }
    if (action.type === 'DeleteItem') {
        const deletedItem = state.cart[action.payload];
        return {
            ...state,
            cart: state.cart.filter((item, id) => id !== action.payload),
            total: state.total - parseFloat(deletedItem.price * deletedItem.qty),
        };
    }

    if (action.type === 'Count') {
        return { ...state, count: state.cart.length };
    }
    if (action.type === 'Increment') {
        var itemIndex = action.payload
        return {
            ...state, cart: state.cart.map((item, id) => id === itemIndex ? { ...item, qty: item.qty + 1 } : item),
            total: state.total + parseFloat(state.cart[itemIndex].price),
        };
    }
    if (action.type === 'Decrement') {
        var itemIndex = action.payload
        const deletedItem = state.cart[itemIndex];
        if (state.cart[itemIndex].qty > 1) {
            return {
                ...state, cart: state.cart.map((item, id) => id === itemIndex ? { ...item, qty: item.qty - 1 } : item),
                total: state.total - parseFloat(state.cart[itemIndex].price),
            };

        }
        return {
            ...state,
            cart: state.cart.filter((item, id) => id !== action.payload),
            total: state.total - parseFloat(deletedItem.price * deletedItem.qty),
        };
    }
    if (action.type === 'DeleteAll') {
        console.log({...state, cart: []})
        return { ...state, cart: [] , count: 0, total: 0};

    }
    return state;
}

export default reducer