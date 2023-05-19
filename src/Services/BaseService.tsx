
class BaseService<T> {
    protected _url?: string;
    protected _data: T[];
    constructor() {
        this._data = [];
    }
    public async getData(): Promise<T[]> {
        try {
            // GET DATA FROM URL
            const request = await fetch(`${this._url}`);

            // IF REQUEST IS NOT OK, ERROR
            if (!request.ok) {
                throw new Error(`{ "status": ${request.status}, "statusText": "${request.statusText}" }`);
            }

            const response = await request.json();
            this._data = response as T[];
            return this._data;
        }
        catch (error) {
            throw error;
        }
    }
}

export default BaseService;