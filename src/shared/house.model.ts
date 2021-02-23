import { IUser } from "./user.model";

export interface IHouse{
    id: number;
    name: string;
    address: string;
    price : number;
    ownerId: number;
}