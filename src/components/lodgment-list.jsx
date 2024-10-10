import {Link, useLoaderData} from "react-router-dom";
import './lodgment-list.scss'
import LodgmentCard from "./logment-card";

export default function LodgmentList(lodgments) {
    return (
        <div className="lodgment-list">
            {lodgments.lodgments.map((lodgment) => {
                return (
                    <Link
                        key={lodgment.id}
                        className='lodgement-list__item'
                        to={"detail/" + lodgment.id}>
                        <LodgmentCard lodgment={lodgment}/>
                    </Link>
                )
            })}
        </div>
    )
}