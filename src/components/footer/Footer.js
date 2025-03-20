import './Footer.css'

const Footer =()=>{
    return(
        <>
        <div className = " footerpic">
            <img src="/assets/IMG6.png" alt="Footer Image"  style={{ display: "block", margin: "0 auto", width: "100%" }} />
            <div className="footerinside">
                <p>subscribe to our newsletter</p>
                <h2>Get weekly updates</h2>
                <div className="footerbox">
                    <p style={{ fontSize:"1.1rem" }} >Fill in your details to join the party!</p>
                    <div className="inputfooter">
                        <input type="text" placeholder="your name" />
                        <input type="text" placeholder="Email address" />
                    </div>
                    <button>submit </button>
                </div>
            </div>

        </div>
        </>
    );
}
export default Footer;