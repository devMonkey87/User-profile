import { ListComponent } from './list/list.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { User } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'User profile';
  visible = true;
  showProfile = false;
  iteraciones = 0;
  users: User[] = [];
  step = 'uno';
  footerColor = true;


  @ViewChild('lista') heroe: ListComponent;


  ngOnInit(){
    this.iteraciones = 1;
    this.visible = false;
    this.initUsers();
  }
   ngAfterViewInit() {

  }

  private initUsers() {
    for (let index = 0; index < 20; index++) {
      const user: User = {
        id: index,
        url: 'www.test'+index+'.com'
      };
      this.addUser(user);
    }
  }

  private addUser(user: User){
    this.users.push(user);
  }

  clicked() {
    this.visible = !this.visible;
  }

  exito(textito: string) {
    console.log(textito);
    this.title = textito.toLocaleUpperCase();
  }

  public toggleColor() {
    this.footerColor = !this.footerColor;
  }
}
