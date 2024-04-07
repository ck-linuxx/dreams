import { FastifyInstance } from "fastify";
import { prisma } from "../prisma/prismaClient";
import { z } from "zod";

export async function UltimateGoal(app: FastifyInstance) {
  app.get("/goal", async (request, reply) => {

    const boxId = z.string().parse(request.body)

    const box = z.object({
      finalResult: z.number(),
      monthlyValue: z.number()
    })

    const { finalResult, monthlyValue} = box.parse(await prisma.box.findUnique({
      where: {
        id: boxId
      },
      select: {
        monthlyValue: true,
        finalResult: true
      }
    }))

    const monthsToResult = finalResult / monthlyValue
    const result = `Você realizará seu sonho em ${monthsToResult}`

    return reply.send(result)
    

  })
}