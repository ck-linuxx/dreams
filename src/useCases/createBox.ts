import { FastifyInstance } from "fastify";
import { prisma } from "../prisma/prismaClient";
import { z } from "zod";

export async function CreateBox(app: FastifyInstance) {
  app.post("/create", async (request, reply) => {

    const createBox = z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      monthlyValue: z.number(),
      finalResult: z.number(),
      timeToResult: z.string()
    })

    const { name, description, 
      image, monthlyValue, 
      finalResult, timeToResult 
    } = createBox.parse(request.body)

    const box = await prisma.box.create({
      data: {
        name,
        description,
        image,
        monthlyValue,
        finalResult,
        timeToResult
      }
    })

    return reply.status(201).send({ boxId: box.id })

  })
}