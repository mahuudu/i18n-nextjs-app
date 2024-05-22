type Callback = (payload: any) => void;

interface EventEmitter {
    listeners: Record<string, Callback[]>;
    subscribe: (eventName: string, callback: Callback) => void;
    unsubscribe: (eventName: string, callback: Callback) => void;
    dispatch: (eventName: string, payload?: any) => void;
}

const eventEmitter: EventEmitter = {
    listeners: {},
    subscribe: function (eventName: string, callback: Callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    },
    unsubscribe: function (eventName: string, callback: Callback) {
        if (this.listeners[eventName]) {
            this.listeners[eventName] = this.listeners[eventName].filter(
                (listener) => listener !== callback
            );
        }
    },
    dispatch: function (eventName: string, payload: any) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEach((callback) => {
                callback(payload);
            });
        }
    },
};

export default eventEmitter;
