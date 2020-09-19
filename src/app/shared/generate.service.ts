import { TableViewComponent } from './../table-view/table-view.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {
  public tblView : TableViewComponent = new TableViewComponent();
  constructor() { }

  generateTableView(data: any) {
    debugger
    this.tblView.generateTable(data);
  }
}
