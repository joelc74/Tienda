
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Empleado } from '../interfaces/empleado.interface';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.page.html',
  styleUrls: ['./add-employee-form.page.scss'],
  standalone: false
})
export class AddEmployeeFormPage implements OnInit {
  empleado: Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    tipo_empleado: '',
    email: '',
    telefono: ''
  };

  isEditMode = false; // 👈 Saber si estamos editando

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Ver si viene un id por parámetro
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadEmpleado(parseInt(id));
    }
  }

  // Cargar Empleado si estamos en modo edición
  loadEmpleado(id: number) {
    console.log('🔍 Buscando empleado con ID:', id);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        console.log('✅ Empleado encontrado:', data);
        this.empleado = data;
      },
      error: async (err) => {
        console.error('❌ Error al cargar empleado:', err);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo cargar empleado para editar.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  // Guardar o actualizar según el modo
  async onSubmit() {
    if (!this.empleado.nombre || !this.empleado.apellido ||  !this.empleado.tipo_empleado || !this.empleado.email || !this.empleado.telefono) {
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
      this.employeeService.editEmployee(this.empleado.id, this.empleado).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Empleado actualizado correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-employee']);
        },
        error: async (err) => {
          console.error('❌ Error al actualizar empleado:', err);
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al actualizar empleado.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      // 🟢 MODO CREAR
      const formData = new FormData();
      formData.append('nombre', this.empleado.nombre);
      formData.append('apellido', this.empleado.apellido);
      formData.append('tipo_empleado', this.empleado.tipo_empleado);
      formData.append('email', this.empleado.email);
      formData.append('telefono', this.empleado.telefono);

      this.employeeService.addEmployee(this.empleado).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Empleado añadido correctamente.',
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/my-employee']);
        },
        error: async () => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al agregar empleado.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }
}
