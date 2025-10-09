import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store-service';
import { AlertController } from '@ionic/angular'; // Importamos AlertController
import { Tienda } from '../interfaces/tienda.interface';
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

  constructor(private storeService: StoreService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.getAllStore();
  }


  // Obtener todas las tiendas
  getAllStore() {
    this.storeService.getStore().subscribe((response) => {
      this.store = response;
      this.filteredStore = this.store;
    },
      (error) => {
        console.error("Error al obtener tienda:", error)
      });
  }

  // Filtrar las tiendas según el término de búsqueda
  filterStore() {
    this.filteredStore = this.searchTerm
      ? this.store.filter((g: Tienda) =>
        g.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      : this.store;
  }

  // Método para editar una Tienda
  async editStore(id: number) {
    const store = this.store.find(g => g.id === id);
    if (!store) return;

    const alert = await this.alertController.create({
      header: 'Modificar Tienda',
      inputs: [
        { name: 'nombre', type: 'text', value: store.nombre, placeholder: 'Nombre de la Tienda' },
        { name: 'direccion', type: 'text', value: store.direccion, placeholder: 'Dirección' },
        { name: 'email', type: 'text', value: store.email, placeholder: 'Email' },
        { name: 'telefono', type: 'text', value: store.telefono, placeholder: 'Teléfono' },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: data => {
            const updatedStore: Tienda = {
              ...store,  // Usar los datos existentes
              nombre: data.nombre,
              direccion: data.direccion,
              email: data.email,
              telefono: data.telefono,
            };
            this.storeService.editStore(id, updatedStore).subscribe(() => {
              this.getAllStore(); // Recargar la lista de tiendas después de la edición
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // Método de confirmación de eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar esta tienda?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
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

  // Método para eliminar una Tienda
  deleteStore(id: number) {
    this.storeService.deleteStore(id).subscribe(
      (response) => {
        console.log('Galería eliminada:', response);
        this.getAllStore(); // Recargar las tiendas después de eliminar
      },
      (error) => {
        console.error('Error al eliminar tienda:', error);
      }
    );
  }

}
