import {json, useLoaderData} from "react-router-dom";
import {getData} from "./homepage";
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './lodgment-details.scss'

export async function getLodgmentDetail({ params }) {
    const data = await getData()
    const lodgments = await data.json()
    return json(lodgments.find(lod => lod.id === params.id))
}

export default function LodgmentDetails() {
    const lodgment = useLoaderData()
    let ratingArrayFn = ()=> {
        // Init Array
        const arr = Array.from({ length: 5 }, (x, i)=> i)
        // return array of booleans that are true if index is below rating
        return arr.map((_, i) => i<lodgment.rating)
    }
    const ratingArray = ratingArrayFn()
    console.log(ratingArray, lodgment)
    return(
        <section>
            <article className="lodgment-details">
                <img className='lodgment-details__carousel' alt={lodgment.title} src={lodgment.pictures[0]}/>
                <h1 className='lodgment-details__title'>{lodgment.title}</h1>
                <p className='lodgment-details__location'>{lodgment.location}</p>
                <ul className='lodgment-details__tags-list'>{lodgment.tags.map(
                    tag => <li key={tag} className='tags-list__item'>{tag}</li>
                )}</ul>
                <div className='rating-and-host'>
                    <span className='rating'>
                        {ratingArray.map((isHigher, i)=> (
                            <FontAwesomeIcon
                                className={isHigher ? 'rating__star fill' : 'rating__star'}
                                key={i}
                                /*Check if we should fill star*/
                                icon={fasStar} />
                        ))}
                    </span>
                    <div className='host'>
                        <p className='host__name'>{lodgment.host.name}</p>
                        <img className='host__picture' alt={lodgment.host.name} src={lodgment.host.picture}/>
                    </div>
                </div>
                <div className="description-and-equipments">
                    <details className='details desription-details'>
                        <summary className='details__summary description__summary'>Description</summary>
                        <div className='details__content description__content'>
                            <p className="content__text">{lodgment.description}</p>
                        </div>
                    </details>
                    <details className='details equipments-details'>
                        <summary className='details__summary equipments__summary'>Equipements</summary>
                        <ul className='details__content equipments-list'>
                            {lodgment.equipments.map(equipment => (
                                <li key={equipment} className="equipments-list__item">{equipment}</li>
                            ))}
                        </ul>
                    </details>
                </div>
            </article>
        </section>
    )
}