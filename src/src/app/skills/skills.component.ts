import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { ISkill } from "app/models/skill";
import { ENDPOINTS } from "app/settings/endpoints";
import { IEdge } from "app/models/edge";
import { mockSkill } from "app/mocks/skill.mock";
import { INode } from "app/models/node";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills : any[];//Map<INode, IEdge[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.get<Skill[]>(ENDPOINTS.certificate)
    //     .subscribe(
    //         (skills: Skill[]) => {
    //           this.skills = skills; 
    //         },
    //         (error: any) => 
    //           console.error(error)
    //     );
    // mockSkill.forEach(element => {
    //   console.log(element);
    // });

    this.skills = mockSkill;
  }
}
