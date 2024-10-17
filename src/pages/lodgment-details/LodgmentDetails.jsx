import {useLoaderData} from "react-router-dom";
import {getData} from "../homepage/Home.jsx";
import './lodgment-details.scss'
import Collapse from "../../components/collapse/Collapse.jsx";
import Carousel from "../../components/carousel/Carousel.jsx";
import LodgmentRating from "../../components/lodgment-rating/LodgmentRating.jsx";

export async function getLodgmentDetail({params}) {
    const data = await getData()
    const lodgments = await data.json()
    const lodgment = lodgments.find(lod => lod.id === params.id)
    if (!lodgment) throw new Error('Lodgment not found')
    return lodgment
}

export default function LodgmentDetails() {
    const lodgment = useLoaderData()
    return (
        <article className="lodgment-details">
            <Carousel className='lodgment-details__carousel' lodgment={lodgment}/>
            <div className="lodgment-details__infos">
                <div className='infos__titles-and-tags'>
                    <div className='titles-and-tags__titles'>
                        <h1 className='titles__title'>{lodgment.title}</h1>
                        <p className='titles__location'>{lodgment.location}</p>
                    </div>
                    <ul className='titles-and-tags__tags-list'>{lodgment.tags.map(
                        tag => <li key={tag} className='tags-list__item'>{tag}</li>
                    )}</ul>
                </div>
                <div className='infos__rating-and-host'>
                    <LodgmentRating lodgment={lodgment}/>
                    <div className='rating-and-host__host'>
                        <p className='host__name'>{lodgment.host.name}</p>
                        <img className='host__picture' alt={lodgment.host.name} src={lodgment.host.picture}/>
                    </div>
                </div>
            </div>
            <div className="description-and-equipments">
                <Collapse titleLevel={2} titleContent='Description'>
                    <p>{lodgment.description}</p>
                </Collapse>
                <Collapse titleLevel={2} titleContent='Equipements'>
                    <ul>
                        {lodgment.equipments.map(equipment => (
                            <li key={equipment} >{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </article>
    )
}