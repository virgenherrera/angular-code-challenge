import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediatorDataService {
  private valueSubject$: Subject<number>;
  valueSubjectObservable$: Observable<number>;

  private incorrectValueSubject$: Subject<boolean>;
  incorrectValueObservable$: Observable<boolean>;

  constructor() {
    this.valueSubject$ = new Subject();
    this.valueSubjectObservable$ = this.valueSubject$.asObservable();

    this.incorrectValueSubject$ = new Subject();
    this.incorrectValueObservable$ = this.incorrectValueSubject$.asObservable();
  }

  startProcess(value: number) {
    this.valueSubject$.next(value);
  }

  notifyIncorrectValue(showComponent: boolean) {
    this.incorrectValueSubject$.next(showComponent);
  }
}
