import {User} from './user'
import { User_for_list } from './user_for_list';

export type Exchangedletter={
    id: number;
    media: string[];
    genre: string;
    description: string;
    author: User_for_list;
}