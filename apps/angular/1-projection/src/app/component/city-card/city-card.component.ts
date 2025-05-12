import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card [type]="cardType" [customClass]="'bg-light-blue'">
      <img card-image src="assets/img/city.png" width="200" height="200" />

      <div card-list>
        <app-list-item
          *ngFor="let city of cities(); trackBy: trackByFn"
          [id]="city.id"
          [name]="city.name"
          [type]="cardType"></app-list-item>
      </div>

      <button
        card-action
        class="rounded-sm border border-green-500 bg-green-300 p-2"
        (click)="addCity()">
        Add
      </button>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(0, 129, 250, 0.1);
      }
    `,
  ],
  imports: [CardComponent, CommonModule, ListItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(CityStore);

  cities = this.store.cities;
  cardType = CardType.CITY;

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((c) => this.store.addAll(c));
  }

  addCity(): void {
    this.http.fetchCities$.subscribe((cities) => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      this.store.addOne(randomCity);
    });
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
