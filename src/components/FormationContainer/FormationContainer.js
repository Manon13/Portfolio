import './FormationContainer.css'

const FormationContainer = ({ formation }) => (
    <div className='formation'>
        <h3>{formation.name}</h3>

        <p className='formation__diplome'>{formation.diplome}</p>
        <p className='formation__description'>{formation.description}</p>
        <p className='formation__lieu'>{formation.lieu}</p>
        <p className='formation__date'>{formation.date}</p>
    </div>
)

export default FormationContainer