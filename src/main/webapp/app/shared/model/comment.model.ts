import { IVideo } from 'app/shared/model//video.model';

export interface IComment {
    id?: number;
    comment?: string;
    video?: IVideo;
}

export class Comment implements IComment {
    constructor(public id?: number, public comment?: string, public video?: IVideo) {}
}
