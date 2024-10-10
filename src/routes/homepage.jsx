import {json, useLoaderData} from "react-router-dom";
import LodgmentList from "../components/lodgment-list";
import './homepage.scss'
import Data from "../../public/assets/data/data.json";
import Banner from "../components/banner";


export async function getData() {
    return await fetch('/assets/data/data.json')
}

export default function Homepage() {
    const data = useLoaderData()
    return (
        <div className='homepage'>
            <Banner><h1 className='banner__title'>Ches vous, partout et ailleurs</h1></Banner>
            <section id="gallery">
            <LodgmentList lodgments={data} />
            </section>
        </div>
    )
}