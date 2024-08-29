import { Component } from '@angular/core';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  amount: number = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAmount.subscribe(amount => {
      this.amount = amount;
    });
  }

}
