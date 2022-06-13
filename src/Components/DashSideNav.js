import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import {MdOutlineNotificationsNone} from "react-icons/md";
import {GiPapers} from "react-icons/gi";
import {CgProfile} from 'react-icons/cg';
import {FiLogOut} from 'react-icons/fi';
import {SiPytest} from 'react-icons/si'
import {Link} from 'react-router-dom';

export default function SideNav(){

    

    const style ={
        "color": "white",
        "textDecoration":"none"        
    }

    return (

        <div className="side-nav">

            <div className="side-nav-inner">

                <div className="side-header">
                    <span>Dashboard</span>
                </div>

                <hr></hr>

                <div className="nav"><Link to='/dashboard/' style={style}><span><FaHome /></span><span className="label">Home</span></Link></div>
                
                
                <div className="nav"><Link to='/dashboard/lecture' className="link" style={style}><span><SiGoogleclassroom /></span><span className="label">Lecture</span></Link></div>
                <div className="nav" ><Link to='/dashboard/resource' className="link" style={style}><span><ImBooks /></span><span className="label">Resource</span></Link></div>
                <div className="nav"><Link to='/dashboard/course' className="link" style={style}><span><ImBooks /></span><span className="label">Course</span></Link></div>
                <div className="nav"><Link to='/dashboard/test' className="link" style={style}><span><GiPapers /></span><span className="label">Quiz</span></Link></div>
                <div className="nav"><Link to='/dashboard/notice' className="link" style={style}><span><MdOutlineNotificationsNone /></span><span className="label">Notice</span></Link></div>
                {/* <div className="nav"><Link to='/dashboard/annoucement' style={style}><span><SiPytest /> Annoucement</span></Link></div> */}
                <div className="nav"><Link to='/dashboard/result' className="link" style={style}><span><SiPytest /></span><span className="label">Result</span></Link></div>

                    
            </div>

            <div className="side-nav-inner">

                <div className="side-header">
                <span>User</span>
                </div>

                <hr></hr>
            
                <div className="nav"><span><CgProfile /></span><span className="label">Profile</span></div>
                <div className="nav"><span><FiLogOut /></span><span className="label">Logout</span></div>
                

                   
            </div>

        </div>

    );

}