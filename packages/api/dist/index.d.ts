import * as mitt from 'mitt';

interface ApiResponse {
    /** @format int32 */
    code?: number;
    type?: string;
    message?: string;
}
interface User {
    /** @format int64 */
    id?: number;
    name?: string;
    avatar?: string;
    email?: string;
    title?: string;
    department?: string;
    role?: string;
    status?: string;
}

declare const GET_PATHS: {
    getUsers: string;
};
declare class Client {
    private baseUrl;
    constructor(baseUrl?: string);
    headers: HeadersInit;
    getUsers(): Promise<User[]>;
}

declare const EVENTS: {
    API_ERROR: string;
};
declare const emitter: mitt.Emitter<Record<mitt.EventType, unknown>>;

declare type FetcherError = Error & {
    response: Response;
};

export { ApiResponse, Client, EVENTS, FetcherError, GET_PATHS, User, emitter };
