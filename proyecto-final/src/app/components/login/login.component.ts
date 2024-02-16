import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
isActive: boolean = false;

activar () :void {
  this.isActive = true;
}

desactivar() :void {
  this.isActive = false;
}

}
