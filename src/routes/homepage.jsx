import {json, useLoaderData} from "react-router-dom";
import LodgmentList from "../components/lodgment-list";
import './homepage.scss'
import Data from "../../public/assets/data/data.json";


export async function getData() {
    return await fetch('/assets/data/data.json')
}

export default function Homepage() {
    const data = useLoaderData()
    return (
        <>
            <section id="banner">
                <h1>Ches vous, partout et ailleurs</h1>
            </section>
            <section id="gallery">
                <LodgmentList lodgments={data} />
            </section>
        </>
    )
}