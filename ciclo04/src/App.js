import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home/';
import { Listar } from './views/Cliente/Listar/';
import { ListarPedido } from './views/Pedido/ListarPedido/';
import { Menu } from './components/Menu';
import { ListarServico } from './views/Servico/ListarServico';
import { Item } from './views/Servico/Item';
import { Cadastrar } from './views/Servico/Cadastrar';

import { ListarCompra } from './views/Compra/ListaCompra';
import { CadastrarCompra } from './views/Compra/CadastrarCompra/';

import { ListarProduto } from './views/Produto/ListaProduto';
import { CadastrarProduto } from './views/Produto/CadastrarProduto/';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={Listar}/>
          <Route path="/listar-servico" component={ListarServico}/>
          <Route path="/listar-pedido/:id" component={Item}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>

          <Route path="/listar-compra" component={ListarCompra}/>
          <Route path="/cadastrarcompra" component={CadastrarCompra}/>

          <Route path="/listar-produto" component={ListarProduto}/>
          <Route path="/cadastrarproduto" component={CadastrarProduto}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
