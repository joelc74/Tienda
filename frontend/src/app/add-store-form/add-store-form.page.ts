import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Tienda } from '../interfaces/tienda.interface';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-store-form',
  standalone: true,

  templateUrl: './add-store-form.page.html',
  styleUrls: ['./add-store-form.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class AddStoreFormPage implements OnInit {
  tienda: Tienda = {
    id: 0,
    nombre: '',
    direccion: '',
    email: '',
    telefono: '',
    filename: ''

  };

  isEditMode = false; // 👈 Saber si estamos editando

  capturedPhoto: string = "";

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    // Ver si viene un id por parámetro
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadTienda(parseInt(id));
    }
  }
  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : '';

    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : '';

    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = "";
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

    // 📸 Si hay una foto tomada o elegida, la convertimos a File
    let file: File | undefined;
    if (this.capturedPhoto) {
      file = await this.urlToFile(this.capturedPhoto);
    }

    console.log('📦 Datos a enviar:', this.tienda);
    console.log('📷 Archivo:', file);

    if (this.isEditMode) {
      // ✏️ EDITAR TIENDA
      this.storeService.editStore(this.tienda.id, this.tienda, file).subscribe({
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
       // ➕ CREAR TIENDA
      this.storeService.createStore(this.tienda, file).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Tienda añadida correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-store']);
        },
        error: async (err) => {
          console.error('❌ Error al crear tienda:', err);
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


  private async urlToFile(url: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    const filename = `tienda_${Date.now()}.jpg`;
    return new File([blob], filename, { type: blob.type });
  }

}
