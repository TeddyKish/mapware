import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GenericListComponent } from './components/generic-list/generic-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AnalyzePageComponent } from './components/analyze-page/analyze-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { VonsComponent } from './components/vons/vons.component';
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SubItemComponent } from './components/sub-item/sub-item.component';
import {MatSelectModule} from '@angular/material/select';
import { DetailsComponent } from './components/details/details.component';
// import { NgxEchartsModule } from 'ngx-echarts';
import { NgChartsModule } from 'ng2-charts';
import { DevelopersListComponent } from './components/developers-list/developers-list.component';
import { SpreadComponent } from './components/spread/spread.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenericListComponent,
    SideBarComponent,
    MainPageComponent,
    AnalyzePageComponent,
    AboutPageComponent,
    VonsComponent,
    DashboardComponent,
    SubItemComponent,
    DetailsComponent,
    DevelopersListComponent,
    SpreadComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSimpleSidebarModule,
//     NgxChartsModule,
MatAutocompleteModule,
MatSelectModule,
NgChartsModule,
HttpClientModule,
// NgxEchartsModule.forRoot({
//       echarts: () => import('echarts')
//     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
