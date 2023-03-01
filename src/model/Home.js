import '../styles/styles.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Button, Modal, Label } from 'reactstrap';



const Home = () => {
    const [datos, setDatos] = useState([]);
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    const [data2, setData] = useState({
        name: "",
        apellido: "",
        name2: "",
        apellido2: ""
    })
    useEffect(() => {
        axios.get('http://localhost:8080/Student/listStudent')
            .then(function (response) {
                setDatos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    function Enviar(e) {
        e.preventDefault();

        axios.post('http://localhost:8080/Student', {
            name: data2.name,
            apellido: data2.apellido,
            name2: data2.name2,
            apellido2: data2.apellido2
        })
            .then(res => {
                console.log(res.data2)
            })
        alert('equipo agregado')

    }
    function handle(e) {
        const newdata = { ...data2 }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
            <section class="seccion-perfil-usuario">
                <div class="perfil-usuario-header">
                    <div class="perfil-usuario-portada">
                        <div class="perfil-usuario-avatar">
                            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJVNm4nONP4IjDUN34B3G8yuxCBF5iAWI5b-9h0_=s900-c-k-c0x00ffffff-no-rj" alt="img-avatar" />

                        </div>

                    </div>
                </div>

                <div class="perfil-usuario-body">
                    <div class=" perfil-usuario-bio centar">
                        <h3 class="titulo">Agregar alumnos</h3>

                        <button onClick={add} class=" box button-23 " role="button">agregar equipo</button>
                    </div>
                    <div class="perfil-usuario-footer">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">equipos</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {datos.map((item, index) => (
                                        <div key={index}>



                                            <th scope="row">aquipo {item.id}</th>
                                            <td className='titulo'>{item.name} {item.apellido} </td>
                                            <td className='titulo'>{item.name2} {item.apellido2} </td>

                                        </div>
                                    ))}
                                </tr>


                            </tbody>
                        </table>


                    </div>
                    <div class="redes-sociales">
                        <a href="" class="boton-redes facebook fab fa-facebook-f"><i class="icon-facebook"></i></a>
                        <a href="" class="boton-redes twitter fab fa-twitter"><i class="icon-twitter"></i></a>
                        <a href="" class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
                    </div>

                </div>
            </section>
            <form>
                <Modal isOpen={modaladd} >

                    <div className="p-4">
                        <form className="form-Upload"   >
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={add} className="btn-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </button>
                                <h1 className="heading text-center">Agregar Equipo</h1>
                                <div></div>
                            </div>




                            <div>



                            </div>
                            <div className="label">

                                <Label className="mb-2 fw-bold">nombre del primer integrante </Label>
                                <input type="text" className="form-control" onChange={(e) => handle(e)} id="name" value={data2.name} placeholder="nombre" required ></input>
                            </div>
                            <div className="label">
                                <Label className="mb-2 fw-bold">apellido del primer integrante </Label>
                                <input type="text" className="form-control" onChange={(e) => handle(e)} id="apellido" value={data2.apellido} placeholder="apellido" required ></input>
                            </div>
                            <div className="label">
                                <Label className="mb-2 fw-bold">nombre del segundo integrante </Label>
                                <input type="text" className="form-control" onChange={(e) => handle(e)} id="name2" value={data2.name2} placeholder="nombre" required></input>
                            </div>
                            <div className="label">
                                <Label className="mb-2 fw-bold">apellido del segundo integrante </Label>
                                <input type="text" className="form-control" onChange={(e) => handle(e)} id="apellido2" value={data2.apellido2} placeholder="apellido" required></input>
                            </div>
                            <div className="text-center">
                                <button onClick={(e) => Enviar(e)} className="btn btn-primary">agregar</button>
                            </div>


                        </form>
                    </div>



                </Modal>
            </form>
        </div>


    )
}
export default Home;