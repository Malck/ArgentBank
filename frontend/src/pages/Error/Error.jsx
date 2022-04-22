import { Link } from 'react-router-dom'
import "../Error/error.css"

function Error() {
    
    return (
        <div className='error-page'>
            
            <div className='error'>
                <h1 className='number-of-error'>404</h1>
                <h3 className='error-message'>Oups! La page que vous demandez n'existe pas.</h3>
                <Link to='/' title='Home' className='return'>Retournez sur la page d'accueil</Link>
            </div>

        </div >
    );
}

export default Error;