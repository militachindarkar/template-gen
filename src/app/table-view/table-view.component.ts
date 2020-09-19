import { TableData } from './../shared/table-data';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeData } from './../shared/home-data';
import { GenerateService } from './../shared/generate.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  providers:  [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TableViewComponent implements OnInit {
  homedata: HomeData;
  tabledata: TableData[] = [];
  totalModule: number;

  tableFormGroup: FormGroup =  new FormGroup({
    static: new FormControl(''),
    editorType: new FormControl(''),
  });
  constructor(private cdr?: ChangeDetectorRef) {
    if(!this.homedata) {
      this.homedata = {
        partSize: 1,
        gsSize: 0,
        fillAnswer: "wfa",
        accessible: false
      }
    }
    this.tabledata.push({
      stepname: "stepName",
      type: "type",
      static: false,
      editorType: "formed",
      totalEB: 1,
      totalDDM: 0,
      tries: 3,
      stepLabel: false,
      separateDDMAP: false,
      totalActStmt: 0,
      totalPassStmt: 0,
      editorPos: 0,
      tablePos: []
    })
  }

  ngOnInit(): void {

  }

  // generate template isl ang eng
  onGenerate() {

  }

  //populate default table view with part and gs numbers
  populateTableDataArray(data : HomeData) {
    let stepName = "";
    let type = "";
    for (let index = 1; index <= this.totalModule; index++) {
      if (index <= data.partSize) {
        stepName = 'I' + index;
        type = 'I';

      } else {
        stepName = 'GS' + (index - data.partSize);
        type = 'GS';
      }
      let d = {
        stepname: stepName,
        type: type,
        static: false,
        editorType: "formed",
        totalEB: 1,
        totalDDM: 0,
        tries: 3,
        stepLabel: false,
        separateDDMAP: false,
        totalActStmt: 0,
        totalPassStmt: 0,
        editorPos: 0,
        tablePos: []
      }
      //this.tabledata = [...this.tabledata, data1]
      this.tabledata = this.tabledata.concat(d);
      this.cdr.detectChanges();
    }

    console.log(this.tabledata)
  }

  generateTable(data : HomeData) {
    this.homedata = data;
    this.totalModule = data.partSize + data.gsSize;
    this.populateTableDataArray(data);

  }
}
