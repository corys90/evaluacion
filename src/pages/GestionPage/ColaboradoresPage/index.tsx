import BarraMenu from '../../../components/BarraMenu';
//import * as env from '../../env';

const ColaboradoresPage = () => {

    return(
        <>

            <div className='container bg-white'>
                <BarraMenu />                 
                <div >
                    <div className="text-primary ms-3 mt-3">
                        Home / gestión / Colaboradores
                    </div>
                </div> 
                <form className="row g-3 rounded shadow mt-3" style={{backgroundColor: "#DCDCDC"}}>
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="nombre" placeholder="Nombre completo del colaborador"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Cargo</label>
                        <select id="inputState" className="form-select">
                            <option selected>Seleccione un cargo...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">Cliente</label>
                        <select id="cliente" className="form-select">
                            <option selected>Seleccione un cliente...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="fechaIngreso" className="form-label">Fecha de ingreso</label>
                        <input type="date" className="form-control" id="fechaIngreso" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="evaluador" className="form-label">Evaluador</label>
                        <select id="evaluador" className="form-select">
                            <option selected>Seleccione un evaluador...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="fechaUltimaEvaluacion" className="form-label">Última evaluación</label>
                        <input type="date" className="form-control" id="fechaUltimaEvaluacion" />
                    </div>
                    <div className="col-lg-12 d-flex justify-content-end p-3">
                        <button type="submit" className="btn w-25 text-light"  style={{backgroundColor: "#8FC347"}}>Guardar</button>
                    </div>
                </form>
            </div>
            {/*********** seccion de modales **********************/}
        </>
    )

};

export default ColaboradoresPage;