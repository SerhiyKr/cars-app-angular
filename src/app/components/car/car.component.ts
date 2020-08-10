import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый'
    };
    this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
  }

  // tslint:disable-next-line:typedef
  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  // tslint:disable-next-line:typedef
  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }
  // tslint:disable-next-line:typedef
  isEditing() {
    this.isEdit = !this.isEdit;
  }

  // tslint:disable-next-line:typedef
  carSelect(carName) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'X5';
      this.colors = {
        car: 'Черный',
        salon: 'Коричневый',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг'];
    } else if (carName === 'mer') {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C5';
      this.colors = {
        car: 'Синий',
        salon: 'Черный',
        wheels: 'Серебристый'
      };
      this.options = ['Кондиционер', 'ABS', 'Автопилот', 'Авто Паркинг'];
    }
  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
