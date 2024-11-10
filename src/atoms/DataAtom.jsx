import { atom, selector } from "recoil";
import data from "../JsonData/data.json";

export const selectorData = selector({
    key: "selectorData",
    get: () => {
        // Since we're directly importing JSON data, we don't need axios here
        return data;
    }
});

export const atomData = atom({
    key: "atomData",
    default: selectorData
});