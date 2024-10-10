import {useLoaderData} from "react-router-dom";
import {getData} from "./homepage";
import {faStar, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './lodgment-details.scss'
import Collapse from "../components/collapse";
import {useState} from "react";

export async function getLodgmentDetail({params}) {
    const data = await getData()
    const lodgments = await data.json()
    const lodgment = lodgments.find(lod => lod.id === params.id)
    if (!lodgment) {
        throw new Error('Lodgment not found')
    }
    return lodgment
}

function getRatingArray(lodgment) {
    let ratingArrayFn = () => {
        // Init Array
        const arr = Array.from({length: 5}, (x, i) => i)
        // return array of booleans that are true if index is below rating
        return arr.map((_, i) => i < lodgment.rating)
    }
    return ratingArrayFn()
}

export default function LodgmentDetails() {
    const lodgment = useLoaderData()
    const ratingArray = getRatingArray(lodgment)
    const [carouselIndex, setCarouselIndex] = useState(0);
    const maxIndex = lodgment.pictures.length - 1

    function carouselPrev() {
        let index = carouselIndex - 1
        if (index < 0) index = maxIndex
        setCarouselIndex(index)
    }

    function carouselNext() {
        let index = carouselIndex + 1
        if (index > maxIndex) index = 0
        setCarouselIndex(index)
    }

    return (
        <div className='lodgment-details'>
            <section>
                <article className="lodgment-details">
                    <div className='lodgment-details__carousel'>
                        <FontAwesomeIcon
                            onClick={carouselPrev}
                            className='arrow-left'
                            icon={faChevronLeft}/>
                        <FontAwesomeIcon
                            onClick={carouselNext}
                            className='arrow-right'
                            icon={faChevronRight}/>
                        <span className='carousel__index'>{carouselIndex + 1}/{lodgment.pictures.length}</span>
                        <img className='carousel__image' alt={lodgment.title} src={lodgment.pictures[carouselIndex]}/>
                    </div>
                    <h1 className='lodgment-details__title'>{lodgment.title}</h1>
                    <p className='lodgment-details__location'>{lodgment.location}</p>
                    <ul className='lodgment-details__tags-list'>{lodgment.tags.map(
                        tag => <li key={tag} className='tags-list__item'>{tag}</li>
                    )}</ul>
                    <div className='rating-and-host'>
                    <span className='rating'>
                        {ratingArray.map((isHigher, i) => (
                            <FontAwesomeIcon
                                className={isHigher ? 'rating__star fill' : 'rating__star'}
                                key={i}
                                /*Check if we should fill star*/
                                icon={faStar}/>
                        ))}
                    </span>
                        <div className='host'>
                            <p className='host__name'>{lodgment.host.name}</p>
                            <img className='host__picture' alt={lodgment.host.name} src={lodgment.host.picture}/>
                        </div>
                    </div>
                    <div className="description-and-equipments">
                        <Collapse titleLevel={2} titleContent='Description'>
                            <p className="content__text">{lodgment.description}</p>
                        </Collapse>
                        <Collapse titleLevel={2} titleContent='Equipements'>
                            <ul className='equipments-list'>
                                {lodgment.equipments.map(equipment => (
                                    <li key={equipment} className="equipments-list__item">{equipment}</li>
                                ))}
                            </ul>
                        </Collapse>
                    </div>
                </article>
            </section>
        </div>

    )
}