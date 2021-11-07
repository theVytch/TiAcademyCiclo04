import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const Cadastrar = () => {

    const [servico, setServico] = useState({
        nome:'',
        descricao:''
    });

    const[status, setStatus] = useState({
        type:'',
        message:''
    });

    const valorInput = e => setServico({
        ...servico,[e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type' : 'application/json'
        }

        await axios.post(api+"/servicos",servico,{headers}).then((response) => {
            //console.log(response.data.message);
            if(response.data.error){
                setStatus({
                    type:'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    type:'success',
                    message: response.data.message
                });
            }
        }).catch(() => {
            console.log("Erro: sem conexão com a API.")
        })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Serviço</h1>
                </div>
                <div className="m-auto p-2">
                    <Link to="/listar-servico"
                        className="btn btn-outline-success btn-sm">Serviços</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === "success" ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do serviço" onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descricao</Label>
                    <Input type="text" name="descricao" placeholder="descrição do serviço" onChange={valorInput}/>
                </FormGroup>
                
                <Button type="submite" outline color = "success">Cadastrar</Button>
            </Form>
        </Container>
    );
};