import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './lodgment-rating.scss'

function getRatingArray(lodgment) {
    let ratingArrayFn = () => {
        // Init Array
        const arr = Array.from({length: 5}, (x, i) => i)
        // return array of booleans that are true if index is below lodgment rating
        return arr.map((_, i) => i < lodgment.rating)
    }
    return ratingArrayFn()
}

export default function LodgmentRating({lodgment}) {
    return (
        <span className='rating'>
                        {getRatingArray(lodgment).map((isHigher, i) => (
                            <FontAwesomeIcon
                                className={isHigher ? 'rating__star fill' : 'rating__star'}
                                key={i}
                                /*Check if we should fill star*/
                                icon={faStar}/>
                        ))}
                    </span>
    )
}