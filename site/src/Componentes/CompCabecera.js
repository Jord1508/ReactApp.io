import React, {Component} from 'react';

class CompCabecera extends Component {

  render(){
    return  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <span className="float-left">
                        <a className="navbar-brand" href="#">
                            <img src="imagenes/logo.png" width="250" height="35" alt="" />
                        </a>
                    </span>
                    <span className="float-right">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <img src="imagenes/carrito.png" width="32" height="32" alt="" />
                            <a className="text-danger" href="#">N &nbsp;{this.props.pCantidadProductos} producto(s)</a>
                        </div>
                    </span>
                </div>
            </nav>
  }
}

export default CompCabecera;
