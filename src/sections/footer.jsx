
function Footer(){
    return(
        <>
        
            <div className="footer">
                <div className="logo">
                    <h1>BLOGR</h1>
                </div>
                
                    <div className="products">
                        <h3>Product</h3>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">MarketPlace</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Intergratons</a></li>
                    </div>
                    <div className="company">
                        <h3>Company</h3>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </div>

                    <div className="connect">
                        <h3>Connect</h3>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </div>
            </div>
        </>
    )
}

export default Footer;