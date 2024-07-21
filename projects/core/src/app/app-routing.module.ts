import { CrudCompaniesModule } from './../../../external-companies/src/app/crud-companies/crud-companies.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'crud-partner',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'partner',
          exposedModule: './CrudPartnerModule'
        }).then(m => m.CrudPartnerModule).catch(err => console.error('Error loading remote module', err))
      },
      {
        path: 'crud-companies',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'externalCompanies',
          exposedModule: './CrudCompaniesModule'
        }).then(m => m.CrudCompaniesModule).catch(err => console.error('Error loading remote module', err))
      },
      {
        path: 'list-p',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4203/remoteEntry.js',
          remoteName: 'listPartner',
          exposedModule: './ListPModule'
        }).then(m => m.ListPModule).catch(err => console.error('Error loading remote module', err))
      },
      {
        path: 'list-c',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4204/remoteEntry.js',
          remoteName: 'listExternalCompanies',
          exposedModule: './ListCModule'
        }).then(m => m.ListCModule).catch(err => console.error('Error loading remote module', err))
      },
      {
        path: 'about-company',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4205/remoteEntry.js',
          remoteName: 'about',
          exposedModule: './AboutCompanyModule'
        }).then(m => m.AboutCompanyModule).catch(err => console.error('Error loading remote module', err))
      }

    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
