import { QuienesSomosBodyComponent } from './../../components/quienes-somos-body/quienes-somos-body.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ListaProductosComponent } from '../../components/lista-productos/lista-productos.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-quienes-somos-page',
  standalone: true,
  imports: [HeaderComponent, ListaProductosComponent, FooterComponent, QuienesSomosBodyComponent],
  templateUrl: './quienes-somos-page.component.html',
  styleUrl: './quienes-somos-page.component.css'
})
export class QuienesSomosPageComponent {

}
