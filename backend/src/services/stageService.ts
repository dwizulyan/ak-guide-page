import { PrismaClient } from "@prisma/client";
import { Reward, Stage, Item, Condition } from "@/utils/Types"
import { StageSchema } from "@/middlewares/validator";

const prisma = new PrismaClient();

export async function createStage(stageData: StageSchema): Promise<any> {
    const stage: Stage = {
        name: stageData.name,
        code: stageData.code,
        description: stageData.description,
    }
    const itemsArr: Item[] = stageData.rewards.flatMap(reward =>
        reward.items.map(item => ({
            name: item.name,
            rarity: item.rarity,
            rewardsCode: `${reward.stageCode}-${reward.mode}`
        }))
    );

    const rewardsArr: Reward[] = stageData.rewards.map(reward => ({
        stageCode: reward.stageCode,
        rewardsCode: `${reward.stageCode}-${reward.mode}`,
        mode: reward.mode,
    }));
    try {

        const create = await prisma.$transaction([
            prisma.stage.create({
                data: {
                    name: stage.name,
                    code: stage.code,
                    description: stage.description,
                }
            }),
            prisma.reward.createMany({
                data: rewardsArr
            }),
            prisma.item.createMany({
                data: itemsArr
            }),
            prisma.condition.createMany({
                data: stageData.condition
            })
        ])

        return create
    }
    catch (err) {
        if (err instanceof Error)
            return err.toString()
    }
}