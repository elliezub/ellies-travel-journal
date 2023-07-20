import { MdLocationOn } from "react-icons/md";

export default function Card(props) {
    return (
    <div className="card">
        <img className="cardimg" src={props.img}/>
        <div className="infodiv">
            <div className="locationdiv">
                <MdLocationOn className="locationicon"/>
                <h3>{props.location}</h3>
            </div>
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
                <p>{props.description}</p>
        </div>
    </div>
    )
}