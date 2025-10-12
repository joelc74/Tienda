import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Tienda } from '../interfaces/tienda.interface';

@Component({
  selector: 'app-add-store-form',
  templateUrl: './add-store-form.page.html',
  styleUrls: ['./add-store-form.page.scss'],
  standalone: false
})
export class AddStoreFormPage implements OnInit {
  tienda: Tienda = {
    id: 0,
    nombre: '',
    direccion: '',
    email: '',
    telefono: ''
  };

  isEditMode = false; // 👈 Saber si estamos editando

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Ver si viene un id por parámetro
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadTienda(parseInt(id));
    }
  }

  // Cargar tienda si estamos en modo edición
  loadTienda(id: number) {
    console.log('🔍 Buscando tienda con ID:', id);
    this.storeService.getStoreById(id).subscribe({
      next: (data) => {
        console.log('✅ Tienda encontrada:', data);
        this.tienda = data;
      },
      error: async (err) => {
        console.error('❌ Error al cargar tienda:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo cargar la tienda para editar.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  // Guardar o actualizar según el modo
  async onSubmit() {
    if (!this.tienda.nombre || !this.tienda.direccion || !this.tienda.email || !this.tienda.telefono) {
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
      this.storeService.editStore(this.tienda.id, this.tienda).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Tienda actualizada correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-store']);
        },
        error: async (err) => {
          console.error('❌ Error al actualizar la tienda:', err);
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al actualizar la tienda.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      // 🟢 MODO CREAR
      const formData = new FormData();
      formData.append('nombre', this.tienda.nombre);
      formData.append('direccion', this.tienda.direccion);
      formData.append('email', this.tienda.email);
      formData.append('telefono', this.tienda.telefono);

      this.storeService.addStore(this.tienda).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Tienda añadida correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-store']);
        },
        error: async () => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al agregar la tienda.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }
}
