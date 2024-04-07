import fastify from "fastify";
import { CreateBox } from "./useCases/createBox";
import { ListAllBoxes } from "./useCases/listAllBoxes";
import { register } from "module";
import { UltimateGoal } from "./useCases/ultimateGoal";

const app = fastify()

app.listen({ port: 3333})
.then(() => { console.log("<-- Server is running --> ") })

app.register(CreateBox)

app.register(ListAllBoxes)

app.register(UltimateGoal)
