import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Mail } from '../../../core/models/mail';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  mail: Mail;

  @Output()
  select: EventEmitter<Mail> = new EventEmitter<Mail>();

  constructor() { }

  ngOnInit() {
  }

}
