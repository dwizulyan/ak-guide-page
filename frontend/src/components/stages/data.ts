export type Reward = {
    items: Item[];
    mode: string;
};
export type Item = {
    name: string;
    rarity: "Guaranteed" | "Common" | "Rare" | "Very Rare" | "First Clear";
};

export const Rewards: Reward[] = [
    {
        items: [
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
            { name: "Orirock", rarity: "Guaranteed" },
        ],
        mode: "Normal",
    },
    {
        items: [
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
            { name: "Damaged_Device", rarity: "Very Rare" },
        ],
        mode: "Challange",
    },
]