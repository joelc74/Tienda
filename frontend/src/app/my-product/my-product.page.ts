
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { AlertController, ToastController } from '@ionic/angular';
import { Producto } from '../interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.page.html',
  styleUrls: ['./my-product.page.scss'],
  standalone: false
})
export class MyProductPage implements OnInit {
  product: Producto[] = [];
  filteredProduct: Producto[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getProduct().subscribe({
      next: (response) => {
        this.product = response || [];
        this.filteredProduct = [...this.product];
      },
      error: (error) => {
        console.error('Error al obtener producto:', error);
      }
    });
  }

  // Búsqueda: intenta servidor primero, si falla, hace filtro local
  filterProduct() {
    const term = (this.searchTerm || '').trim();
    if (!term) {
      this.filteredProduct = [...this.product];
      return;
    }

    // Intentamos búsqueda en servidor (si está implementada)
    this.productService.searchByName(term).subscribe({
      next: (res) => {
        this.filteredProduct = res;
      },
      error: (err) => {
        console.warn('Búsqueda en servidor falló, usando filtro local', err);
        this.filteredProduct = this.product.filter(g =>
          g.nombre?.toLowerCase().includes(term.toLowerCase())
        );
      }
    });
  }

  // Navegar al formulario en modo edición (ruta: /edit-product/:id)
  goToEdit(id: number) {
    this.router.navigate(['/edit-product', id]);
  }


  // Confirmar eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar este producto?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteProduct(id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Producto eliminado',
          duration: 1500,
          position: 'bottom'
        });
        await toast.present();
        this.getAllProduct();
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo eliminar el producto.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
