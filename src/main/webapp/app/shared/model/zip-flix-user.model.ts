import { Moment } from 'moment';
import { IProfile } from 'app/shared/model//profile.model';

export interface IZipFlixUser {
    id?: number;
    dateOfBirth?: Moment;
    profiles?: IProfile[];
}

export class ZipFlixUser implements IZipFlixUser {
    constructor(public id?: number, public dateOfBirth?: Moment, public profiles?: IProfile[]) {}
}
