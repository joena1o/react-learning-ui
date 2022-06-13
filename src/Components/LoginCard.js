import Lottie from "lottie-react";
import groovyWalkAnimation from "../Assets/Login_popup.json";
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function LoginCard(){

    // const [auth, setAuth] = useState(false);
    const [mode, setMode] = useState('login');

    return(

        <div className="login-section">

            <div className="login-card">

                <div className="login-display">

                {/* {(mode==='login')? <p>USER LOGIN</p> : <p>SIGN UP</p>} */}

                    <div>
                    <Lottie animationData={groovyWalkAnimation} />
                    </div>

                    <div>
                        <h4>CONNECTED EDUCATION</h4>
                    </div>

                </div>

                {(mode==='login')?<div className="login-form">

                   <form>

                        <div className="form-group">
                        <label>Enter ID N0.</label>
                        <input type='text' className="form-control" placeholder="ID NO. eg EEE/19U/4556" />
                        </div>
                        

                        <div className="form-group">
                        <label>Password</label>
                        <input type='password' className="form-control" placeholder="Enter Password" />
                        </div><br></br>



                        <div className="form-group">
                        <Link to='/dashboard'><button>Login</button></Link>
                        </div>


                        <div className="form-group">
                        <button onClick={()=>setMode('signup')}>Sign Up</button>
                        </div>
                        

                   </form>

                </div>:

                <div className="signup-form">

                   <form>

                        <div className="form-group">
                        <label>Full name</label>
                        <input type='text' className="form-control" placeholder="First Name" />
                        </div>

                        <div className="form-group">
                        <label>Department</label>
                        <input type='text' className="form-control" placeholder="Email Address" />
                        </div>
                        

                        <div className="form-group">
                        <label>Reg No.</label>
                        <input type='password' className="form-control" placeholder="Enter Reg No." />
                        </div>

                        <div className="form-group">
                        <label>Phone</label>
                        <input type='phone' className="form-control" placeholder="Enter Phone Number" />
                        </div>

                        <div className="form-group">
                        <label>Email</label>
                        <input type='email' className="form-control" placeholder="Enter Email Address" />
                        </div>

                        <div className="form-group">
                        <label>Email</label>
                        <input type='email' className="form-control" placeholder="Enter Password" />
                        </div>

                        <div className="form-group">
                        <label>Password</label>
                        <input type='password' className="form-control" placeholder="Confirm Password" />
                        </div><br></br>


                        <div className="form-group">
                        <button>Sign Up</button>
                        </div>


                        <div className="form-group">
                        <button onClick={()=>setMode('signup')}>Login</button>
                        </div>
                        

                   </form>

                </div>

    }

            </div>

        </div>

    );

}