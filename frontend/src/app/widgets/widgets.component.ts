import { Component, OnInit } from '@angular/core';
import { BackendService } from '../_services';
import { Widget } from './widget';

interface WidgetsResponse {
  widgets: Widget[];
}

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit(): void {
    this.backend.get('/api/widgets').subscribe((response: Object) => {
      this.widgets = (response as WidgetsResponse).widgets;
    });
  }
}
