import { Component } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  availableCards: any[] = [
    {
      cardNumber: '1234 5678 9101 1123',
      cvv: '1234',
      validity: '10/24',
      cardHolder: 'Catalin Mates',
      title: 'Visa'
    },

    {
      cardNumber: '9802 1235 7345 9201',
      cvv: '6347',
      validity: '10/24',
      cardHolder: 'Catalin Mates',
      title: 'Visa'
    },
    {
      cardNumber: '3834 8347 1246 2753',
      cvv: '8402',
      validity: '10/24',
      cardHolder: 'Catalin Mates',
      title: 'Visa'
    }
  ];
  title = 'glass-morphism';

  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}
