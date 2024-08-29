import { Component } from '@angular/core';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {

  accountName1: string = 'Account 1';
  accountName2: string = 'Account 2';
  accountName3: string = 'Account 3';

  amount1: number = 100;
  amount2: number = 200;
  amount3: number = 300;

  constructor(private accountService: AccountService) {}

  updateAccount(accountName: string) {
    if (accountName === this.accountName1) {
      this.accountService.setAmount(this.amount1);
    } else if (accountName === this.accountName2) {
      this.accountService.setAmount(this.amount2);
    } else if (accountName === this.accountName3) {
      this.accountService.setAmount(this.amount3);
    }
    
  }

}
