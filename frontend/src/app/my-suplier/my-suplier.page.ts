
import { Component, OnInit } from '@angular/core';
import { SuplierService } from '../services/suplier-service';
import { AlertController, ToastController } from '@ionic/angular';
import { Proveedor } from '../interfaces/proveedor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-suplier',
  templateUrl: './my-suplier.page.html',
  styleUrls: ['./my-suplier.page.scss'],
  standalone: false
})
export class MySuplierPage implements OnInit {
  suplier: Proveedor[] = [];
  filteredSuplier: Proveedor[] = [];
  searchTerm: string = '';

  constructor(
    private suplierService: SuplierService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllSuplier();
  }

  getAllSuplier() {
    this.suplierService.getSuplier().subscribe({
      next: (response) => {
        this.suplier = response || [];
        this.filteredSuplier = [...this.suplier];
      },
      error: (error) => {
        console.error('Error al obtener proveedor:', error);
      }
    });
  }

  // Búsqueda: intenta servidor primero, si falla, hace filtro local
  filterSuplier() {
    const term = (this.searchTerm || '').trim();
    if (!term) {
      this.filteredSuplier = [...this.suplier];
      return;
    }

    // Intentamos búsqueda en servidor (si está implementada)
    this.suplierService.searchByName(term).subscribe({
      next: (res) => {
        this.filteredSuplier = res;
      },
      error: (err) => {
        console.warn('Búsqueda en servidor falló, usando filtro local', err);
        this.filteredSuplier = this.suplier.filter(g =>
          g.nombre?.toLowerCase().includes(term.toLowerCase())
        );
      }
    });
  }

  // Navegar al formulario en modo edición (ruta: /edit-suplier/:id)
  goToEdit(id: number) {
    this.router.navigate(['/edit-suplier', id]);
  }


  // Confirmar eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar este proveedor?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteSuplier(id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteSuplier(id: number) {
    this.suplierService.deleteSuplier(id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Proveedor eliminado',
          duration: 1500,
          position: 'bottom'
        });
        await toast.present();
        this.getAllSuplier();
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo eliminar el proveedor.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
