import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { RockPaperScissorsPageComponent } from './rock-paper-scissors-page/rock-paper-scissors-page.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'rock-paper-scissors-page', component: RockPaperScissorsPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RockPaperScissorsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
