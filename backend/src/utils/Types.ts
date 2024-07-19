export type Item = {
    name: string,
    rewardsCode: string,
    rarity: "Guaranteed" | "Common" | "Uncommon" | "Rare" | "Very_Rare" | "First_Clear"
}
export type Condition = {
    mode: "Normal" | "Challange",
    stageCode: string,
    content: string[]
}
export type Reward = {
    stageCode: string,
    rewardsCode: string,
    mode: "Normal" | "Challange",
    items?: Item[]
}
export type Stage = {
    name: string,
    code: string,
    description: string,
    rewards?: Reward[],
    condition?: Condition[]
}