import { IVideo } from 'app/shared/model//video.model';

export interface IRating {
    id?: number;
    rating?: number;
    video?: IVideo;
}

export class Rating implements IRating {
    constructor(public id?: number, public rating?: number, public video?: IVideo) {}
}
