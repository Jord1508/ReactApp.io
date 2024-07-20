import React, {Component} from 'react';
import CompProductoResumen from './CompProductoResumen';

class CompListaProductos extends Component {

  render(){
    return  <div class="col-9">
        <p class="h5 text-secondary">Ropa</p>
                    <div class="row row-cols-1 row-cols-md-3">
                        <CompProductoResumen />
                        <CompProductoResumen />
                        <CompProductoResumen />
                        <CompProductoResumen />
                        <CompProductoResumen />
                        <CompProductoResumen />
                        <CompProductoResumen />
                    </div>
        </div>
  }
}

export default CompListaProductos;
