import web from './images/contact.svg'

function Contact() {
    return (
        <section id='header' className='left-section d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                            <div className='d-flex contact-blocks'>
            <img className='contactThumbnail' src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png'/>
            <h5 className='pl-5 pt-2 text-center text-success'>nishadneelam997@gmail.com</h5>
        </div>
        <div className='d-flex contact-blocks'>
            <img className='contactThumbnail' src='https://w7.pngwing.com/pngs/792/947/png-transparent-instagram-logo-social-media-instagram-login-facebook-advertising-instagram-text-logo-magenta-thumbnail.png'/>
            <h5 className='pl-5 pt-2 text-center text-success'>Neelam__Kashyap_</h5>
        </div>
        <div className='d-flex contact-blocks'>
            <img className='contactThumbnail' src='https://e7.pngegg.com/pngimages/752/454/png-clipart-mobile-phones-telephone-computer-icons-contact-icon-angle-telephone-call-thumbnail.png'/>
            <h5 className='pl-5 pt-2 text-center text-success'>+918684021907</h5>
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

export default Contact;
