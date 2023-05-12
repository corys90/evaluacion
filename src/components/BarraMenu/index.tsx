import { Button} from "react-bootstrap";
import { FaCalendarCheck, FaChartLine, FaCheckDouble, FaClipboardCheck, FaFileAlt, FaForward, FaPeopleArrows, FaPersonBooth, FaPowerOff, FaUsers} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const logo = require('./digitalProf-samtel.jpeg');

const BarraMenu = () => {
   
    const navigate = useNavigate();

    const hndlrSalir = () =>{
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid  shadow rounded"  style={{backgroundColor:"#8FC347"}}>
                {/* Imagén marca fluida */}
                <div className="m-2" >
                    <a  href="#!">
                        <img src={logo} alt="" width={200}  className="img-fluid m-2 rounded"/>
                    </a>
                </div>
                {/* Ícono de hamburguesa en modo responsive*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {/* Gestión de colaboradores*/} 
                        <li className="nav-item dropdown  me-3 ">
                            <Link to="#!" className="nav-link dropdown-toggle text-decoration-none me-2 d-flex flex-row align-items-center gap-1"  id="navbarDropdownDashboard" role="button" data-bs-toggle="dropdown" aria-expanded="false" key={0}> 
                                <FaChartLine /> Gestión
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                               
                                <li><Link className="dropdown-item" to="/gestionColaboradores" ><FaPeopleArrows /> Colaboradores</Link></li>
                                <li><Link className="dropdown-item" to="/gestionFormatoEvaluacion" ><FaClipboardCheck /> Formato de evaluación</Link></li>
                            </ul>    
                        </li>

                        {/* Menú evaluaciones*/} 
                        <li className="nav-item dropdown  me-3 ">
                            <Link to="#!" className="nav-link dropdown-toggle text-decoration-none me-2 d-flex flex-row align-items-center gap-1"  id="navbarDropdownReferencia" role="button" data-bs-toggle="dropdown" aria-expanded="false" key={0}> 
                                <FaCheckDouble />Evaluaciones
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownReferencia">                               
                                <li><Link className="dropdown-item" to="/proximasEvaluaciones" ><FaForward /> Próximas evaluaciones</Link></li>
                            </ul>    
                        </li>

                        {/* Menú Inventario*/} 
                        <li className="nav-item dropdown  me-3 ">
                            <Link to="#!" className="nav-link dropdown-toggle text-decoration-none me-2 d-flex flex-row align-items-center gap-1"  id="navbarDropdownInventario" role="button" data-bs-toggle="dropdown" aria-expanded="false" key={0}> 
                                <FaCalendarCheck /> Administración
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownInventario">                               
                                <li><Link className="dropdown-item" to="/administracionUsuarios" ><FaUsers /> Usuarios</Link></li>                                                             
                            </ul>    
                        </li>

                        {/* Menú Consultas*/} 
                        <li className="nav-item dropdown  me-3 ">
                            <Link to="#!" className="nav-link dropdown-toggle text-decoration-none me-2 d-flex flex-row align-items-center gap-1"  id="navbarDropdownConsultas" role="button" data-bs-toggle="dropdown" aria-expanded="false" key={0}> 
                                <FaFileAlt /> Reportes
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownConsultas"> 
                                <li><Link className="dropdown-item" to="/reporteColaboradores" ><FaPeopleArrows /> Colaboradores </Link></li>     
                                <li><Link className="dropdown-item" to="/ReporteClientes" ><FaPersonBooth /> Clientes </Link></li>                                   
                                <li><Link className="dropdown-item" to="/reporteEvaluaciones" ><FaClipboardCheck /> Evaluaciones </Link></li>     

                            </ul>    
                        </li>

                    </ul>
                    <div className="d-flex flex-row gap-3 text-light wrap" style={{width:"fit-content"}}>
                        <div className="">
                            <div className="">
                                Hola, Fulanito!!
                            </div>
                        </div>
                        <div >
                            <Button type="button" className="border-0 bg-secondary" onClick={hndlrSalir}><FaPowerOff className="h3 mt-1"/></Button>
                        </div>
                    </div>  
                </div>
            </div>
        </nav>        
    );
};

export default BarraMenu;