import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule, routingComponents,} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import {NgChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GraficoBarrasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    NgChartsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
