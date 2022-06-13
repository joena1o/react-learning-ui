import DisplayPic from "./Displaypic";

export default function DashNav(){

    return(

        <div className="dash-nav">

            <div className="title">
                MAU EDU
            </div>

            <div className="navs">

                <div className="navlink">Notiications <span className="badge badge-danger">10</span></div>
                <div className="navlink">Logout</div>

                
                <DisplayPic />
            

               
                

            </div>

        </div>

    );

}