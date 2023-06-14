import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { ExclusaoComponente } from './exclusao/exclusao.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ExclusaoComponente,
    CreateUserComponent,
    UpdateFormComponent,
    AnalyticComponent,
    HeaderComponent,
    CategoriesComponent,
    MainDashboardComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
