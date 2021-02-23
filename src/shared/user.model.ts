import { IHouse } from "./house.model";

export interface IUser{
    id: number;
    account: string;
    password: string;
    money: number;
    house?: IHouse[];
    isCo: boolean;
}