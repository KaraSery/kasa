import {Outlet} from "react-router-dom";
import MainHeader from "../components/main-header";
import MainFooter from "../components/main-footer";

export default function Root() {
    return (
        <>
            <MainHeader/>
            <main>
                <Outlet/>
            </main>
            <MainFooter/>
        </>
    );
}
