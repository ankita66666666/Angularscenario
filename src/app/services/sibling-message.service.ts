import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SiblingMessageService {

  private subject = new Subject<any>();

  constructor() { }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  /**
   * sendMessage
   */
  public sendMessage(message: string) {
    this.subject.next(message);
  }

}
