import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../pages/layout/main/navbar/navbar.component';
import {FooterComponent} from '../pages/layout/main/footer/footer.component';
import {SidebarComponent} from '../pages/layout/main/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
