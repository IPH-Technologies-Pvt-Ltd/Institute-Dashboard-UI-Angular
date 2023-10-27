import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { WeeklyComponent } from './Components/weekly/weekly.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { SearchComponent } from './Components/search/search.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChartComponent } from './Components/chart/chart.component';
// import 'chart.js';
import { ChartModule } from 'primeng/chart';
import { MultipleProgressComponent } from './Components/multiple-progress/multiple-progress.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { HorizontalChartComponent } from './Components/horizontal-chart/horizontal-chart.component';
import { RoundedProgressComponent } from './Components/rounded-progress/rounded-progress.component';
import { VerticalChartComponent } from './Components/vertical-chart/vertical-chart.component';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeeklyComponent,
    CalendarComponent,
    ProgressBarComponent,
    SearchComponent,
    LineChartComponent,
    ChartComponent,
    MultipleProgressComponent,
    PieChartComponent,
    HorizontalChartComponent,
    RoundedProgressComponent,
    VerticalChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    NgChartsModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    TagModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    DropdownModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
