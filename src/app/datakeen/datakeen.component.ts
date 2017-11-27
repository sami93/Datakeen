import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-datakeen',
  templateUrl: './datakeen.component.html',
  styleUrls: ['./datakeen.component.css']
})
export class DatakeenComponent implements OnInit {
  datakeen: any;
  tab = [this.datakeen];
  symbole = ['ä', 'ê', 'ë', 'ô', 'î', 'ï', 'ô', 'ö', 'û', 'ü', 'ÿ', '€', '#', '+', '*', ' '
    , '"', '²', '&', 'é', '~', '"', '{', '(', '[', '|', 'è', '`', 'ç', '^', 'à', 'à', ')', '}',
    '=', '}', '^', '$', '£', '¤', 'ù', '%', '*', 'µ', ',', '?', ';', ':', '/', '!', '§', '>', '<'];

  constructor() {
  }

  covert_tab(datakeen) {
    console.log(datakeen);

    for (let i in datakeen) {
      this.tab[i] = datakeen[i];
    }

  }

  test(caracter) {
    for (const car of  this.symbole) {
      if (caracter === car) {
        return false;
      }

    }

    return true;
  }

  ngOnInit() {
  }

}
