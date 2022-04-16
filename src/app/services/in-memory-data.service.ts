import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PROFILE } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const profile: PROFILE[] = [
      {
        name: "John Doe",
        email: "john.doe@gmail.com",
        mobile: "",
        configuration: [
          {
            id: 1,
            configuration_type: 'Manual Configuration',
            description:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            checked: true,
            options: {
              name: 'Services Access',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.'
            }
          },
          {
            id: 2,
            configuration_type: 'Semi-auto Configuration',
            description:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            checked: false,
          },
          {
            id: 3,
            configuration_type: 'Automatic Configuration',
            description:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            checked: false,
          }
        ]
      },

    ];
    return { profile };
  }
}
