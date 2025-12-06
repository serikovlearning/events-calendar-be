import openapi, { fromTypes } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { getDbConnectionTested } from "./model/users/user-model";


const users = new Elysia({
    prefix: "users"
})
    .get("/:id", async ({ params: { id } }) => {
        return {
            username: "elysia",
            id
        }
    })
    .get("/search", async ({ query: { name } }) => {
        return {
            found: name
        }
    })

const app = new Elysia()
    .use(
        openapi({
            references: fromTypes()
        })
    )
    .use(users)
    .get("/", () => {
        getDbConnectionTested()
        return "Hello world"
    })
    .get('/insert-users', () => {
        return "Inserted"
    })
    .listen(3000);
console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
