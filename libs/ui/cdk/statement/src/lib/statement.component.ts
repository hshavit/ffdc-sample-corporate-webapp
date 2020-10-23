import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AccountStatement } from '@ffdc/api_corporate-accounts/interfaces';
import {from} from 'rxjs';
import { groupBy, mergeMap, reduce, toArray } from 'rxjs/operators'

@Component({
  selector: 'fcbs-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  @Input() transactions: AccountStatement[];

  transactionsDate:any[];
  constructor() {}

  ngOnInit(): void {

    from(this.transactions).pipe(
      groupBy(item => item.postingDate),
      mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
      toArray()
   )
 

  .subscribe(x => {
    this.transactionsDate=x;
    }
    );
}

getAmountColor(item) {
  let color = '';
  if (item.transactionType === 'CREDIT') {
    color = 'var(--uxg-grass-100)';
  }
  return color;
}
}

// Skeleton

@Component({
  selector: 'fcbs-statement-skeleton',
  templateUrl: './statement.skeleton.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementSkeletonComponent {}
