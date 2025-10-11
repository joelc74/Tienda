import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store-service';
import { AlertController, ToastController } from '@ionic/angular';
import { Tienda } from '../interfaces/tienda.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.page.html',
  styleUrls: ['./my-store.page.scss'],
  standalone: false
})
export class MyStorePage implements OnInit {
  store: Tienda[] = [];
  filteredStore: Tienda[] = [];
  searchTerm: string = '';

  constructor(
    private storeService: StoreService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllStore();
  }

  getAllStore() {
    this.storeService.getStore().subscribe({
      next: (response) => {
        this.store = response || [];
        this.filteredStore = [...this.store];
      },
      error: (error) => {
        console.error('Error al obtener tiendas:', error);
      }
    });
  }

  // Búsqueda: intenta servidor primero, si falla, hace filtro local
  filterStore() {
    const term = (this.searchTerm || '').trim();
    if (!term) {
      this.filteredStore = [...this.store];
      return;
    }

    // Intentamos búsqueda en servidor (si está implementada)
    this.storeService.searchByName(term).subscribe({
      next: (res) => {
        this.filteredStore = res;
      },
      error: (err) => {
        console.warn('Búsqueda en servidor falló, usando filtro local', err);
        this.filteredStore = this.store.filter(g =>
          g.nombre?.toLowerCase().includes(term.toLowerCase())
        );
      }
    });
  }

  // Navegar al formulario en modo edición (ruta: /edit-store/:id)
  goToEdit(id: number) {
    this.router.navigate(['/add-store-form', id]);
  }

  // Confirmar eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar esta tienda?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteStore(id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteStore(id: number) {
    this.storeService.deleteStore(id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Tienda eliminada',
          duration: 1500,
          position: 'bottom'
        });
        await toast.present();
        this.getAllStore();
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo eliminar la tienda.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
