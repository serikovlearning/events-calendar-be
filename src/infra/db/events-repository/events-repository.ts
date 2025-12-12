import { Effect } from 'effect';
import { DbConnection } from '../init';

export class EventsRepository extends Effect.Service<EventsRepository>()(
    'EventsRepository',
    {
        effect: Effect.gen(function* () {
            const dbConn = yield* DbConnection;

            const getEvents = Effect.tryPromise({
                try: async () => {
                    const result = await dbConn.execute('select * from events');

                    return result.rows;
                },
                catch: (e) => new Error(String(e)),
            });

            return { getEvents } as const;
        }),
        dependencies: [DbConnection.Default],
    },
) {}
