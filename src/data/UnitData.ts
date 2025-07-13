export type UnitData = {

    id: number;
    name: string;
    baseCost: number;
    unlockMoney: number;
    cost : number;
    img: string;
    unlocked: boolean;
}

export const units: UnitData[] = [
{
        id: 1,
        name: "Noah",
        baseCost: 10,
        cost: 10,
        unlockMoney: 0,
        unlocked: false,
        img: "/images/UnitNoah.png"
    },
    {
        id: 2,
        name: "Stephan",
        baseCost: 100,
        cost: 100,
        unlockMoney: 50,
        unlocked: false,
        img: "/images/UnitStephan.png"
    },
    {
        id: 3,
        name: "Georg",
        baseCost: 1000,
        cost: 1000,
        unlockMoney: 500,
        unlocked: false,
        img: "/images/UnitGeorg.png"
    },
    {
        id: 4,
        name: "Moritz (Lang)",
        baseCost: 10000,
        cost: 10000,
        unlockMoney: 5000,
        unlocked: false,
        img: "/images/UnitMoritzLang.png"
    },
    {
        id: 5,
        name: "Dominik",
        baseCost: 100000,
        cost: 100000,
        unlockMoney: 50000,
        unlocked: false,
        img: "/images/UnitDominik.png"
    },
    {
        id: 6,
        name: "Marcel",
        baseCost: 1000000,
        cost: 1000000,
        unlockMoney: 500000,
        unlocked: false,
        img: "/images/UnitMarcel.png"
    },

]
