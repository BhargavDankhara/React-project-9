import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Count, Decrement, Delete, DeleteAll, Increment } from './reduxThunk/Action';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const total = useSelector((state) => state.total)
    const [noRecords, setNoRecords] = useState(false);

    const Discount = 0.15
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart.length === 0) {
            setNoRecords(true);
        } else {
            setNoRecords(false);
        }
        dispatch(Count())
    }, [cart])


    const handleDelete = (id) => {
        dispatch(Delete(id))
    }

    const handleIncrement = (id) => {
        dispatch(Increment(id))
    }
    const handleDecrement = (id) => {
        dispatch(Decrement(id))
    }
    const handleDeleteAll = () => {
        dispatch(DeleteAll())
    }
    return (
        <div className='container px-3'>
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <div className=" p-2">
                            <h5 className="text-center border border-3 p-4 border-success fs-2 bg-light">Shopping Cart</h5>
                        </div>
                        <div className="p-3 ">
                            <table class="table">
                                <thead>
                                    <tr className=''>
                                        <th scope="col">PRODUCT</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {noRecords ? (
                                        <>
                                            <td className='text-center fw-bold  pe-0 py-5' colSpan={4}>Your Cart is Empty</td>
                                        </>
                                    ) : (
                                        cart && cart.map((item, id) => {
                                            console.log(item.id)
                                            return (
                                                <tr key={id}>
                                                    <td >
                                                        <img src={item.image} alt="" className='img-fluid' style={{ height: '70px', width: "70px", borderRadius: "3px" }} />
                                                        <span className='ms-3'>{item.name}</span></td>
                                                    <td >
                                                        <button className='btn rounded-1 ' style={{ border: "1px solid #bfc8de" }} onClick={() => handleIncrement(id)}>+</button>
                                                        <span className='btn rounded-1 ' style={{ border: "1px solid #bfc8de" }}>{item.qty}</span>
                                                        <button className='btn  rounded-1 ' style={{ border: "1px solid #bfc8de" }} onClick={() => handleDecrement(id)}>-</button></td>
                                                    <td>Rs {item.price}</td>
                                                    <td><button className='btn btn-danger' onClick={() => handleDelete(id)}>Delete</button></td>
                                                </tr>
                                            )
                                        })
                                    )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex my-3 justify-content-between">
                <div>
                    <Link className='btn btn-success px-4 py-6 fs-6 me-2' to={'/'}>Product</Link>
                    <Link className='btn btn-danger  px-4 py-6 fs-6' onClick={handleDeleteAll} >Delete All</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
