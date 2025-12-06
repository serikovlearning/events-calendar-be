export type UserModel = {
    /** For Auth */
    username: string;
    password: string;
    email: string;
    /** To View */
    firstName: string;
    secondName: string;
    imgUrl: string;
    /** UUID */
    id: string;
}

export type ColleaguesToWatch = {
    /** UUID of watcher */
    watcher: string;
    /** UUID of watched*/
    watched: string;
}

export type Tags = {
    /** UUID */
    id: string;
    /** Name */
    name: string;
}

export type CalendarEvent = {
    /** Date - ISO string */
    dateStart: Date;
    /** Date - ISO string */
    dateEnd: Date;
    /** Date - ISO string */
    createdAt: Date;
    /** Date - ISO string */
    updatedAt: Date;

    /** Name */
    name: string;
    /** Description */
    description: string | undefined | null;
    /** Event kint */
    kind: string;

    /** Color */
    color: string;
    /** Tag */
    tagId: string;

    /** Users */
    users: string[];
    /** UUID */
    id: string;
}


export type CalendarUsersRelations = {
    eventId: string;
    userId: string;
}
