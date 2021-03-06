import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Order } from './order';
import { Team } from '../teams/team';
import { Sport } from '../sports/sport';
import { Wrestler } from '../wrestlers/wrestler';
import { Pool } from '../pools/pool';
import { Entry } from '../entries/entry';

export class OrderData implements InMemoryDbService {
  createDb() {

      const wrestlers: Wrestler[] = [
        {
          id: 1,
          wrestlerFirstName: '708mg THC - Strain Specific',
          wrestlerMiddleName: '',
          wrestlerLastName: 'Rosin - Blue Dream 1g',
          wrestlerYearCollege: 'Redshirt Junior',
          wrestlerHeight: '',
          wrestlerWeight: '174',
          wrestlerHometownCity: 'Largo',
          wrestlerHometownState: 'FL',
          wrestlerHighSchool: 'Indian Rocks Christian',
          wrestlerCollege: '$30',
          wrestlerMajor: '',
          wrestlerWins: 0,
          wrestlerLoses: 0,
          wrestlerImageUrl: 'assets/images/rosin.jpg',
          wrestlersBio: 'Biography\n' +
            '\n' +
            '2018-19 (RS Sophomore) - Posted an 11-12 record overall and went 3-3 in dual meets... Won four of his last five heading into the EIWA Championships... All five were decided by five points or less... Had three losses to ranked opponents in finishing the season at 9-6 after 12/22... Won back-to-back duals vs. George Mason and ODU at end of dual-match season... Placed fifth at Wilkes Open with 4-1 mark.\n' +
            '\n' +
            '2017-18 (RS Freshman) – Went 1-2 at 184 pounds at the EIWA Championships at Hofstra… Lost in the opener, but came back to beat Mark Boyle of Sacred Heart, 14-10 in the consolation bracket… Had a dual-match win over Austin Harrison of George Mason, 3-2, in the dual-season finale… Won three bouts with major decisions, including two at the Wilkes Open where he finished 4th (2-2)… Went 3-1 at the Storm Open to place 3rd… Beat Brendon Winning of Lake Erie College, 5-1, in the third-place match.\n' +
            '\n' +
            '2016-17 (Redshirt) - Wrestled at the Southeast Open... Lost his opener, but recovered through the consolation bracket, including a 5:36 fall over Chase Montanez of Brewton-Parker... Lost his final match there by medical forfeit... Did not compete the rest of the season.\n' +
            '\n' +
            'Indian Rocks Christian - Voted Student-Athlete of the Year... Went 230-30 in high school... Won state title once, finished second twice and was a place-winner four times... Team captain all four seasons... Has gone on mission trips to Alabama, Costa Rica and Puerto Rico.'
        },
        {
          id: 2,
          wrestlerFirstName: 'Starts with Freakshow, then Raspberry Parfait, and ends with Sweet Annie',
          wrestlerMiddleName: '',
          wrestlerLastName: 'The Worker - Preroll',
          wrestlerYearCollege: 'Freshman',
          wrestlerHeight: '',
          wrestlerWeight: '197',
          wrestlerHometownCity: 'Las Vegas',
          wrestlerHometownState: 'NV',
          wrestlerHighSchool: 'Faith Lutheran',
          wrestlerCollege: '$4',
          wrestlerMajor: '',
          wrestlerWins: 0,
          wrestlerLoses: 0,
          wrestlerImageUrl: 'assets/images/preroll.jpg',
          wrestlersBio: 'Biography'
        }
      ];


    const teams: Team[] = [
      {
        id: 1,
        teamSealUrl: 'AmericanUniversity.png',
        teamName: 'Flower',
        teamAbbreviation: 'AU',
        teamMascotUrl: '200px-American_Eagles_logo.svg.png',
        teamMascotName: 'Eagles',
        teamConference: 'EIWA',
        teamCity: 'Washington',
        teamState: 'DC'
      },
      {
        id: 2,
        teamSealUrl: 'AppalachianStateUniversity.png',
        teamName: 'Concentrates',
        teamAbbreviation: 'APP',
        teamMascotUrl: '150px-Appalachian_State_Mountaineers_logo.svg.png',
        teamMascotName: 'Mountaineers',
        teamConference: 'SoCon',
        teamCity: 'Boone',
        teamState: 'NC'
      }
    ];


// Replace all of these with ORDER that are actual Orders...

const orders: Order[] = [{
  id: 1,
  orderName: 'StarBuds',
  orderLocationName: 'Northwestern Sports Complex',
  orderLocationAddress: '5333 Prairie Stone Pkwy',
  orderLocationCity: 'Scott Chapman',
  orderLocationState: '',
  orderStartDate: 'December 29, 2019',
  orderEndDate: 'December 30, 2019',
  orderStartTime: '10:00:00 GMT -0500',
  orderEndTime: 'TBD',
  orderUrl: 'https://nusports.com/news/2019/9/27/tickets-on-sale-for-57th-annual-midlands-championships.aspx',
  orderImageUrl: 'assets/images/starbuds.png',
  orderSport: '0001',
  orderDivisions: ['College', 'High School'],
  orderLevels: ['College'],
  orderType: 'Tournament',
  orderBreakdowns: [['125', '133', '141', '149', '157', '165', '174', '184', '197', '285'],['106', '113', '120', '126', '132', '138', '145', '152', '160', '170', '182', '195', '220', '285']],
  orderNumOfSeeding: [[32,32,32,32,32,32,32,32,32,32],[31,31,31,31,31,31,31,31,31,31,31,31,31,31]],
  orderOrganizerFullName: 'Scott Chapman',
  orderOrganizerPhone: 4058726162,
  orderBracketType: 'Double Elimination (Consolation Style - No true winner)',
  orderBracketNumOfParticipantsPerClass:  [[32,32,32,32,32,32,32,32,32,32],[31,31,31,31,31,31,31,31,31,31,31,31,31,31]],
  orderPlaceWinners: 8,
  orderExtraInstructions: 'Held in conjunction with Northwestern University... Sponsers...'
},
{
    id: 2,
    orderName: 'Classen Kush House',
    orderLocationName: 'PPG Paints Arena',
    orderLocationAddress: '1001 Fifth Avenue',
    orderLocationCity: 'Justin Maggard',
    orderLocationState: '',
    orderStartDate: 'March 21, 2019',
    orderEndDate: 'March 23, 2019',
    orderStartTime: '10:00:00 GMT -0500',
    orderEndTime: 'TBD',
    orderUrl: 'http://www.ncaa.org/championships/statistics/2019-wrestling-championships-results-and-records',
    orderImageUrl: 'assets/images/classen_kush_house.png',
    orderSport: '0002',
    orderDivisions: ['College'],
    orderLevels: ['College'],
    orderType: 'Tournament',
    orderBreakdowns: [['125', '133', '141', '149', '157', '165', '174', '184', '197', '285'],['106', '113', '120', '126', '132', '138', '145', '152', '160', '170', '182', '195', '220', '285']],
    orderNumOfSeeding: [[32,32,32,32,32,32,32,32,32,32],[31,31,31,31,31,31,31,31,31,31,31,31,31,31]],
    orderOrganizerFullName: 'Warren McPherson',
    orderOrganizerPhone: 3036532361,
    orderBracketType: 'Double Elimination (Consolation Style - No true winner)',
    orderBracketNumOfParticipantsPerClass:  [[32,32,32,32,32,32,32,32,32,32],[31,31,31,31,31,31,31,31,31,31,31,31,31,31]],
    orderPlaceWinners: 8,
    orderExtraInstructions: 'Held at PPG Arena'
  }
];

const sports: Sport[] = [
  {
    id: 1,
    sportName: 'Wrestling',
    sportType: 'physical',
    sportParticipants: 'wrestlers',
    sportDivisions: 'Age',
    sportLevels: 'Experience',
    sportBreakdowns: 'Weight Classes'
  },
  {
    id: 2,
    sportName: 'Judo',
    sportType: 'physical',
    sportParticipants: 'players',
    sportDivisions: 'Age',
    sportLevels: 'Belt Color',
    sportBreakdowns: 'Weight Classes'
  },
  {
    id: 3,
    sportName: 'Brazilian Jiu-Jitsu',
    sportType: 'physical',
    sportParticipants: 'fighters',
    sportDivisions: 'Age',
    sportLevels: 'Belt Color',
    sportBreakdowns: 'Weight Classes'
  }
];

const pools: Pool[] = [
  {
    id: 1,
    poolName: '2020 Ensure Cup NCAA Bracket Challenge',
    poolDeadlineDate: '2020-03-19T15:59:59.000Z',
    poolImageUrlBackground: 'assets/images/pools/ensure-background.jpg',
    poolImageUrlMain: 'assets/images/pools/ensure-logo.jpg',
    poolType: 'Pick Team 16 Seeds',
    poolPaymentBreakdown: '60,25,10,5',
    poolEntryAmount: 30,
    poolTotalEntriesAllowed: 100,
    poolOrganizer: 'Warren McPherson',
    poolOrganizerPhone: '4055551234',
    eventLinkId: 3,
    poolInviteEmails: 'scottbchapman@gmail.com,ninjajilly@gmail.com',
  },
  {
    id: 2,
    eventLinkId: 2,
    poolName: '2019 Ensure Cup NCAA Bracket Challenge',
    poolDeadlineDate: '2019-03-21T15:59:59.000Z',
    poolEntryAmount: 20,
    poolTotalEntriesAllowed: 100,
    poolImageUrlBackground: 'assets/images/pools/ensure-background.jpg',
    poolImageUrlMain: 'assets/images/pools/ensure-logo.jpg',
    poolType: 'Pick Team (16 Seeds)',
    poolPaymentBreakdown: '90,10',
    poolOrganizer: 'Warren McPherson',
    poolOrganizerPhone: '4055551234',
    poolInviteEmails: 'scottbchapman@gmail.com,ninjajilly@gmail.com',
  }
];

    const entries: Entry[] = [
      {
        id: 1,
        entryName: 'FooBar Usa',
        entryUsername: 'Shane Cross',
        entryPick1: '125',
        entryPick2: '133',
        entryPick3: '141',
        entryPick4: '149',
        entryPick5: '157',
        entryPick6: '165',
        entryPick7: '174',
        entryPick8: '184',
        entryPick9: '197',
        entryPick10: '285',
        entryPick11: '133',
        entryPick12: '141',
        entryPick13: '149',
        entryPick14: '157',
        entryPick15: '165',
        entryPick16: '184',
        entryPoints: 54
        },
      {
        id: 2,
        entryName: 'Oregon Kush',
        entryUsername: 'Warren McPherson',
        entryPick1: '125',
        entryPick2: '133',
        entryPick3: '141',
        entryPick4: '149',
        entryPick5: '157',
        entryPick6: '165',
        entryPick7: '174',
        entryPick8: '184',
        entryPick9: '197',
        entryPick10: '285',
        entryPick11: '133',
        entryPick12: '141',
        entryPick13: '149',
        entryPick14: '157',
        entryPick15: '165',
        entryPick16: '184',
        entryPoints: 54
      },
      {
        id: 3,
        entryName: 'Winner Winner Chicken Dinner',
        entryUsername: 'Scott Chapman',
        entryPick1: '125',
        entryPick2: '133',
        entryPick3: '141',
        entryPick4: '149',
        entryPick5: '157',
        entryPick6: '165',
        entryPick7: '174',
        entryPick8: '184',
        entryPick9: '197',
        entryPick10: '285',
        entryPick11: '133',
        entryPick12: '141',
        entryPick13: '149',
        entryPick14: '157',
        entryPick15: '165',
        entryPick16: '184',
        entryPoints: 93      }
    ];

    return { orders, teams, wrestlers, pools, sports, entries };
  }
}
