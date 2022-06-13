import DashNav from "../Components/DashNav";
import SideNav from "../Components/DashSideNav";
import HomeRoute from "../Routes/inner-routes/HomeRoute";
import {Route, Routes} from 'react-router-dom';
import Lecture from "../Routes/inner-routes/LectureRoute";
import Test from "./inner-routes/TestRoute";
import Resource from "./inner-routes/ResourceRoute";

export default function Dashboard(){

    return(

        <div className="dash-route">

            <DashNav />

            <SideNav />

            <div className="dash-layout">


            <Routes>

                <Route exact path='/' element={<HomeRoute />} />

                <Route path='lecture' element={<Lecture />} />

                <Route path='test' element={<Test />} />

                <Route path='resource' element={<Resource />} />

            </Routes>

                

            </div>

        </div>

    );


}