import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopkeeperDashboardComponent } from './shopkeeper-dashboard/shopkeeper-dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardContent } from './dashboard-content/dashboard-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopkeeperService } from './services/shopkeeper.service';
import { AuthenticationService } from './services/authentication.service'
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { NewitemComponent } from './newitem/newitem.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CartComponent } from './cart/cart.component';
import { CustomerService } from './services/customer.service';
import { UserService } from './services/user.service';


// To implement routing facility so that we can route components on basics of URL.
// Array of routes in the whole website.
const routes: Routes = [
  // redirect to home when user types URL as localhost:4200
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'login', component : MainPageComponent },
  { path: 'home', component : MainPageComponent },
  { path: 'customer', redirectTo:'customer/dashboard', pathMatch:'full'},
  { path: 'customer/dashboard', component: CustomerDashboardComponent },
  { path: 'shopkeeper', redirectTo:'shopkeeper/dashboard', pathMatch:'full'},
  { path: 'shopkeeper/dashboard', component : ShopkeeperDashboardComponent},
  { path: 'shopkeeper/dashboard/newItem', component : NewitemComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ShopkeeperDashboardComponent,
    MainPageComponent,
    DashboardContent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    AuthenticationComponent,
    FooterComponent,
    CarouselComponent,
    CustomerDashboardComponent,
    NewitemComponent,
    EditItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ShopkeeperService, HttpClient, AuthenticationService, CustomerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
