import { Component, Host, State, h } from '@stencil/core';

export interface UserData{
  name:string;
  email:string;
  phone:string;
  username:string;
}

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',
  shadow: true,
})
export class MyTable {

  @State() usersData: Array<UserData>=[];

  private onClickHola(){
    alert('Hola');
  }

  private fetchUsers(){
    let url='https://jsonplaceholder.typicode.com/users';
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
        <custom-button onClick={this.onClickHola.bind(this)}>Hola</custom-button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>UserName</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
            
          </thead>
          <tbody>
            {this.usersData.map((el,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Host>
    );
  }

}