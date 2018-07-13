import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {  } from "native";

import { TableComponent } from './table/table.component';
import { ProductService } from "./product.service";
//import { HttpClientModule } from '@angular/common/http';
//import { DetailsComponent } from './details/details.component';
/* import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component:  },
  { path: '', component:  },
]; */

@NgModule({
  declarations: [
   
    TableComponent,
   
    //DetailsComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [ProductService],
  bootstrap: [TableComponent]
})
export class AppModule { }
