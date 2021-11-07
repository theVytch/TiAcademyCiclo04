import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarProduto = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + "/listaprodutos").then((response) => {
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
        getProdutos();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações do Produto</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarproduto" className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>

                    {status.type == 'error' ? <Alert color="damger">
                        {status.message}
                    </Alert> : ""}
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-produto/" + item.id}
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