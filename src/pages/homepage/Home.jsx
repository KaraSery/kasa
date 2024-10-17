import {json, useLoaderData} from "react-router-dom";
import LodgmentList from "../../components/lodgment-list/LodgmentList.jsx";
import './homepage.scss'
import Banner from "../../components/banner/Banner.jsx";


export async function getData() {
    return await fetch('https://raw.githubusercontent.com/KaraSery/kasa/refs/heads/main/assets/data/data.json')
}

export default function Home() {
    const data = JSON.parse(useLoaderData())
    return (
        <div className='homepage'>
            <Banner><h1 className='banner__title'>Ches vous, partout et ailleurs</h1></Banner>
            <section id="gallery">
            <LodgmentList lodgments={data} />
            </section>
        </div>
    )
}