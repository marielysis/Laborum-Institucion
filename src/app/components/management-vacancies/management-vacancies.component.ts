import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//MODELO DE AVISOS
import { jobVacanciesMoldels } from '../../models/jobVacancies.model';

@Component({
  selector: 'app-management-vacancies',
  templateUrl: './management-vacancies.component.html',
  styleUrls: ['./management-vacancies.component.css']
})
export class ManagementVacanciesComponent implements OnInit {

 // Declarando variable donde se almacena resp del getTabls para poder pintarla en la interfaz
 vacancies: jobVacanciesMoldels[] = [];

  status:string[]=["Aprobado","Rechazado"];
  selected:string[]=[];
  constructor(private authService:AuthService ) { }

  ngOnInit() {

    this.authService.getjobVacan()
        .subscribe( resp =>{
          console.log('entro a asignar la data');
           this.vacancies = resp;
           console.log(this.vacancies)
          
          });

  }

}
