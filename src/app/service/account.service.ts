import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  private amount = new BehaviorSubject(0);
  getAmount = this.amount.asObservable();

  setAmount(amount: number) {
    this.amount.next(amount);
  }
}
