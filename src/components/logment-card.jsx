export default function LodgmentCard({lodgment}) {
    return (
        <article className="lodgment-card">
            <img alt={lodgment.description} src={lodgment.cover}/>
            <h2>{lodgment.title}</h2>
            <p>{lodgment.location}</p>
        </article>
    )
}