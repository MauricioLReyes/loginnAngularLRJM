import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./componentes/card/card.component";
import { FormFieldComponent } from "./componentes/form-field/form-field.component";
import { ButtonGuardarComponent } from "./componentes/button-guardar/button-guardar.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormFieldComponent, ButtonGuardarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginAngular';
}
