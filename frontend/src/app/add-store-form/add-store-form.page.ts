import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../services/store-service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-store-form',
  templateUrl: './add-store-form.page.html',
  styleUrls: ['./add-store-form.page.scss'],
  standalone: false
})
export class AddStoreFormPage {
  tienda = {
    nombre: '',
    direccion: '',
    email: '',
    telefono: ''
  };



  constructor(
    private storeService: StoreService,
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  // Envia el formulario con los datos
  async onSubmit() {
    if (!this.tienda.nombre || !this.tienda.direccion || !this.tienda.email || !this.tienda.telefono) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completar todos los campos del formulario',
        buttons: ['OK']
      })
      await alert.present();
      return;
    }
    const formData = new FormData();
    formData.append('nombre', this.tienda.nombre);
    formData.append('direccion', this.tienda.direccion);
    formData.append('email', this.tienda.email);
    formData.append('telefono', this.tienda.telefono);


    // Llama al servicio para enviar el formulario
    this.storeService.addStore(formData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Exito',
          message: 'La galería ha sido añadida correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/my-store']);// Redirige ala la lista de la tienda
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al agregar la Tienda. Inténtelo de nuevo.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

}
