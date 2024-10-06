import {Link, useLoaderData} from "react-router-dom";
import './lodgment-list.scss'

export default function LodgmentList(lodgments) {
    debugger
    return (
        <ul className="lodgment-list">
            {lodgments.lodgments.map((item) => {
                return (
                    <li key={item.id}
                        className='lodgement-list__item'>
                        <Link to={"detail/"+item.id}>
                            <article className="lodgment-card">
                                <img alt={item.description} src={item.cover}/>
                                <h2>{item.title}</h2>
                                <p>{item.location}</p>
                            </article>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}