import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'table-data',
  styleUrl: 'table-data.css',
  shadow: true,
})
export class DataTable {
  @Prop() apiUrl: string;
  @State() data: any[] = [];
  @State() error: string;

  async componentWillLoad() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      this.data = await response.json();
    } catch (error) {
      this.error = error.message;
    }
  }

  render() {
    if (this.error) {
      return <div>Error: {this.error}</div>;
    }

    if (this.data.length === 0) {
      return <div>Cargando ...</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            {Object.keys(this.data[0]).map(key => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {Object.values(item).map(value => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}