import Card from '../card/Card'
import './AllCards.css'
const AllCards = ()=>{
    return(
        <>
        <div className="gridCards" >
                <Card 
                        img="assets/IMG1.png"
                        p1="Entire bungalow"
                        h2="Matterhorn Suites"
                        b="4.9"
                        pay = "$575/night"
                        span = "60 reviews"
                />
                <Card
                        img="assets/IMG3.png"
                        p1="2-Story beachfront suite"
                        h2="Discovery Shores"
                        b="4.8"
                         pay = "$360/night"
                        span = "116 reviews"
                />
                <Card
                        img="assets/IMG2.png"
                        p1="Single deluxe hut"
                        h2="Arctic Hut"
                        b="4.7"
                        pay = "$420/night"
                        span = "78 reviews"
                />
                <Card
                        img="assets/IMG4.png"
                        p1="Deluxe King Room"
                        h2="Lake Louise Inn"
                        pay = "$244/night"
                        b="4.6"
                        span = "63 reviews"
                />
        </div>
        </>
    );
}
export default AllCards ; 