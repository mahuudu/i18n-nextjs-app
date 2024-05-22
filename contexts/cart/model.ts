import { ReactNode } from "react";

export interface CartContextType {
    plan: any,
    phone: any
}

export interface BaseAction {
    type: string;
    payload?: any;
}

export type CartAction = BaseAction;

export interface CartContextProps {
    children: ReactNode;
}