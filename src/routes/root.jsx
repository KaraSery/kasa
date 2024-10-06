import {json, Link, Outlet, useLoaderData} from "react-router-dom";
import MainHeader from "../components/main-header";
import MainFooter from "../components/main-footer";

export default function Root() {
    const data = useLoaderData()
    return (
        <>
            <MainHeader/>
            <main>
                <Outlet/>
            </main>
            <MainFooter/>
        </>);
}
