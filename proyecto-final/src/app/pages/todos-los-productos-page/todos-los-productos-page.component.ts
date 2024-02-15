import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListaProductosComponent } from '../../components/lista-productos/lista-productos.component';

@Component({
  selector: 'app-todos-los-productos-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ListaProductosComponent],
  templateUrl: './todos-los-productos-page.component.html',
  styleUrl: './todos-los-productos-page.component.css'
})
export class TodosLosProductosPageComponent {

}
