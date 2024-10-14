import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import './carousel.scss'

export default function Carousel({lodgment}) {

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
        <div className='carousel'>
            {(lodgment.pictures.length > 1) &&
                <>
                    <FontAwesomeIcon
                        onClick={carouselPrev}
                        className='arrow-left'
                        icon={faChevronLeft}/>

                    <FontAwesomeIcon
                        onClick={carouselNext}
                        className='arrow-right'
                        icon={faChevronRight}/>

                    <span className='carousel__index'>{carouselIndex + 1}/{lodgment.pictures.length}</span>
                </>
                }

            <img className='carousel__image' alt={lodgment.title} src={lodgment.pictures.length > 1 ? lodgment.pictures[carouselIndex] : lodgment.pictures[0]}/>
        </div>
    )
}