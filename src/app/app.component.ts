import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectionComponent } from './components/selection/selection.component';
import { AccountComponent } from './components/account/account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectionComponent, AccountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-parent-child';
}
