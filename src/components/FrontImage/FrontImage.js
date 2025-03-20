import './FrontImage.css'
const FrontImage=()=>{
    return(
        <>
        <div className="FrontImage">
        <img src="/assets/search-container@3x.65abc0bda5bf8437be46.png" alt="Banner" />
            <div className="ImageText">
                <h1>Let’s explore & travel the world</h1>
                <p>Find the best destinations and the most popular stays!</p>
            </div>
            <div className="ImageBox">
                <div className="ImageBox_h">
                    <p>Search flights</p>
                </div>
                <div className="ImageBox_Input">
                    <input placeholder="Depature"/>
                    <input placeholder="Arrival"/>
                    <input type="date" name="birthday"/>
                    <button>SEARCH flights</button>
                </div>
           
            </div>
        </div>
        </>
    );
}
export default FrontImage;