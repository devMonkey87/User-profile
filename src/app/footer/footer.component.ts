import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() colorcito;
  ngOnInit() {
    console.log(this.colorcito);
  }

  changeColor() {
    let x = document.getElementById('mu');
    x.style.backgroundColor = 'yellow';
  }

}
