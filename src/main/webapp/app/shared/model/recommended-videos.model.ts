import { IVideo } from 'app/shared/model//video.model';

export interface IRecommendedVideos {
    id?: number;
    videos?: IVideo[];
}

export class RecommendedVideos implements IRecommendedVideos {
    constructor(public id?: number, public videos?: IVideo[]) {}
}
