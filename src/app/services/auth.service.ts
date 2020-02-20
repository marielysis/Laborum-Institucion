import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map} from "rxjs/operators";

//MODELO DE AVISOS
import { jobVacanciesMoldels } from '../models/jobVacancies.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

//variables para coleccion
private jobVacanCollection: AngularFirestoreCollection<jobVacanciesMoldels>

//Variable para arrays
arrayjobVacan: Observable<jobVacanciesMoldels[]>;

constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore ) { 
  
   /////////////////////////////////DATA DEL AVISO///////////////////////////////////////////
///////////////////////////////Peticion de coleccion de avisos//////////////////////////////////////
this.jobVacanCollection = afs.collection<jobVacanciesMoldels>('newJobAnnouncementiinstitutions');

 /////////Guardando coleccion en array/////////////////
 this.arrayjobVacan = this.jobVacanCollection.snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as jobVacanciesMoldels;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);


}

}

     ////////////////////////////////////////////////////////////////
  /////////////////FUNCION QUE RETORNA TODA LA DATA DE AVISOS///////////////
    getjobVacan(){
      return this.arrayjobVacan
    }

}


