import React from 'react';
import './Cart.css';

export const Cart = () => {
    return (
        <>
            <div className='container-fluid outer-box'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                <h1 className='text-muted'>List of your saved products.</h1>
                                <h3 className='text-info mt-5'>❕ The List is Empty. Please read the Summary for more details.</h3>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2'>
                                <div className='cart-left'>
                                    <div className='text-center'>Summary</div>
                                    <ul className='mt-3'>
                                        <li>Go to the buyer's section.</li>
                                        <li>If you want to contact seller right now, then click on contact button.</li>
                                        <li>But if you want to save product for later,</li>
                                        <li>Click on the 'Add to cart' button of desired product.</li>
                                        <li>The product will be saved here, in the left section.</li>
                                        <li>Save as many products you want to buy later.</li>
                                        <li>After saving here you can later contact to the seller.</li>
                                        <li>And buy Wheat/Rice at farmer's price.</li>
                                        <li>But keep in mind, the products doesn't stays here forever.</li>
                                        <li>So try to come back as soon as possible.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;