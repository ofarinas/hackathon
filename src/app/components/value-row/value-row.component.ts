import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value-row',
  templateUrl: './value-row.component.html',
  styleUrls: ['./value-row.component.scss']
})
export class ValueRowComponent implements OnInit {
  @Input() data;
  @Output() changed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onValueChange(value) {
    this.data.value = parseInt(value);
    this.changed.emit();
  }

  onInflationChange(value) {
    this.data.inflation = parseInt(value);
  }
}

export class valueRow {
  color?: string;
  title: string;
  value: number;
  inflation: number;
}
