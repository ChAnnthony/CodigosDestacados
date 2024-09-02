import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'my-perfil',
  styleUrl: 'my-perfil.css',
  shadow: true,
})
export class MyPerfil {
  @State() userData: { name: string; email: string; phone: string; profileImage: string } = {
    name: 'Alison Tamayo',
    email: 'aatamayo2@espe.edu.ec || TICS',
    phone: '0989404589',
    profileImage: 'https://i.pinimg.com/236x/fe/83/5e/fe835eb7cadd6852332560d3fd72b960.jpg' // Placeholder image URL
  };

  render() {
    return (
      <Host>
        <div class="profile-card">
          <img src={this.userData.profileImage} alt="Profile Image" class="profile-image" />
          <h2>{this.userData.name}</h2>
          <p>Email: {this.userData.email}</p>
          <p>Phone: {this.userData.phone}</p>
        </div>
      </Host>
    );
  }
}
