import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ListOfPropertiesPage } from './list-of-properties.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfPropertiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfPropertiesPage]
})
export class ListOfPropertiesPageModule {}
