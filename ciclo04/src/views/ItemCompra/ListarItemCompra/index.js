import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarItemCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getItemCompras = async () => {
        await axios.get(api + "/listaitemcompras").then((response) => {
            console.log(response.data.produtos);
            setData(response.data.produtos);
        }).catch(() => {
            setStatus({
                type: 'error',
                message: 'Erro: sem connexão com a API.'
            })
            //console.log("Erro: sem connexão com a API.");
        })
    }

    useEffect(() => {
        getItemCompras();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações do Item Compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastraritemcompra" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    {status.type == 'error' ? <Alert color="damger">
                        {status.message}
                    </Alert> : ""}
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ComprasId</th>
                            <th>ProdutosId</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr >
                                <td>{item.ComprasId}</td>
                                <td>{item.ProdutosId}</td>
                                <td>{item.Quantidade}</td>
                                <td>{item.Valor}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-itemcompra/" + item.id}
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