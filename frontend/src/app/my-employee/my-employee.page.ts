
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { AlertController, ToastController } from '@ionic/angular';
import { Empleado } from '../interfaces/empleado.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-employee',
  templateUrl: './my-employee.page.html',
  styleUrls: ['./my-employee.page.scss'],
  standalone: false
})
export class MyEmployeePage implements OnInit {
  employee: Empleado[] = [];
  filteredEmployee: Empleado[] = [];
  searchTerm: string = '';

  constructor(
    private employeeService: EmployeeService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getEmployee().subscribe({
      next: (response) => {
        this.employee = response || [];
        this.filteredEmployee = [...this.employee];
      },
      error: (error) => {
        console.error('Error al obtener Empleado:', error);
      }
    });
  }

  // Búsqueda: intenta servidor primero, si falla, hace filtro local
  filterEmployee() {
    const term = (this.searchTerm || '').trim();
    if (!term) {
      this.filteredEmployee = [...this.employee];
      return;
    }

    // Intentamos búsqueda en servidor (si está implementada)
    this.employeeService.searchByName(term).subscribe({
      next: (res) => {
        this.filteredEmployee = res;
      },
      error: (err) => {
        console.warn('Búsqueda en servidor falló, usando filtro local', err);
        this.filteredEmployee = this.employee.filter(g =>
          g.nombre?.toLowerCase().includes(term.toLowerCase())
        );
      }
    });
  }

  // Navegar al formulario en modo edición (ruta: /edit-employee/:id)
  goToEdit(id: number) {
    this.router.navigate(['/edit-employee', id]);
  }


  // Confirmar eliminación
  async presentConfirm(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Borrado',
      message: '¿Estás seguro de que deseas borrar este empleado?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteEmployee(id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Empleado eliminado',
          duration: 1500,
          position: 'bottom'
        });
        await toast.present();
        this.getAllEmployee();
      },
      error: async (err) => {
        console.error('Error al eliminar:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo eliminar el empleado.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
