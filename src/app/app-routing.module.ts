import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './store/pages/home/home.component';


const routes: Routes = [
   {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module').then(m => m.AuthModule)
   },
   {
    path: 'store',
    loadChildren: () => import( './store/store.module').then(m => m.StoreModule)
   },
   {
    path: 'admin',
    loadChildren: () => import( './admin/admin.module').then(m => m.AdminModule)
   },
   {
    path: '',  
    redirectTo: 'store',
    pathMatch: 'full'
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
