import { GlobalScore } from "./global";

export interface ActiveScore extends GlobalScore {
    name: string;
    slug: string;
    image: string;
    lucro_medio: number;
    lucro_proposed: number;
    opens: Array<OpensScore>;
    closeds: Array<ClosedsScore>;
};

export interface OpensScore {
    type: "baixo" | "cima";
    value: number;
    time: number;
    date: string;
}

export interface ClosedsScore {
    type: "baixo" | "cima";
    value: number;
    time: number;
    date: string;
    return_value?: number;
}