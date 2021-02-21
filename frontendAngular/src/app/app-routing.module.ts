import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoStoreComponent } from './encabezado-store/encabezado-store.component'
import { ContenidoStoreComponent } from './contenido-store/contenido-store.component'

const routes: Routes = [
  {
    path:'',
    component:EncabezadoStoreComponent,
    pathMatch:"full",
  },
  { 
    path: '', 
    component: ContenidoStoreComponent, 
    outlet:'secondary' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
