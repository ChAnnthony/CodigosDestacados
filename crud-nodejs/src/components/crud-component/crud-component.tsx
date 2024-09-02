import { Component, Host, Method, State, h } from '@stencil/core';

@Component({
  tag: 'crud-component',
  styleUrl: 'crud-component.css',
  shadow: true,
})
export class CrudComponent {

  @State() libros: any[]=[];
  @State() libro: {
    "id":null,
	  "titulo":"",
    "autor":"",
    "editorial":"",
	  "nropaginas":"",
    "stock":"",
    "estado":""
  };

  baseUrl='https://localhost:3000/libros';
  componentWillLoad(){
    this.fetchLibros();
  }

  //devolver libros
  async fetchLibros(){
    try{
      const response = await fetch(this.baseUrl);
      const data= await response.json();
      this.libros=data;
    }catch(error){
      console.log('Error ftching libros',error);
    }
  }

  //registrar libros
  async createLibro(){
    try {
      await fetch(this.baseUrl,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(this.libro)
      });
      this.fetchLibros();
      this.restForm();
    } catch (error) {
      console.log('Error ftching libros',error);
    }
  }

  async updateLibro(id){
    try {
      await fetch(`${this.baseUrl}/${id}`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(this.libro)
      });
      this.fetchLibros();
      this.restForm();
    } catch (error) {
      console.log('Error ftching libros',error);
    }
  }

  async deleteLibro(id){
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE'
      });
      this.fetchLibros();
      this.restForm();
    }
    catch (error) {
     console.log('Error deleting book: ',error);
    }
  }
  //**********//
  handleInputChange(event){
    const{name,value}=event.target;
    this.libro={...this.libro,[name]:value};
  }

  restForm(){
    this.libro={
      "id":null,
      "titulo":"",
      "autor":"",
      "editorial":"",
      "nropaginas":"",
      "stock":"",
      "estado":""
    }
  }

  render() {
    return (
      <Host>
        <div>
          <h1>Listado de libros</h1>

          <form 
            onSubmit={(e)=>{
              e.preventDefault();
              this.libro.id? this.updateLibro(this.libro.id):this.createLibro();
            }}
          >
            <input type="text"
                    name= 'titulo'
                    value={this.libro.titulo}
                    placeholder='Titulo'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <input type="text"
                    name= 'autor'
                    value={this.libro.autor}
                    placeholder='Autor'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <input type="text"
                    name= 'editorial'
                    value={this.libro.editorial}
                    placeholder='Editorial'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <input type="number"
                    name= 'nropaginas'
                    value={this.libro.nropaginas}
                    placeholder='Numero de paginas'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <input type="text"
                    name= 'stock'
                    value={this.libro.stock}
                    placeholder='Stock'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <input type="number"
                    name= 'estado'
                    value={this.libro.estado}
                    placeholder='1: Disponible - 0: No disponible'
                    onInput={(event)=>this.handleInputChange(event)}
            ></input>
            <button type='submit'>{this.libro.id ?'Actualizacion':'Crear'} Libro</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>titulo</th>
                <th>autor</th>
                <th>editorial</th>
                <th>nropaginas</th>
                <th>stock</th>
                <th>estado</th>
              </tr>
            </thead>
            <tbody>
              {
                this.libros.map((Libro)=>(
                  <tr>
                    <td>{Libro.id}</td>
                    <td>{Libro.titulo}</td>
                    <td>{Libro.autor}</td>
                    <td>{Libro.editorial}</td>
                    <td>{Libro.nropaginas}</td>
                    <td>{Libro.stock}</td>
                    <td>{Libro.estado}</td>
                    <td>
                    <button onClick={()=>(this.libro=Libro)}>Actualizar</button>
                    <button onClick={()=>this.deleteLibro(Libro.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </Host>
    );
  }

}