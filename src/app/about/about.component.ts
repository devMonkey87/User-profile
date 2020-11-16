import { MatButtonModule } from "@angular/material/button";
import { from, Observable } from "rxjs";
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { MatMenuItem } from "@angular/material";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit, AfterViewInit {
  public saludo: string[] = [];
  public observr: Observable<string>[];
  public turnOn = false;
  public variable;
  public arrayccito = [1, 2, 3, 4];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initAll();
    this.turnOn = false;
    this.variable = false;
  }

  ngAfterViewInit() {}
  private initAll() {
    // console.log('hey', this.testeo.disabled);

    this.saludo = ["uno", "dos", "tres"];
    const test = from(this.saludo);
    const resultados: string[] = [];
    const valores = test.subscribe((vale) => {
      let x = vale.toUpperCase();
      console.log(x);
    });
  }

  public changeColor() {
    this.variable = !this.variable;
  }
}
