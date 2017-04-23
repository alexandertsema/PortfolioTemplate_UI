import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/services/http.service";
import { Skill } from "app/models/skill";
import { ENDPOINTS } from "app/settings/endpoints";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get<Skill[]>(ENDPOINTS.certificate)
        .subscribe(
            (skills: Skill[]) => {
              this.skills = skills; 
            },
            (error: any) => 
              console.error(error)
        );
  }
}
