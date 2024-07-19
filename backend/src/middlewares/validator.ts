import { Context } from "hono"
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const StageInputSchema = z.object({
    name: z.string(),
    code: z.string(),
    description: z.string(),
    rewards: z.array(
        z.object({
            stageCode: z.string(),
            mode: z.enum(["Normal", "Challange"]),
            items: z.array(
                z.object({
                    name: z.string(),
                    mode: z.enum(["Normal", "Challange"]),
                    rarity: z.enum(["Guaranteed", "Common", "Uncommon", "Very_Rare", "First_Clear"])
                })
            )
        })
    ),
    condition: z.array(
        z.object({
            mode: z.enum(["Normal", "Challange"]),
            stageCode: z.string(),
            content: z.array(z.string())
        })
    )
})

export type StageSchema = z.infer<typeof StageInputSchema>

export const stageInputValidator = zValidator("json", StageInputSchema, (result, c: Context) => {
    if (!result.success) {
        return c.json({
            success: false,
            message: result.error,
            data: {}
        }, 400)
    }
})