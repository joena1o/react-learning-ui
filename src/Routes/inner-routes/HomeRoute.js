import DashCard from "../../Components/dashcard";
import { SiGoogleclassroom } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import {GiPapers} from "react-icons/gi";
import {SiPytest} from 'react-icons/si'
import { Button } from "react-bootstrap";

export default function HomeRoute(){

    return (

        <div className="home-route">


            <div className="dash-header">

                <div className="dash-title">
                Dashboard
                </div>
               

                <div className="dash-subtitle">
                    Home
                </div>

            </div>

            <div className="dash-grid">

               

                <div >
                    <DashCard icon={<SiGoogleclassroom />} label='Lecture' route='lecture' />
                </div>

                <div >
                    <DashCard  icon={<ImBooks />} label='Resource' route='resource'/>
                </div>

                <div >
                    <DashCard icon={<ImBooks />} label='Courses' />
                </div>

                <div>
                     <DashCard  icon={<GiPapers />} label='Quiz'  route='test' />
                </div>

                <div>
                     <DashCard  icon={<SiPytest />} label='Results'  route='test' />
                </div>

                {/* <div>
                     <DashCard  icon={<GiPapers />} label='Annoucement'  route='test' />
                </div> */}

            </div><br></br><br></br>


            <div className="dash-header" style={{marginBottom:"10px"}}>
                <div className="dash-title">
               Scheduled Lectures
                </div>
            </div>


            {/* <center> */}
                <div className="dash-card-content">

                <div className="filter">

                    <div className="filter-text">Period</div>

                    <div className="filter-dropdown">

                    <select>
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>This Week</option>
                    </select>

                    </div>
                    

                </div>

                    {/* <br></br> */}

                    <table className="table">

                        <thead>
                            <th style={{fontWeight:"bold"}}>S/N</th>
                            <th  style={{fontWeight:"bold"}}>Lecture</th>
                            <th style={{fontWeight:"bold"}}>Department</th>
                            <th style={{fontWeight:"bold"}}>Time</th>
                            <th style={{fontWeight:"bold"}}>Action</th>
                            
                        </thead>

                        <tr>
                            <td>1</td>
                            <td>BCH309</td>
                            <td>Electrical/Electronics Engineering</td>
                            <td>21/03/22</td>
                            <td><Button variant='warning'>Join</Button></td>
                            
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>BCH309</td>
                            <td>Mechanical Engineering</td>
                            <td>21/03/22</td>
                            <td><Button variant='warning'>Join</Button></td>
                            
                        </tr>


                    </table>

                    {/* <div style={{width:"100%", fontWeight:'bold', padding:"40px 0px"}} className=' text-danger center'>No Schedule Lecture</div> */}

                </div>
            {/* </center>     */}

        </div>

    );

}