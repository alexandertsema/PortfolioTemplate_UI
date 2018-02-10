import { ISkillLevel } from 'app/models/skillLevel';
import { INode } from 'app/models/node';

export interface ISkill extends INode {
    name: string,
    skillLevel: ISkillLevel
}
