import './banner.scss'
export default function Banner({children}) {
    return (
        <section className="banner">
            {children}
            <div className="background"></div>
            <div className="backdrop"></div>
        </section>
    )
}