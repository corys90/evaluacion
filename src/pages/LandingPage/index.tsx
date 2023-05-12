//import * as env from '../../env';
import BarraMenu from '../../components/BarraMenu';

const shrCut = require('./shortCut.png');

const PageLandingPage = () => {

    return(
        <div className='container bg-white text-center'>
            <BarraMenu /> 
            <div>
                <h2 className='mb-3 text-secondary' >Accesos directos a opciones frecuentes </h2>
                <img src={shrCut} alt="Accesos directos a opciones frecuentes"/>
            </div>
        </div>
    )

};

export default PageLandingPage;