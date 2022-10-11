import { Component, OnInit } from '@angular/core';
import { ContractClosingService } from '../api-service/contract-closing.service';
import { ContractListService } from '../api-service/contract-list.service';
import { PeopleListService } from '../api-service/people-list.service';
import { PersonBasicDataService } from '../api-service/person-basic-data.service';
import { SecondmentDataService } from '../api-service/secondment-data.service';
import { TimeOffDataService } from '../api-service/time-off-data.service';
import { Contract } from '../model/contract-list.model';
import { Person } from '../model/person-basic-data.model';
import { ISecondment } from '../model/secondment-data.model';
import { ITimeOff } from '../model/time-off-data.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personBasicData!: Person;
  contractList!: Contract;
  timeofData!: ITimeOff;
  contractClosingList: any;
  peopleList!: Person[];
  secondmentData!: ISecondment;

  constructor(
    private personBasicDataService: PersonBasicDataService,
    private contractListService: ContractListService,
    private timeOfDataService: TimeOffDataService,
    private contractClosing: ContractClosingService,
    private peopleListService: PeopleListService,
    private secondmentDataService: SecondmentDataService
  ) { }

  ngOnInit(): void {
    // personBasicData
    this.personBasicDataService.getPersonBasicData().subscribe(data => {
      this.personBasicData = data.data;
      console.log('personBasicData', this.personBasicData);
    });
    // contractList
    this.contractListService.getContractList().subscribe(data => {
      data.data.map(contract => {
        this.contractList = contract;
        console.log('contractList', this.contractList);
      });
    });
    // timeofData
    this.timeOfDataService.getTimeOffData().subscribe(data => {
      this.timeofData = data;
      console.log('timeofData', this.timeofData);
    })
    // contractClosingList
    this.contractClosing.getContractClosing().subscribe(data => {
      this.contractClosingList = data;
      console.log('contractClosingList', this.contractClosingList);
    })
    // peopleList
    this.peopleListService.getPeopleList().subscribe(data => {
      this.peopleList = data;
      console.log('peopleList', this.peopleList);
    })
    // secondmentData
    this.secondmentDataService.getSecondmentData().subscribe(data => {
      this.secondmentData = data;
      console.log('secondmentData', this.secondmentData);
    })
  }



}






