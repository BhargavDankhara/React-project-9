import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart, { Count} from './reduxThunk/Action'
import { Link } from 'react-router-dom'

const Product = () => {

    const product = useSelector((state) => state.product)
    const count = useSelector((state) => state.count)
    // console.log(product)

    const dispatch = useDispatch();

    const handleAdd = (id) => {
        dispatch(AddToCart(id))
        dispatch(Count())
    }
    return (
        <div className=' container px-3'>
            <div className="d-flex my-3">
                <Link className='btn btn-secondary position-relative  px-4 py-6 fs-6' to={'/cart'}>
                    Cart
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {count}
                    </span>
                </Link>
            </div>
            <div className="d-flex g-2 flex-wrap  ">
                {
                    product && product.map((item, id) => {
                        return (
                            <div key={id} className="col-3" >
                                <div className="me-3 ">
                                    <img src={item.image} alt="" className='img-fluid w-100' style={{ height: '300px', borderRadius: "3px" }} />
                                    <div className="des d-flex mt-3 justify-content-between ">
                                        <div className=''>
                                            <h6 className=''>{item.name}</h6>
                                            <span>Rs {item.price}</span>
                                        </div>
                                    </div>
                                        <button className='btn btn-success w-100' onClick={() => handleAdd(id)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product
