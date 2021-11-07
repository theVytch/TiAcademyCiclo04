import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/listacompras").then((response) => {
            console.log(response.data.compras);
            setData(response.data.compras);
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Erro: sem connexão com a API.'
            })
            //console.log("Erro: sem connexão com a API.");
        })
    }

    useEffect(() => {
        getCompras();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações da compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcompra" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    {status.type == 'error' ? <Alert color="damger">
                        {status.message}
                    </Alert> : ""}
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Data</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-compra/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};