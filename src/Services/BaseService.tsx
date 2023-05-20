
class BaseService<T> {
    protected _url?: string;
    protected _data: Array<T>;
    constructor() {
        this._data = [];
    }
    public async getData(): Promise<Array<T>> {
        // IF DATA IS ALREADY LOADED, RETURN IT
        if(this._data.length > 0) return this._data;
        // ELSE LOAD DATA FROM URL
        try {
            // GET DATA FROM URL
            const request = await fetch(`${this._url}`);

            // IF REQUEST IS NOT OK, ERROR
            if (!request.ok) {
                throw new Error(`{ "status": ${request.status}, "statusText": "${request.statusText}" }`);
            }

            const response = await request.json();
            this._data = response as Array<T>
            return this._data;
        }
        catch (error) {
            throw error;
        }
    }
}

export default BaseService;