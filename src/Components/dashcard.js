import { useNavigate} from "react-router-dom";

export default function DashCard(props){

    const navigate = useNavigate();

    return(

        

        <div className="dash-card" onClick={()=>navigate(props.route)}>

            <div className="dash-card-inner">

                <div className="dash-icon">

                    {props.icon}

                </div>

                <div className="card-tt">
                    {props.label}
                </div>

                <div className="card-foot">
                    10
                </div>

            </div>

        </div>

    );

} 