import { Effect } from 'effect';
import { EventsRepository } from '../infra/db/events-repository/events-repository';

export class EventsHandler extends Effect.Service<EventsHandler>()(
    'EventsHandler',
    {
        effect: Effect.gen(function* () {
            const eventsRepository = yield* EventsRepository;

            const handleGetEvents = eventsRepository.getEvents.pipe(
                Effect.catchIf(
                    (err) => err.message.includes('connection'),
                    () => Effect.fail(new Error('DB_UNAVAILABLE')),
                ),
            );

            return { handleGetEvents } as const;
        }),
        dependencies: [EventsRepository.Default],
    },
) {}
