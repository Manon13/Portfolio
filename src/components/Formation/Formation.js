import uniqid from 'uniqid'
import { formations } from '../../portfolio'
import FormationContainer from '../FormationContainer/FormationContainer'
import './Formation.css'

const Formation = () => {
    if (!formations.length) return null
    
    return (
        <section id='formation'>
        <h2 className='section__title'>Formations</h2>
    
        <div className='formation__grid'>
            {formations.map((formation) => (
            <FormationContainer key={uniqid()} formation={formation} />
            ))}
        </div>
        </section>
    )
}

export default Formation