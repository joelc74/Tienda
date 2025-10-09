import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../services/store-service';
import { response, Router } from 'express';

@Component({
  selector: 'app-add-store-form',
  templateUrl: './add-store-form.page.html',
  styleUrls: ['./add-store-form.page.scss'],
  standalone: false
})
export class AddStoreFormPage implements OnInit {

  storeForm:FormGroup;
  router: any;

  constructor(public formBuilder: FormBuilder,
    private storeService: StoreService,
    private route: Router
 ) {
  this.storeForm = this.formBuilder.group({
    brandStore:['',Validators.compose([Validators.required])],
    modelStore:['',Validators.compose([Validators.required])]
  })
  }

  ngOnInit() {
  }

  createStore(){
    if(this.storeForm.valid){
      console.log('Formulario válido',this.storeForm.value);
      this.storeService.create(this.storeForm.value).subscribe(response => {
        this.router.navigate("/my-store");
      })
    }else{
      console.log("Formulario no válido")
    }
  }
  getFormControl(field:string){
    return this.storeForm.get(field);
  }

}
