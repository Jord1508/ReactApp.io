import React, {Component} from 'react';

class CompProductoResumen extends Component {

  render(){
    return  <div className="col mb-4">
                <div className="card h-100">
                    <a href="#">
                        <img src="imagenes/producto1.png" className="card-img-top" alt="..."/>
                    </a>
                    <div className="card-body">
                        <a className="text-primary" href="#">
                            <h5 className="card-title">CASACA VARILITE</h5>
                        </a>
                        <p className="card-text">Cuando cae la temperatura, está casaca ofrece abrigo ligero y plegable contra el frio. Incorpora cámaras tejidas con aislamiento...</p>
                        <p className="text-primary">S/ 379.00</p>
                    </div>
                </div>
            </div>
  }
}

export default CompProductoResumen;
