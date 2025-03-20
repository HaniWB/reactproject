
import './Preparation.css'
import Prepare from '../prepare/Prepare';
import Underthegrid from '../underthegrid/Underthegrid'
import Card from "../card/Card"
import AllCards from '../allcards/AllCards';
const Preparation = ()=>{
    return(
        <>
   <div className="div-preparation-header">
    <div className="Rescnt-search">
        <h1>Recent Searches</h1>
        <div className="box-flex">
            <div className= "preparation-box">
                <div className="box-paraghraph">
                    <p>SIN</p>
                    <img src="/assets/Capture.PNG" />
                    <p>LAX</p>
                </div>
                <div className="depart">
                    <p><b>Depart on</b>: 7 Sep 2021</p>
                </div>
            </div>
            <div className= "preparation-box">
                <div className="box-paraghraph">
                    <p>MY</p>
                    <img src="/assets/Capture.PNG" />
                    <p>DUB</p>
                </div>
                <div className="depart">
                    <p><b>Depart on</b>: 9 Sep 2021</p>
                </div>
            </div>
        </div>
    </div>
    <div className="prepare">
        <p>Prepare for your trip</p>
        <div className="prepare-grid">
            <Prepare 
            photo = "/assets/photo1.PNG" 
            />
            <Prepare 
             photo = "/assets/photo2.PNG" 
            />
            <Prepare 
             photo = "/assets/photo3.PNG" 
            />
            <Prepare 
             photo = "/assets/photo4.PNG" 
            />
            <Prepare 
             photo = "/assets/photo5.PNG" 
            />
             <Prepare 
            photo = "/assets/photo6.PNG" 
            />
            </div>
        </div>
        <p>PLAN YOUR NEXT TRIP</p>  
        <Underthegrid
        par = "Most Popular Destinations"
        linkText="View all destinations"
        showImage={true} 
        img="assets/img10.png"
        /> 
        <Underthegrid
        par = "Recommended Holidays"
        linkText="View all holidays"
        img="assets/img13.PNG"
        showImage={true} 
        /> 
        <Underthegrid
        par = "Popular Stays"
        showImage={false} 
        linkText="View all stays"
        />  
        <AllCards/> 
   </div> 
   </>
   );
}
export default Preparation;