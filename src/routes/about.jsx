import Collapse from "../components/collapse";
import Banner from "../components/banner";
import './about.scss'
export default function AboutPage() {
    return(
        <div className='about'>
            <Banner/>
            <section id="about-content">
                <Collapse titleLevel={1} titleContent='Fiabilité'>
                    <p className="content__text">
                        Les annonces postées sur Kasa garantissent une fiabilitité total. Les photos sont conformes aus
                        logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </Collapse>
                <Collapse titleLevel={1} titleContent='Respect'>
                    <p className="content__text">
                        La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme
                    </p>
                </Collapse>
                <Collapse titleLevel={1} titleContent='Service'>
                    <p className="content__text">
                        La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtev ou nos locataires, soit empreinte de respectet de bienveillance
                    </p>
                </Collapse>
                <Collapse titleLevel={1} titleContent='Securité'>
                    <p className="content__text">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de securité établis par nos service. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien réspectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </section>
        </div>
    )
}