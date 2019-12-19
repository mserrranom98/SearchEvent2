import {Component, OnInit} from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  currentHotel: any;

  Hotel = [
    {
    Id: 73,
    Hotel_Name: 'Hamburg Suites',
    Address: 'An Der Alster 82',
    Postal_Code: '20099',
    Hotel_Class: 'Diamond',
    City: 'Hamburg',
    Price: 299,
    Images: [{
      FileName: '1.jpg'
    }, {
      FileName: '2.jpg'
    }, {
      FileName: '3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: '3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-2.jpg'
    }, {
      FileName: 'Bathroom-0.jpg'
    }
    ]
  }, {
    Id: 75,
    Hotel_Name: 'The Stanadard Resort',
    Address: 'Steindamm 99',
    Postal_Code: '20359',
    Hotel_Class: 'Platinum',
    City: 'Hamburg',
    Price: 399,
    Images: [{
      FileName: 'Hamburg-5.jpg'
    }, {
      FileName: 'Lobby-14.jpg'
    }, {
      FileName: 'Bathroom-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-4.jpg'
    }, {
      FileName: 'Restaurant-15.jpg'
    }
    ]
  }, {
    Id: 76,
    Hotel_Name: 'The Park Hotel',
    Address: 'Borstelmannsweg 82',
    Postal_Code: '20537',
    Hotel_Class: 'Gold',
    City: 'Hamburg',
    Price: 289,
    Images: [{
      FileName: 'Hamburg-7.jpg'
    }, {
      FileName: 'Lobby-9.jpg'
    }, {
      FileName: 'Bathroom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg'
    }, {
      FileName: 'Restaurant-13.jpg'
    }
    ]
  }, {
    Id: 28,
    Hotel_Name: 'Honolulu Inn',
    Address: '822 Mauna Loa Rd',
    Postal_Code: '96801',
    Hotel_Class: 'Gold',
    City: 'Honolulu',
    Price: 111,
    Images: [{
      FileName: 'Honolulu-0.jpg'
    }, {
      FileName: 'Lobby-11.jpg'
    }, {
      FileName: 'Bedroom-4-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-14.jpg'
    }, {
      FileName: 'Restaurant-6.jpg'
    }
    ]
  }, {
    Id: 29,
    Hotel_Name: 'Waikiki Beach Hotel',
    Address: '800 Waikiki Beach Rd',
    Postal_Code: '96801',
    Hotel_Class: 'Diamond',
    City: 'Honolulu',
    Price: 399,
    Images: [{
      FileName: 'Honolulu-1.jpg'
    }, {
      FileName: 'Lobby-13.jpg'
    }, {
      FileName: 'Bathroom-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-4-10.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-3.jpg'
    }, {
      FileName: 'Restaurant-13.jpg'
    }
    ]
  }, {
    Id: 30,
    Hotel_Name: 'Waikiki Suites',
    Address: '900 Waikiki Beach Rd',
    Postal_Code: '96801',
    Hotel_Class: 'Platinum',
    City: 'Honolulu',
    Price: 399,
    Images: [{
      FileName: 'Honolulu-10.jpg'
    }, {
      FileName: 'Lobby-2.jpg'
    }, {
      FileName: 'Bedroom-4-11.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-4.jpg'
    }, {
      FileName: 'Restaurant-14.jpg'
    }
    ]
  }, {
    Id: 31,
    Hotel_Name: 'White Sand Resort',
    Address: '543 Sandy Beach Rd.',
    Postal_Code: '96801',
    Hotel_Class: 'Platinum',
    City: 'Honolulu',
    Price: 499,
    Images: [{
      FileName: 'Honolulu-2.jpg'
    }, {
      FileName: 'Lobby-32.jpg'
    }, {
      FileName: 'Bathroom-6.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-4-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-3.jpg'
    }, {
      FileName: 'Restaurant-7.jpg'
    }
    ]
  }, {
    Id: 35,
    Hotel_Name: 'Sandpiper Hotel',
    Address: '424 Sand Hill Rd',
    Postal_Code: '96801',
    Hotel_Class: 'Diamond',
    City: 'Honolulu',
    Price: 599,
    Images: [{
      FileName: 'Honolulu-6.jpg'
    }, {
      FileName: 'Lobby-21.jpg'
    }, {
      FileName: 'Bathroom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-4-8.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-8.jpg'
    }, {
      FileName: 'Restaurant-8.jpg'
    }
    ]
  }, {
    Id: 1,
    Hotel_Name: 'Grand Gold Resort',
    Address: '123 Las Vegas Blvd.',
    Postal_Code: '89120',
    Hotel_Class: 'Platinum',
    City: 'Las Vegas',
    Price: 90,
    Images: [{
      FileName: 'LV-0.jpg'
    }, {
      FileName: 'Bathroom-0.jpg'
    }, {
      FileName: 'Bedroom-1-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-0.jpg'
    }, {
      FileName: 'Restaurant-0.jpg'
    }
    ]
  }, {
    Id: 2,
    Hotel_Name: 'Desert Sun Resort',
    Address: '47 Las Vegas Blvd.',
    Postal_Code: '89119',
    Hotel_Class: 'Platinum',
    City: 'Las Vegas',
    Price: 105,
    Images: [{
      FileName: 'LV-1.jpg'
    }, {
      FileName: 'Lobby-1.jpg'
    }, {
      FileName: 'Bedroom-1-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-1.jpg'
    }, {
      FileName: 'Pool-1.jpg'
    }
    ]
  }, {
    Id: 4,
    Hotel_Name: 'Casino World Resort',
    Address: '28 Sunset Drive',
    Postal_Code: '89120',
    Hotel_Class: 'Diamond',
    City: 'Las Vegas',
    Price: 211,
    Images: [{
      FileName: 'LV-2.jpg'
    }, {
      FileName: 'Pool-11.jpg'
    }, {
      FileName: 'Lobby-11.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-3.jpg'
    }, {
      FileName: 'Restaurant-10.jpg'
    }
    ]
  }, {
    Id: 6,
    Hotel_Name: 'Paradise Resort',
    Address: '524 Paradise Road',
    Postal_Code: '89120',
    Hotel_Class: 'Platinum',
    City: 'Las Vegas',
    Price: 299,
    Images: [{
      FileName: 'LV-4.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }, {
      FileName: 'Bedroom-1-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-13.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-4.jpg'
    }, {
      FileName: 'Pool-14.jpg'
    }
    ]
  }, {
    Id: 7,
    Hotel_Name: 'Sun World Hotel',
    Address: '1000 Las Vegas Blvd.',
    Postal_Code: '89119',
    Hotel_Class: 'Gold',
    City: 'Las Vegas',
    Price: 149,
    Images: [{
      FileName: 'LV-6.jpg'
    }, {
      FileName: 'Pool-3.jpg'
    }, {
      FileName: 'Restaurant-16.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Lobby-14.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-8.jpg'
    }, {
      FileName: 'Bathroom-7.jpg'
    }
    ]
  }, {
    Id: 61,
    Hotel_Name: 'Metropolis Hotel',
    Address: '822 Edgware Rd',
    Postal_Code: 'W2 4AD',
    Hotel_Class: 'Diamond',
    City: 'London',
    Price: 379,
    Images: [{
      FileName: 'London-0.jpg'
    }, {
      FileName: 'Lobby-4.jpg'
    }, {
      FileName: 'Bedroom-5-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg'
    }, {
      FileName: 'Restaurant-18.jpg'
    }
    ]
  }, {
    Id: 63,
    Hotel_Name: 'Royal Grande Hotel',
    Address: '99 Garden Park',
    Postal_Code: 'W2 3JP',
    Hotel_Class: 'Platinum',
    City: 'London',
    Price: 449,
    Images: [{
      FileName: 'London-10.jpg'
    }, {
      FileName: 'Lobby-5.jpg'
    }, {
      FileName: 'Bedroom-5-14.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-5.jpg'
    }, {
      FileName: 'Restaurant-12.jpg'
    }
    ]
  }, {
    Id: 65,
    Hotel_Name: 'Palace Hotel',
    Address: '537 Southwark',
    Postal_Code: 'SE1 9HH',
    Hotel_Class: 'Platinum',
    City: 'London',
    Price: 389,
    Images: [{
      FileName: 'London-3.jpg'
    }, {
      FileName: 'Lobby-3.jpg'
    }, {
      FileName: 'Bedroom-4-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-3.jpg'
    }, {
      FileName: 'Bathroom-0.jpg'
    }
    ]
  }, {
    Id: 12,
    Hotel_Name: 'Downtown Inn',
    Address: '528 Pico Blvd.',
    Postal_Code: '90012',
    Hotel_Class: 'Diamond',
    City: 'Los Angeles',
    Price: 199,
    Images: [{
      FileName: 'LA-0.jpg'
    }, {
      FileName: 'Lobby-19.jpg'
    }, {
      FileName: 'Bedroom-2-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-6.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg'
    }, {
      FileName: 'Pool-13.jpg'
    }
    ]
  }, {
    Id: 50,
    Hotel_Name: 'Reef Resort',
    Address: '1 Reef Coast Street',
    Postal_Code: '0002',
    Hotel_Class: 'Diamond',
    City: 'Nassau',
    Price: 399,
    Images: [{
      FileName: 'Nassau-0.jpg'
    }, {
      FileName: 'Lobby-20.jpg'
    }, {
      FileName: 'Bedroom-3-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-8.jpg'
    }, {
      FileName: 'Restaurant-21.jpg'
    }
    ]
  }, {
    Id: 52,
    Hotel_Name: 'Nassau Beach Hotel',
    Address: '34 Coast Hwy',
    Postal_Code: '0003',
    Hotel_Class: 'Diamond',
    City: 'Nassau',
    Price: 299,
    Images: [{
      FileName: 'Nassau-11.jpg'
    }, {
      FileName: 'Lobby-18.jpg'
    }, {
      FileName: 'Pool-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-15.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-3-1.jpg'
    }
    ]
  }, {
    Id: 53,
    Hotel_Name: 'Sandybridge Inn',
    Address: '58 Bridge Road',
    Postal_Code: '0004',
    Hotel_Class: 'Gold',
    City: 'Nassau',
    Price: 249,
    Images: [{
      FileName: 'Nassau-12.jpg'
    }, {
      FileName: 'Lobby-17.jpg'
    }, {
      FileName: 'Bedroom-3-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Pool-3.jpg'
    }, {
      FileName: 'Restaurant-14.jpg'
    }
    ]
  }, {
    Id: 54,
    Hotel_Name: 'Colonial House',
    Address: '8 Old City Dr',
    Postal_Code: '0004',
    Hotel_Class: 'Diamond',
    City: 'Nassau',
    Price: 379,
    Images: [{
      FileName: 'Nassau-14.jpg'
    }, {
      FileName: 'Lobby-25.jpg'
    }, {
      FileName: 'Pool-13.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-3-3.jpg'
    }, {
      FileName: 'Bathroom-3.jpg'
    }
    ]
  }, {
    Id: 37,
    Hotel_Name: 'SoHo Inn',
    Address: '82 Houston St',
    Postal_Code: '10001',
    Hotel_Class: 'Diamond',
    City: 'New York',
    Price: 299,
    Images: [{
      FileName: 'NYC-0.jpg'
    }, {
      FileName: 'Lobby-1.jpg'
    }, {
      FileName: 'Bathroom-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-0.jpg'
    }, {
      FileName: 'Restaurant-9.jpg'
    }
    ]
  }, {
    Id: 38,
    Hotel_Name: 'NoHo Hotel',
    Address: '99 Houston St',
    Postal_Code: '10001',
    Hotel_Class: 'Gold',
    City: 'New York',
    Price: 199,
    Images: [{
      FileName: 'NYC-1.jpg'
    }, {
      FileName: 'Lobby-9.jpg'
    }, {
      FileName: 'MeetingRoom-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-10.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-6.jpg'
    }, {
      FileName: 'Restaurant-8.jpg'
    }
    ]
  }, {
    Id: 39,
    Hotel_Name: 'Broadway Suites',
    Address: '887 Broadway',
    Postal_Code: '10002',
    Hotel_Class: 'Gold',
    City: 'New York',
    Price: 119,
    Images: [{
      FileName: 'NYC-10.jpg'
    }, {
      FileName: 'Lobby-7.jpg'
    }, {
      FileName: 'Restaurant-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-11.jpg'
    }, {
      FileName: 'Bathroom-4.jpg'
    }
    ]
  }, {
    Id: 40,
    Hotel_Name: 'NY Convention Hotel',
    Address: '288 6th Ave',
    Postal_Code: '10002',
    Hotel_Class: 'Diamond',
    City: 'New York',
    Price: 299,
    Images: [{
      FileName: 'NYC-2.jpg'
    }, {
      FileName: 'Lobby-6.jpg'
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-14.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-4.jpg'
    }, {
      FileName: 'Restaurant-6.jpg'
    }
    ]
  }, {
    Id: 41,
    Hotel_Name: 'Central Park Suites',
    Address: '900 Park Ave',
    Postal_Code: '10003',
    Hotel_Class: 'Diamond',
    City: 'New York',
    Price: 219,
    Images: [{
      FileName: 'NYC-3.jpg'
    }, {
      FileName: 'Lobby-5.jpg'
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-6.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-2.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }
    ]
  }, {
    Id: 42,
    Hotel_Name: 'Wall St Hotel',
    Address: '882 Battery Street',
    Postal_Code: '10005',
    Hotel_Class: 'Gold',
    City: 'New York',
    Price: 249,
    Images: [{
      FileName: 'NYC-4.jpg'
    }, {
      FileName: 'Lobby-31.jpg'
    }, {
      FileName: 'MeetingRoom-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-0.jpg'
    }, {
      FileName: 'Restaurant-5.jpg'
    }
    ]
  }, {
    Id: 43,
    Hotel_Name: 'The Grand Hotel',
    Address: '100 Park Ave',
    Postal_Code: '10002',
    Hotel_Class: 'Platinum',
    City: 'New York',
    Price: 399,
    Images: [{
      FileName: 'NYC-6.jpg'
    }, {
      FileName: 'Lobby-3.jpg'
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-1.jpg'
    }, {
      FileName: 'Restaurant-5.jpg'
    }
    ]
  }, {
    Id: 45,
    Hotel_Name: 'The Americas Hotel',
    Address: '938 Ave of Americas',
    Postal_Code: '10003',
    Hotel_Class: 'Diamond',
    City: 'New York',
    Price: 299,
    Images: [{
      FileName: 'NYC-9.jpg'
    }, {
      FileName: 'Lobby-28.jpg'
    }, {
      FileName: 'MeetingRoom-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-5-9.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }
    ]
  }, {
    Id: 55,
    Hotel_Name: 'Hotel de Paris',
    Address: '49 Rue Pierre Charron',
    Postal_Code: '75008',
    Hotel_Class: 'Platinum',
    City: 'Paris',
    Price: 399,
    Images: [{
      FileName: 'Paris-1.jpg'
    }, {
      FileName: 'Lobby-9.jpg'
    }, {
      FileName: 'MeetingRoom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-0.jpg'
    }, {
      FileName: 'Restaurant-0.jpg'
    }
    ]
  }, {
    Id: 56,
    Hotel_Name: 'Champs Elysees Hotel',
    Address: '1 Champs Elysees',
    Postal_Code: '75008',
    Hotel_Class: 'Platinum',
    City: 'Paris',
    Price: 399,
    Images: [{
      FileName: 'Paris-10.jpg'
    }, {
      FileName: 'Lobby-0.jpg'
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-1.jpg'
    }, {
      FileName: 'Restaurant-0.jpg'
    }
    ]
  }, {
    Id: 58,
    Hotel_Name: 'The Hermitage',
    Address: '44 Rue Beaujon',
    Postal_Code: '75008',
    Hotel_Class: 'Diamond',
    City: 'Paris',
    Price: 299,
    Images: [{
      FileName: 'Paris-3.jpg'
    }, {
      FileName: 'Lobby-14.jpg'
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-10.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-3.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }
    ]
  }, {
    Id: 60,
    Hotel_Name: 'Opera Hotel',
    Address: '77 Blvd Haussmann',
    Postal_Code: '75009',
    Hotel_Class: 'Diamond',
    City: 'Paris',
    Price: 399,
    Images: [{
      FileName: 'Paris-9.jpg'
    }, {
      FileName: 'Lobby-18.jpg'
    }, {
      FileName: 'MeetingRoom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-17.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-8.jpg'
    }, {
      FileName: 'Bathroom-0.jpg'
    }
    ]
  }, {
    Id: 67,
    Hotel_Name: 'Hotel Roma',
    Address: 'Via Roma 427',
    Postal_Code: '00185',
    Hotel_Class: 'Platinum',
    City: 'Rome',
    Price: 299,
    Images: [{
      FileName: 'Rome-1.jpg'
    }, {
      FileName: 'Lobby-4.jpg'
    }, {
      FileName: 'Bedroom-5-1.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-12.jpg'
    }, {
      FileName: 'Pool-3.jpg'
    }
    ]
  }, {
    Id: 68,
    Hotel_Name: 'The International Inn',
    Address: 'Via Nazionale 28',
    Postal_Code: '00184',
    Hotel_Class: 'Diamond',
    City: 'Rome',
    Price: 279,
    Images: [{
      FileName: 'Rome-4.jpg'
    }, {
      FileName: 'Lobby-27.jpg'
    }, {
      FileName: 'Pool-11.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-13.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-1-9.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }
    ]
  }, {
    Id: 70,
    Hotel_Name: 'The Colosseum Inn',
    Address: 'Via Sforza 99',
    Postal_Code: '00184',
    Hotel_Class: 'Diamond',
    City: 'Rome',
    Price: 299,
    Images: [{
      FileName: 'Rome-7.jpg'
    }, {
      FileName: 'Lobby-18.jpg'
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-16.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-5.jpg'
    }, {
      FileName: 'Bathroom-3.jpg'
    }
    ]
  }, {
    Id: 19,
    Hotel_Name: 'The Bay Hotel',
    Address: '1 Fishermans Rd',
    Postal_Code: '94105',
    Hotel_Class: 'Diamond',
    City: 'San Francisco',
    Price: 299,
    Images: [{
      FileName: 'SF-0.jpg'
    }, {
      FileName: 'Bedroom-5-10.jpg'
    }, {
      FileName: 'Lobby-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-20.jpg'
    }, {
      FileName: 'Pool-8.jpg'
    }
    ]
  }, {
    Id: 20,
    Hotel_Name: 'Golden Suites',
    Address: '14 Golden Gate Blvd',
    Postal_Code: '94014',
    Hotel_Class: 'Diamond',
    City: 'San Francisco',
    Price: 599,
    Images: [{
      FileName: 'SF-2.jpg'
    }, {
      FileName: 'Lobby-22.jpg'
    }, {
      FileName: 'MeetingRoom-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-10.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Restaurant-21.jpg'
    }, {
      FileName: 'Pool-8.jpg'
    }
    ]
  }, {
    Id: 21,
    Hotel_Name: 'Metropolitan Hotel',
    Address: '378 Green St.',
    Postal_Code: '94102',
    Hotel_Class: 'Platinum',
    City: 'San Francisco',
    Price: 599,
    Images: [{
      FileName: 'Pool-8.jpg'
    }, {
      FileName: 'Bedroom-2-2.jpg'
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-1.jpg'
    }, {
      FileName: 'Restaurant-3.jpg'
    }
    ]
  }, {
    Id: 22,
    Hotel_Name: 'Residence Suites',
    Address: '278 Spring Rd',
    Postal_Code: '94104',
    Hotel_Class: 'Gold',
    City: 'San Francisco',
    Price: 299,
    Images: [{
      FileName: 'SF-4.jpg'
    }, {
      FileName: 'Lobby-27.jpg'
    }, {
      FileName: 'Restaurant-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-3.jpg'
    }, {
      FileName: 'Bedroom-2-4.jpg'
    }
    ]
  }, {
    Id: 23,
    Hotel_Name: 'City Lights Inn',
    Address: '278 Market St',
    Postal_Code: '94104',
    Hotel_Class: 'Gold',
    City: 'San Francisco',
    Price: 299,
    Images: [{
      FileName: 'SF-5.jpg'
    }, {
      FileName: 'Lobby-27.jpg'
    }, {
      FileName: 'Bathroom-2.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-2.jpg'
    }, {
      FileName: 'Restaurant-4.jpg'
    }
    ]
  }, {
    Id: 24,
    Hotel_Name: 'Sunset Hotel',
    Address: '282 Fishermans Rd',
    Postal_Code: '94102',
    Hotel_Class: 'Diamond',
    City: 'San Francisco',
    Price: 299,
    Images: [{
      FileName: 'SF-6.jpg'
    }, {
      FileName: 'Lobby-28.jpg'
    }, {
      FileName: 'Restaurant-5.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-4.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-8.jpg'
    }, {
      FileName: 'Bathroom-6.jpg'
    }
    ]
  }, {
    Id: 25,
    Hotel_Name: 'The Grand Resort',
    Address: '5772 1st Street',
    Postal_Code: '94104',
    Hotel_Class: 'Platinum',
    City: 'San Francisco',
    Price: 499,
    Images: [{
      FileName: 'SF-7.jpg'
    }, {
      FileName: 'Lobby-3.jpg'
    }, {
      FileName: 'Restaurant-6.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bathroom-7.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-2-9.jpg'
    }, {
      FileName: 'Restaurant-21.jpgng'
    }
    ]
  }, {
    Id: 27,
    Hotel_Name: 'Golden Gate Hotel',
    Address: '6222 Bridge Rd',
    Postal_Code: '94102',
    Hotel_Class: 'Diamond',
    City: 'San Francisco',
    Price: 199,
    Images: [{
      FileName: 'SF-9.jpg'
    }, {
      FileName: 'Lobby-18.jpg'
    }, {
      FileName: 'Bathroom-3.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'Bedroom-3-0.jpg',
      widthRatio: 2,
      heightRatio: 2
    }, {
      FileName: 'MeetingRoom-1.jpg'
    }, {
      FileName: 'Restaurant-19.jpg'
    }
    ]
  }];
  dataSource: any;

  House = [{
    ID: 1,
    Nombre: 'Evento 1',
    Entrada: 'General',
    Address: '652 Avonwick Gate',
    City: 'Toronto',
    State: 'ON',
    ZipCode: 'M3A25',
    Price: 7.000,
    Image: '../assets/img/1.jpg'
  },
    {
      ID: 2,
      Nombre: 'Evento 2',
      Entrada: 'General',
      Address: '82649 Topeka St',
      City: 'Riverbank',
      State: 'CA',
      ZipCode: '95360',
      Price: 1750000,
      Image: '../assets/img//2.jpg'
    },
    {
      ID: 3,
      Nombre: 'Evento 3',
      Entrada: 'General',
      Address: '328 S Kerema Ave',
      City: 'Milford',
      State: 'CT',
      ZipCode: '06465',
      Price: 350000,
      Image: '../assets/img/3.jpg'
    },
    {
      ID: 4,
      Nombre: 'Evento 4',
      Entrada: 'General',
      Address: '5119 Beryl Dr',
      City: 'San Antonio',
      State: 'TX',
      ZipCode: '78212',
      Price: 455000,
      Image: '../assets/img/4.jpg'
    },
    {
      ID: 5,
      Nombre: 'Evento 5',
      Entrada: 'General',
      Address: '61207 16th St N',
      City: 'Moorhead',
      State: 'MN',
      ZipCode: '56564',
      Price: 1700000,
      Image: '../assets/img/5.jpg'
    },
    {
      ID: 6,
      Nombre: 'Evento 6',
      Entrada: 'General',
      Address: '8512 Tanglewood Cir',
      City: 'Reform',
      State: 'AL',
      ZipCode: '35487',
      Price: 250000,
      Image: '../assets/img/6.jpg'
    },
    {
      ID: 7,
      Nombre: 'Evento 7',
      Entrada: 'General',
      Address: '7121 Bailey St',
      City: 'Worcester',
      State: 'MA',
      ZipCode: '01605',
      Price: 555000,
      Image: '../assets/img/7.jpg'
    },
    {
      ID: 8,
      Nombre: 'Evento 8',
      Entrada: 'General',
      Address: '620201 Plymouth Rd',
      City: 'Detroit',
      State: 'MI',
      ZipCode: ' 48224',
      Price: 610000,
      Image: '../assets/img/8.jpg'
    },
    {
      ID: 9,
      Nombre: 'Evento 9',
      Entrada: 'General',
      Address: '1198 Theresa Cir',
      City: 'Whitinsville',
      State: 'MA',
      ZipCode: '01582',
      Price: 320000,
      Image: '../assets/img/9.jpg'
    }];

  House2 = [{
    ID: 1,
    Nombre: 'Evento 1',
    Entrada: 'General',
    Address: '652 Avonwick Gate',
    City: 'Toronto',
    State: 'ON',
    ZipCode: 'M3A25',
    Price: 7.000,
    Image: '../assets/img/1.jpg'
  },
    {
      ID: 2,
      Address: '82649 Topeka St',
      City: 'Riverbank',
      State: 'CA',
      ZipCode: '95360',
      Price: 1750000,
      Image: '../assets/img//2.jpg'
    },
    {
      ID: 3,
      Address: '328 S Kerema Ave',
      City: 'Milford',
      State: 'CT',
      ZipCode: '06465',
      Price: 350000,
      Image: '../assets/img/3.jpg'
    },
    {
      ID: 4,
      Address: '5119 Beryl Dr',
      City: 'San Antonio',
      State: 'TX',
      ZipCode: '78212',
      Price: 455000,
      Image: '../assets/img/4.jpg'
    },
    {
      ID: 5,
      Address: '61207 16th St N',
      City: 'Moorhead',
      State: 'MN',
      ZipCode: '56564',
      Price: 1700000,
      Image: '../assets/img/5.jpg'
    },
    {
      ID: 6,
      Address: '8512 Tanglewood Cir',
      City: 'Reform',
      State: 'AL',
      ZipCode: '35487',
      Price: 250000,
      Image: '../assets/img/6.jpg'
    },
    {
      ID: 7,
      Address: '7121 Bailey St',
      City: 'Worcester',
      State: 'MA',
      ZipCode: '01605',
      Price: 555000,
      Image: '../assets/img/7.jpg'
    },
    {
      ID: 8,
      Address: '620201 Plymouth Rd',
      City: 'Detroit',
      State: 'MI',
      ZipCode: ' 48224',
      Price: 610000,
      Image: '../assets/img/8.jpg'
    },
    {
      ID: 9,
      Address: '1198 Theresa Cir',
      City: 'Whitinsville',
      State: 'MA',
      ZipCode: '01582',
      Price: 320000,
      Image: '../assets/img/9.jpg'
    }];

  Employee = [{
    Full_Name: 'John Heart',
    Title: 'CEO',
    Birth_Date: '03/16/1964',
    Prefix: 'Mr.',
    Address: '351 S Hill St.',
    City: 'Los Angeles',
    Zipcode: 90013,
    Email: 'jheart@dx-email.com',
    Skype: 'jheart_DX_skype',
    Home_Phone: '(213) 555-9208',
    Mobile_Phone: '(213) 555-9392'
  }];

  Marker = [{
    location: [40.755833, -73.986389],
    tooltip: {
      isShown: false,
      text: 'Times Square'
    }
  }, {
    location: '40.7825, -73.966111',
    tooltip: {
      isShown: false,
      text: 'Central Park'
    }
  }, {
    location: {
      lat: 40.753889,
      lng: -73.981389
    },
    tooltip: {
      isShown: false,
      text: 'Fifth Avenue'
    }
  }, {
    location: 'Brooklyn Bridge,New York,NY',
    tooltip: {
      isShown: false,
      text: 'Brooklyn Bridge'
    }
  }];

  employeeInfo = {
    Birth_Date: 'hola',
    City: 'hola',
    Zipcode: 'hola',
    Address: 'hola',
    Mobile_Phone: 'hola',
    Email: 'hola',
  };

  markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';

  markers: any[] = [{
    location: [40.755833, -73.986389],
    tooltip: {
      isShown: false,
      text: 'Times Square'
    }
  }, {
    location: '40.7825, -73.966111',
    tooltip: {
      isShown: false,
      text: 'Central Park'
    }
  }, {
    location: {
      lat: 40.753889,
      lng: -73.981389
    },
    tooltip: {
      isShown: false,
      text: 'Fifth Avenue'
    }
  }, {
    location: 'Brooklyn Bridge,New York,NY',
    tooltip: {
      isShown: false,
      text: 'Brooklyn Bridge'
    }
  }];

  listSelectionChanged = (e) => {
    console.log(e);
    this.currentHotel = e.addedItems[0];
  }

  constructor() {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: this.Hotel,
        key: 'Id'
      }),
      group: 'City',
      searchExpr: ['Hotel_Name', 'City', 'Address']
    });
    this.currentHotel = this.Hotel[0];
  }

  ngOnInit() {
  }

  Ver() {
  }
}
