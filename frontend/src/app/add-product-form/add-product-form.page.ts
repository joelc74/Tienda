
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.page.html',
  styleUrls: ['./add-product-form.page.scss'],
  standalone: false
})
export class AddProductFormPage implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio_venta: '',
    precio_compra: ''
  };

  isEditMode = false; // 👈 Saber si estamos editando

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Ver si viene un id por parámetro
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadProduct(parseInt(id));
    }
  }

  // Cargar producto si estamos en modo edición
  loadProduct(id: number) {
    console.log('🔍 Buscando producto con ID:', id);
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        console.log('✅ Producto encontrado:', data);
        this.producto = data;
      },
      error: async (err) => {
        console.error('❌ Error al cargar producto:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo cargar el producto para editar.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  // Guardar o actualizar según el modo
  async onSubmit() {
    if (!this.producto.nombre || !this.producto.descripcion || !this.producto.precio_venta || !this.producto.precio_compra) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.isEditMode) {
      // 🟢 MODO EDITAR
      this.productService.editProduct(this.producto.id, this.producto).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Producto actualizado correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-product']);
        },
        error: async (err) => {
          console.error('❌ Error al actualizar producto:', err);
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al actualizar producto.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      // 🟢 MODO CREAR
      const formData = new FormData();
      formData.append('nombre', this.producto.nombre);
      formData.append('descripcion', this.producto.descripcion);
      formData.append('precio_venta', this.producto.precio_venta);
      formData.append('precio_compra', this.producto.precio_compra);

      this.productService.addProduct(this.producto).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Producto añadido correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-product']);
        },
        error: async () => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al agregar producto.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }
}
