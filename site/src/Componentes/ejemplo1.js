import React, { Component } from 'react';

class Ejemplo1 extends Component {

    //declaracion simple de state:
    /*
    state = {
        mensaje: "Bienvenido"
    }
    */

    constructor() {
        super()
        this.state = {
            mensaje: "Bienvenido",
            contador: 0
        }
    }

    cambiarMensaje() {
        this.setState({
            mensaje: "Hasta pronto",
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <h3>{this.state.contador}</h3>
                <button onClick={() => this.cambiarMensaje()}>Cambiar mensaje</button>
            </div>
        )
    }
}

export default Ejemplo1;

// import React, {Component} from 'react';

// class Ejemplo1 extends Component {

//     render(){
//         return <div>
//         <h1>Bienvenido</h1>
//     </div>
//     }
//   }
  
//   export default Ejemplo1;
