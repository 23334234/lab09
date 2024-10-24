import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: 'Monitor', precio: 200 },
        { codigo: 2, descripcion: 'Teclado', precio: 50 },
        { codigo: 3, descripcion: 'Mouse', precio: 25 }
      ]
    };
  }

  borrar(codigo) {
    const temp = this.state.articulos.filter(el => el.codigo !== codigo);
    this.setState({ articulos: temp });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Lista de Artículos</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => (
              <tr key={elemento.codigo}>
                <td>{elemento.codigo}</td>
                <td>{elemento.descripcion}</td>
                <td>{elemento.precio}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.borrar(elemento.codigo)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
