import { GithubService } from './services/github.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { TableComponent } from './table/table/table.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http/public_api';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';








@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
