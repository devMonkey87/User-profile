import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'miProyectito';
  visible = false;

  clicked() {
    this.visible = !this.visible;
  }

  exito(textito: string) {
    console.log(textito);
    this.title = textito.toLocaleUpperCase();
  }
}
