// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
import { AngularFirestore } from "angularfire2/firestore";

import DataSnapshot = firebase.database.DataSnapshot;

import { Appareil } from '../models/Appareil';

export class AppareilsService {

  appareils$ = new Subject<Appareil[]>();

  //  private ref = firebase.firestore();


  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173 kWh/an'
      ],
      isOn: true,
      startTime: '',
      endTime: '',
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22 kWh/an'
      ],
      isOn: true,
      startTime: '',
      endTime: '',

    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500 kWh/an'
      ],
      isOn: false,
      startTime: '',
      endTime: '',
    }
  ];

  constructor(
//    private db: AngularFirestore
    ) {

  }

  /*
    saveData() {
      return new Promise((resolve, reject) => {
        firebase.database().ref('appareils').set(this.appareilsList).then(
          (data: DataSnapshot) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
    */
  /*
    retrieveData(): Observable<any> {
      return new Observable((observer) => {
        this.ref.onSnapshot((querySnapshot) => {
          let appareils = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log(data, doc);
            appareils.push({
              key: doc.id,
              title: data.title,
              description: data.description,
              synopsis: data.synopsis
            });
          });
          observer.next(appareils);
        });
      });
    }
  */
  /*
    saveData() {
      return new Promise((resolve, reject) => {
        firebase.database().ref('appareils').set(this.appareilsList).then(
          (data: DataSnapshot) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
  
    retrieveData() {
      return new Promise((resolve, reject) => {
        firebase.database().ref('appareils').once('value').then(
          (data: DataSnapshot) => {
            this.appareilsList = data.val();
            this.emitAppareils();
            resolve('Données récupérées avec succès !');
          }, (error) => {
            reject(error);
          }
        );
      });
    }
  */
  addAppareil(appareil: Appareil) {
    this.appareilsList.push(appareil);
  }

  emitAppareils() {
    this.appareils$.next(this.appareilsList.slice());
  }

}