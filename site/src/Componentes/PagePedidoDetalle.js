import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompPedidoDetalle from './CompPedidoDetalle';
import CompPiePagina from './CompPiePagina';

import dataJsonPedido from '../DataJson/dataJsonPedido.json';
import dataJsonListaDetallePedido from '../DataJson/dataJsonListaDetallePedido.json';

class PagePedidoDetalle extends Component {

    state = {
        miPedido: dataJsonPedido,
        miPedidoDetalle: dataJsonListaDetallePedido
    }

    eliminarProductoDelPedido = (id) => {
        let nuevoPedidoDetalle = this.state.miPedidoDetalle.filter(itemDetalle => itemDetalle.id !== id);
        this.setState({
            miPedidoDetalle: nuevoPedidoDetalle
        });

        //recalcular el total del pedido
        let total = 0;
        let pedido = this.state.miPedido;
        nuevoPedidoDetalle.map(itemDetalle => total = total + itemDetalle.subTotal);
        pedido.total = total;
        this.setState({
            miPedido: pedido
        })
    }

    render() {
        return <div >
            <CompCabecera />
            <main role="main" className="container">
                <div className="row">
                    <CompListaCategorias />
                    <CompPedidoDetalle pPedido={this.state.miPedido}
                        pPedidoDetalle={this.state.miPedidoDetalle}
                        pFuncionEliminarProducto={this.eliminarProductoDelPedido} />
                </div>
            </main>
            <CompPiePagina />
        </div>
    }
}

export default PagePedidoDetalle;

// import React, { Component } from 'react';
// import CompCabecera from './CompCabecera';
// import CompListaCategorias from './CompListaCategorias';
// import CompPedidoDetalle from './CompPedidoDetalle';
// import CompPiePagina from './CompPiePagina';

// import dataJsonPedido from '../DataJson/dataJsonPedido.json';
// import dataJsonListaDetallePedido from '../DataJson/dataJsonListaDetallePedido.json';

// class PagePedidoDetalle extends Component {

//     state = {
//         miPedido: dataJsonPedido,
//         miPedidoDetalle: dataJsonListaDetallePedido
//     }

//     eliminarProductoDelPedido = (id) => {
//         let nuevoPedidoDetalle = this.state.miPedidoDetalle.filter(itemDetalle => itemDetalle.id !== id);
//         this.setState({
//             miPedidoDetalle: nuevoPedidoDetalle
//         });

//         //recalcular el total del pedido
//         let total = 0;
//         let pedido = this.state.miPedido;
//         nuevoPedidoDetalle.map(itemDetalle => total = total + itemDetalle.subTotal);
//         pedido.total = total;
//         this.setState({
//             miPedido: pedido
//         })
//     }

//     render() {
//         return <div >
//             <CompCabecera />
//             <main role="main" className="container">
//                 <div className="row">
//                     <CompListaCategorias />
//                     <CompPedidoDetalle pPedido={this.state.miPedido}
//                         pPedidoDetalle={this.state.miPedidoDetalle}
//                         pFuncionEliminarProducto={this.eliminarProductoDelPedido} />
//                 </div>
//             </main>
//             <CompPiePagina />
//         </div>
//     }
// }

// export default PagePedidoDetalle;

// // import React, { Component } from 'react';
// // import CompCabecera from './CompCabecera';
// // import CompListaCategorias from './CompListaCategorias';
// // import CompPedidoDetalle from './CompPedidoDetalle';
// // import CompPiePagina from './CompPiePagina';

// // import dataJsonPedido from '../DataJson/dataJsonPedido.json';
// // import dataJsonListaDetallePedido from '../DataJson/dataJsonListaDetallePedido.json';

// // class PagePedidoDetalle extends Component {

// //     state = {
// //         miPedido: dataJsonPedido,
// //         miPedidoDetalle: dataJsonListaDetallePedido
// //     }

// //     render() {
// //         return <div >
// //             <CompCabecera />
// //             <main role="main" className="container">
// //                 <div className="row">
// //                     <CompListaCategorias />
// //                     <CompPedidoDetalle pPedido={this.state.miPedido} pPedidoDetalle={this.state.miPedidoDetalle} />
// //                 </div>
// //             </main>
// //             <CompPiePagina />
// //         </div>
// //     }
// // }

// // export default PagePedidoDetalle;
