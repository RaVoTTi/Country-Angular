import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule, // TAMBIEN PERO EL OTRO ES MAS PRECISO
    RouterModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
