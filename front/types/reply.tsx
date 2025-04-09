import { User } from "./user";
import { User_for_list } from "./user_for_list";

export type Reply={
    id:number;
    text:string;
    author:User_for_list;
}