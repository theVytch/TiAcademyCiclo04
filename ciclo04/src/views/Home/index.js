import { Container } from "reactstrap";

export const Home = () => {
    return(
        <div>
            <Container>
                <div className = "d-flex">
                    <div className="m-auto p-2"></div>
                    <h1>Home</h1>
                </div>
                <div className = "p-2">
                    <a href="/listar-cliente" className="btn btn-outline-success btn-sm">Cliente</a>
                    <a href="/listar-pedido" className="btn btn-outline-success btn-sm"> Pedido</a>
                    <a href="/listar-servico" className="btn btn-outline-success btn-sm">Servico</a>

                    <a href="/listar-compra" className="btn btn-outline-success btn-sm">Compra</a>
                    <a href="/listar-itemcompra" className="btn btn-outline-success btn-sm">ItemCompra</a>
                    <a href="/listar-produto" className="btn btn-outline-success btn-sm">Produto</a>
                </div>
            </Container>
        </div>
    );
};