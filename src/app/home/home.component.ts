import { HomeData } from './../shared/home-data';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenerateService } from './../shared/generate.service';
import { TableViewComponent } from './../table-view/table-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData : HomeData;
  homeFormGroup: FormGroup =  new FormGroup({
    partSize: new FormControl(1),
    gsSize: new FormControl(0),
    fillAnswer: new FormControl('wfa'),
    accessible: new FormControl(false)
  });

  constructor(private generateService: GenerateService) {
    this.homeData = this.homeFormGroup.value;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.homeData = this.homeFormGroup.value;
    console.log("on form submit:" + JSON.stringify(this.homeFormGroup.value))
    this.generateService.generateTableView(this.homeData);
  }

  changeFAToggle($event: any, faval: string) {
    this.homeFormGroup.reset();
    this.homeFormGroup.setValue({
      partSize: 1,
      gsSize: 0,
      fillAnswer: faval,
      accessible: false
    });
    this.homeData = this.homeFormGroup.value;

  }
}
