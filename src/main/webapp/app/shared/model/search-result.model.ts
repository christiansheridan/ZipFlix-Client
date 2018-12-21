import { IVideo } from 'app/shared/model//video.model';

export interface ISearchResult {
    id?: number;
    videos?: IVideo[];
}

export class SearchResult implements ISearchResult {
    constructor(public id?: number, public videos?: IVideo[]) {}
}
