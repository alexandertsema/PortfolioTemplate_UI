import { Component, OnInit } from '@angular/core';
import { ISkill } from "app/models/skill";
import { IEdge } from "app/models/edge";
import { INode } from "app/models/node";
import { HttpService } from 'app/services/http/http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills : Observable<ISkill[]>;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.skills = this.httpService.get<ISkill[]>('skills');
  }
}
