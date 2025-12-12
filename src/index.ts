import openapi, { fromTypes } from '@elysiajs/openapi';
import { Effect } from 'effect';
import { Elysia } from 'elysia';
import { EventsHandler } from './handlers/get-events';

const app = new Elysia()
    .use(
        openapi({
            references: fromTypes(),
        }),
    )
    .get('/events', async () => {
        const handler = Effect.gen(function* () {
            const eventsHandler = yield* EventsHandler;
            const result = yield* eventsHandler.handleGetEvents;
            return result;
        }).pipe(Effect.provide(EventsHandler.Default));

        const result = await Effect.runPromise(handler);
        return result;
    })
    .get('/insert-users', () => {
        return 'Inserted';
    })
    .listen(3000);

// eslint-disable-next-line no-console
console.log(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `🦊 Elysia is running at ${app.server?.hostname || ''}:${app.server?.port}`,
);
