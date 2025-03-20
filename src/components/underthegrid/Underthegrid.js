
import './Underthegrid.css'
const Underthegrid=(props)=>{
    return(
        <>
            <div className="underthegrid">
                <h1>{props.par}</h1>
                <a href="https://fickleflight-locofy-hasura.netlify.app/"> {props.linkText} </a>
            </div>
            {props.showImage && <img src={props.img}style={{ width: "100%", marginTop: "0.5rem" }} alt="Under the grid" />}
        </>
    ); 
}
export default Underthegrid;