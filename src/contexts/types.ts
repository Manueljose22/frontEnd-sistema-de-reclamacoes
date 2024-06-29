import { ReactNode } from "react";

export interface IComplaintContext{
    data: any;
    setData: (data: any) => void
}


export interface IContextProps{
    children: ReactNode;
}