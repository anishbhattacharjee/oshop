import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { UserService } from './user.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule, CanActivate } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';


import { AppComponent } from 'src/app/app.component';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    BsNavbarComponent,

    HomeComponent,

    ProductsComponent,

    ShopingCartComponent,

    CheckOutComponent,

    OrderSuccessComponent,

    MyOrdersComponent,

    AdminProductsComponent,

    AdminOrdersComponent,

    LoginComponent,

    ProductFormComponent
  ],
  imports: [

  BrowserModule,
  FormsModule,
  CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shoping-cart', component: ShopingCartComponent  },
      { path: 'login', component: LoginComponent },

      { path: 'check-out', component: CheckOutComponent , canActivate: [ AuthGaurdService ] },
      { path: 'order-success', component: OrderSuccessComponent , canActivate: [ AuthGaurdService ] },
      { path: 'my/orders', component: MyOrdersComponent , canActivate: [ AuthGaurdService ]},

      {
        path: 'admin/products/new',
         component: ProductFormComponent,
          canActivate: [ AuthGaurdService, AdminAuthGaurdService ]
         },
      {
         path: 'admin/products',
          component: AdminProductsComponent,
           canActivate: [ AuthGaurdService, AdminAuthGaurdService ]
          },
      {
         path: 'admin/orders',
         component: AdminOrdersComponent,
         canActivate: [ AuthGaurdService, AdminAuthGaurdService ]
        }
    ])

  ],
  providers: [
    AuthService,
    AuthGaurdService,
    UserService,
    AdminAuthGaurdService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
