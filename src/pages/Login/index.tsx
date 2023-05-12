import { useState } from 'react';
import { Alert, Button, Col, Container, Form } from 'react-bootstrap';
import { FaDoorOpen, FaKey, FaRegHandPaper, FaUserTie } from 'react-icons/fa';
import MsgModalSpinner from '../../components/MsgModalSpinner';
//import * as env from '../../env';
import './style.css';
import MsgDialog from '../../components/MsgDialog';
import { useNavigate } from 'react-router-dom';

const PageLogin = () => {

    const [msgDlgShow, setMsgDlgShow] = useState(false);
    const [msgAlrtUsr, setMsgAlrtUsr] = useState(false);
    const [msgAlrtPwd, setMsgAlrtPwd] = useState(false);
    const [sHCarga, setsHCarga] = useState(false);
    const navigate = useNavigate();
    let [formData, setFormData] = useState({idUser:"app_test", password:"app_test"});

    const changeText = (evnt: any) => {

        formData = {...formData, [evnt.target.id]: evnt.target.value.trim()};
        setFormData(formData);     
    }

    const keyPress = (evnt: any) => {
        if (evnt.key === "Enter"){
            sendForm(evnt);
        }      
    }    

    const sendForm = async(e: any) =>{
        
        e.preventDefault();

        let sw = 0;
        
        (formData.idUser === "") ? setMsgAlrtUsr(true) : sw++; 
        (formData.password === "") ? setMsgAlrtPwd(true) : sw++; 

        if (sw === 2){
            navigate("/home");
        }
    }

    /* manejadores de msgDialog */
    const handlerOk = () => {
        setMsgDlgShow(false);
    }

    return(
        <>
            <div className='container w-50 mt-5 shadow-lg border rounded bg-white'>
                <div className='m-5 text-center' >
                    <h1>Evaluación del Desempeño</h1>
                </div>
                <Container>
                    <div className='m-3 text-center'><span className='h3'>Inicio de sesión</span></div>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label><FaUserTie /> Usuario</Form.Label>
                            <Form.Control type="user" placeholder="usuario" id="idUser" onChange={changeText} value={formData.idUser}/>
                            <Form.Text>
                                <Alert variant="danger" show={msgAlrtUsr} className="p-1 m-0">
                                    <FaRegHandPaper className='mb-1' /> Debe ingresar un usuario válido!!!
                                </Alert>
                                <div className=" text-end ">Ingrese con un usuario autorizado</div>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> <FaKey /> Constraseña</Form.Label>
                            <Form.Control type="password" placeholder="contraseña"  id="password" onChange={changeText} onKeyUp={keyPress} value={formData.password}/>
                            <Form.Text>
                                <Alert variant="danger" show={msgAlrtPwd} className="p-1 m-0">
                                        <FaRegHandPaper className='mb-1' /> Debe ingresar una contraseña válida!!!
                                </Alert>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mt-4 mb-4">
                            <Col className='text-center mt-3'>
                                <Button onClick={sendForm} className='w-50 border ' style={{backgroundColor: " #8FC347", height:"60px"}}> <FaDoorOpen /> Ingresar</Button>
                            </Col>
                        </Form.Group>                                           
                    </Form>
                </Container>
            </div>
            {/*********** seccion de modales **********************/}
            {/*********** cuadro de dialogo para errores **********/}
            <MsgDialog
                Show={msgDlgShow}
                Title={`Inicio de sesión`}
                Icon="!"
                Message="Usuario y/o password incorrecto. Por favor verifiquelo y vuelva a intentar."
                BtnOkName="Aceptar"
                BtnNokName=""
                HandlerClickOk={handlerOk}
                HanlerdClickNok={null}
            />
            <MsgModalSpinner 
                Show={sHCarga}
                text="Un momento porfavor, validando acceso y cargando valores..."
                color="#FF7588"
            />
        </>
    )

};

export default PageLogin;