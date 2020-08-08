import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Protección de rutas
import { AuthGuard } from '../../guards/auth.guard';

//Componentes
import { PerfilComponent } from './perfil/perfil.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MyproductsComponent } from './products/myproducts/myproducts.component';
import { ComprasComponent } from './compras/compras.component';
import { LandingComponent } from './landing/landing.component';
import { OffersComponent } from './offers/offers.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VendedorprofilesComponent } from './vendedorprofiles/vendedorprofiles.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const childHomeRoutes: Routes = [
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'about',
        component: InformacionComponent
    },
    {
        path: 'misProductos',
        component: MyproductsComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'compras',
        component: ComprasComponent
    },
    {
        path: 'offers',
        component: OffersComponent
    },
    {
        path: 'vendedores',
        component: VendedoresComponent
    },
    {
        path: 'vendedor/:id',
        component: VendedorprofilesComponent
    },
    {
      path: 'detalle/:id',
      component: DetalleProductoComponent
  }
];

@NgModule({
    imports: [ RouterModule.forChild(childHomeRoutes) ],
    exports: [ RouterModule ]
  })
  export class ChildHomeRoutesModule { }
