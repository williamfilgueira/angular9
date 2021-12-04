import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule} from '@angular/common/http';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { RedDirective } from "./directives/red.directive";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component"; //diretiva de estilos
import { FormsModule} from '@angular/forms'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
