import { PrismaClient } from "@prisma/client";
import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";


const prisma = new PrismaClient()

export const create = async (c: Context) => {
    const { name, password } = await c.req.json()

    try {
        const data = await prisma.user.create({
            data: {
                name: name,
                password: password
            }
        })

        return c.json(data)
    } catch (e: any) {
        throw new HTTPException(404, { message: e })
    }
}

export const list = async (c: Context) => {
    const data = await prisma.user.findMany({
        select: {
            id: true,
            name: true
        }
    })
    return c.json(data)
}
