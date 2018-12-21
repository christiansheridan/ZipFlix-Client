export interface IGenre {
    id?: number;
    genre?: string;
}

export class Genre implements IGenre {
    constructor(public id?: number, public genre?: string) {}
}
