import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompPiePagina from './CompPiePagina';
import CompListaProductos from './CompListaProductos';

class PageListaProductos extends Component {

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <div className="row">
                        <CompListaCategorias />
                        <CompListaProductos />
                    </div>
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PageListaProductos;
