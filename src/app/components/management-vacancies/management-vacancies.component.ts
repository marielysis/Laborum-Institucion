import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-vacancies',
  templateUrl: './management-vacancies.component.html',
  styleUrls: ['./management-vacancies.component.css']
})
export class ManagementVacanciesComponent implements OnInit {
  status:string[]=["Aprobado","Rechazado"];
  selected:string[]=[];
  constructor() { }

  ngOnInit() {
  }

}
