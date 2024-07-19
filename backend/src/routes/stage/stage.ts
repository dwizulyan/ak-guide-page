import { Hono, Context, Input } from "hono";
import { PrismaClient } from "@prisma/client"
import { Stage, Reward, Condition, Item } from "@/utils/Types";

import { stageInputValidator, StageSchema } from "@/middlewares/validator";
import { createStage } from "@/services/stageService";

const stage = new Hono();
const prisma = new PrismaClient();

stage.get("/", async (c: Context) => {
    try {
        const getStage = await prisma.stage.findMany({
            include: {
                rewards: {
                    select: {
                        stageCode: true,
                        mode: true,
                        items: {
                            select: {
                                name: true,
                                rewardsCode: true,
                                rarity: true
                            }
                        }
                    }
                },
                condition: {
                    select: {
                        stageCode: true,
                        content: true,
                        mode: true,
                    }
                }
            }
        });
        return c.json({
            success: true,
            message: "Success",
            data: getStage,
        })
    }
    catch (err) {
        if (err instanceof Error)
            return c.json({
                success: true,
                message: err.toString(),
                data: {}
            })
    }
})

stage.post("/create-stage", stageInputValidator, async (c: Context) => {
    const data = await c.req.json() as StageSchema;
    try {
        const create = await createStage(data)
        return c.json({
            success: true,
            message: "HEy",
            data: create

        })
    }
    catch (err) {
        if (err instanceof Error)
            return c.json({
                success: true,
                message: err.toString(),
                data: {}
            })
    }

})


export default stage;