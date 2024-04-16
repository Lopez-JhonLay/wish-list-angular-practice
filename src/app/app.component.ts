import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    // new WishItem('To Learn Angular'),
    // new WishItem('Gets Coffee'),
    // new WishItem('Find grass that cuts itself')
  ]
  title = 'Jhon Lay';
  newWishText = '';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
