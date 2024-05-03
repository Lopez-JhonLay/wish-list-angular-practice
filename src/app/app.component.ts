import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Gets Coffee'),
    new WishItem('Find grass that cuts itself')
  ]
  title = 'Jhon Lay';
  
  listFilter : String = '0';
  get filteredItems() : WishItem[] {
    let value = this.listFilter;

    if(value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter(item => !item.isComplete);
    } else {
      return this.items.filter(item => item.isComplete);
    }
  }

}
