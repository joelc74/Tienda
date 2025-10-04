import { Component, OnInit } from '@angular/core';
import { StoreService }  from '../services/store-service';


@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.page.html',
  styleUrls: ['./my-store.page.scss'],
  standalone: false
})
export class MyStorePage implements OnInit {

  store: any = [];

  constructor(private storeService:StoreService) { }

  ngOnInit() {
    this.getAllStore();
  }

  getAllStore(){
    this.storeService.getAllStore().subscribe((response) => {
      this.store = response;
    });
  }

}
