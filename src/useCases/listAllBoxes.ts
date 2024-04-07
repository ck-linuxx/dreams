import { FastifyInstance } from "fastify";
import { prisma } from "../prisma/prismaClient";
import { z } from "zod";

export async function ListAllBoxes(app: FastifyInstance) {
  app.get("/", async  (request, reply) => {

    const boxes = await prisma.box.findMany({
      orderBy: {
        name: "asc"
      }
    })

    return reply.status(201).send(boxes)

  })
}