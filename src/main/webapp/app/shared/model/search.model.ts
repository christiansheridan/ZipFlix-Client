import { IVideo } from 'app/shared/model//video.model';

export interface ISearch {
    id?: number;
    searchQuery?: string;
    videos?: IVideo[];
}

export class Search implements ISearch {
    constructor(public id?: number, public searchQuery?: string, public videos?: IVideo[]) {}
}
