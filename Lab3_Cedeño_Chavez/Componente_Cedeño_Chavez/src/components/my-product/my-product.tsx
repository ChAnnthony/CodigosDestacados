import { Component, Host, h,State } from '@stencil/core';

export interface UserData {
  nombre: string;
  descripcion: string;
  stock: number;
}

@Component({
  tag: 'my-product',
  styleUrl: 'my-product.css',
  shadow: true,
})
export class MyProduct {
  @State() usersData: Array<UserData>=[];
  
  
  private fetchUsers(){
    let url='http://localhost:8080/';
    fetch(url)
    .then(response=>{
      if(response.status !==200){
        throw new Error('no se pudo conectar');
      }return response.json();
    })
    .then(json=>{
      this.usersData=json;
      console.log(json);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  componentWillLoad(){
    this.fetchUsers();
  }
  render() {
    return (
      <Host>
        <h1>Tabla Productos Java</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Stock</th>
            </tr>
            
          </thead>
          <tbody>
          {this.usersData.map((el, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{el.nombre}</td>            
                <td>{el.descripcion}</td>
                <td>{el.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Host>
    );
  }

}
