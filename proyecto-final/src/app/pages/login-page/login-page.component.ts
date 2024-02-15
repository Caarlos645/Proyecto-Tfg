import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ListaProductosComponent } from '../../components/lista-productos/lista-productos.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ HeaderComponent, ListaProductosComponent, FooterComponent, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
