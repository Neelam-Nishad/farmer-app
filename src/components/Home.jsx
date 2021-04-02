
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css';
import web from './images/AfricanFarmer.svg'

function Home() {
    return (
        <section id='header' className='left-section d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                            <h1>
                            Sell and Buy Grains with<strong className='text-info'> Broker-Down</strong>
                            </h1>
                            <h2 className='my-3 text-muted'>
                            we are here to remove the middle layers.
                            </h2>
                            <div className='mt-3'>
                                <NavLink to='/services'><button className='btn btn-success btn-get-started '> Get Started</button></NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2'>
                            <img src={web} className='img-fluid animated' alt='image'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
