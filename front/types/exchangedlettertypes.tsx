import {User} from './user'

export type Exchangedletter={
    id: number;
    media: string[];
    genre: string;
    description: string;
    author: User;
}