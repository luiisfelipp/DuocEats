import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  producto: any = {
    name: '',
    price: null,
    image: '',
    category: '' 

  };

  private apiUrl = 'http://localhost:8000/productos'; // URL de JSON Server

  // Inyecta HttpClient y Router en el constructor
  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.producto.image = e.target.result; // Guarda la imagen en base64
      };
      reader.readAsDataURL(file);
    }
  }

  agregarProducto() {
    // Verifica que los campos requeridos no estén vacíos
    if (!this.producto.name || this.producto.price === null) {
      console.error('El nombre y el precio son necesarios');
      return;
    }

    // Enviar producto a JSON Server
    this.http.post(this.apiUrl, this.producto).subscribe(
      (response) => {
        console.log('Producto agregado', response);
        // Redirige a page1 después de agregar el producto
        this.router.navigate(['/page1']);
        this.limpiarFormulario(); // Resetea el formulario después de agregar
      },
      (error) => {
        console.error('Error al agregar producto', error);
      }
    );
  }

  limpiarFormulario() {
    this.producto = {
      name: '',
      price: null,
      image: '',
      category: ''
    };
  }
}
