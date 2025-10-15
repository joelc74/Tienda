
import { Component, OnInit } from '@angular/core';
import { SuplierService } from '../services/suplier-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Proveedor } from '../interfaces/proveedor.interface';

@Component({
  selector: 'app-add-suplier-form',
  templateUrl: './add-suplier-form.page.html',
  styleUrls: ['./add-suplier-form.page.scss'],
  standalone: false
})
export class AddSuplierFormPage implements OnInit {
  proveedor: Proveedor = {
    id: 0,
    nombre: '',
    cif: '',
    direccion: '',
    email: '',
    telefono: ''
  };

  isEditMode = false; // 👈 Saber si estamos editando

  constructor(
    private suplierService: SuplierService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Ver si viene un id por parámetro
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadProveedor(parseInt(id));
    }
  }

  // Cargar Proveedor si estamos en modo edición
  loadProveedor(id: number) {
    console.log('🔍 Buscando proveedor con ID:', id);
    this.suplierService.getSuplierById(id).subscribe({
      next: (data) => {
        console.log('✅ Proveedor encontrado:', data);
        this.proveedor = data;
      },
      error: async (err) => {
        console.error('❌ Error al cargar proveedor:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo cargar proveedor para editar.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  // Guardar o actualizar según el modo
  async onSubmit() {
    if (!this.proveedor.nombre || !this.proveedor.cif || !this.proveedor.direccion || !this.proveedor.email || !this.proveedor.telefono) {
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
      this.suplierService.editSuplier(this.proveedor.id, this.proveedor).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Proveedor actualizado correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-suplier']);
        },
        error: async (err) => {
          console.error('❌ Error al actualizar proveedor:', err);
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al actualizar proveedor.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      // 🟢 MODO CREAR
      const formData = new FormData();
      formData.append('nombre', this.proveedor.nombre);
      formData.append('cif', this.proveedor.cif);
      formData.append('direccion', this.proveedor.direccion);
      formData.append('email', this.proveedor.email);
      formData.append('telefono', this.proveedor.telefono);

      this.suplierService.addSuplier(this.proveedor).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Proveedor añadido correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-suplier']);
        },
        error: async () => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al agregar proveedor.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }
}
