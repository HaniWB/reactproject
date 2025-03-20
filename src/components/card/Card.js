import './Card.css'
const Card =(props)=>{
    return(
        <div className="card">
          <img src={`/${props.img}`} alt="IMG1" />
            <p className="firstp">{props.p1}</p>
            <h2 style = {{ margin:"0"}}>{props.h2}</h2>
            <p style = {{ margin:"0" ,  fontSize: "1.2rem" }}>{props.pay}</p>
            <p className= "rating"> <b>{props.b}</b><span>({props.span})</span></p>
            <button> MORE INFO</button>
        </div>
    );
}
export default Card