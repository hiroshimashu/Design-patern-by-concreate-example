interface Observer {
	onNewInformation(brandName: string): void;
}

interface Observable {
	on(state: string, reader: Observer): void;
	//off(state: string, reader: Observer): void;
	//notify(state: string): void;
}

type Listener = {
	state: string;
	readers: Observer[];
};

export class User implements Observer {
	constructor(private name: string) {}

	public onNewInformation(brandName: string) {
		console.log(`${this.name} got news about: ${brandName}`);
	}
}

export class PassionNews implements Observable {
	public listeners: Listener[];
	constructor(public name: string) {
		this.listeners = [];
	}

	public on(state: string, reader: User) {
		const listener = this.getListener(state);
		if (listener && listener.readers) {
			listener.readers.push(reader);
		} else {
			this.listeners.push({
				state,
				readers: [reader]
			});
		}
	}

	public off(state: string, reader: User) {
		const listener = this.getListener(state);
		listener && listener.readers.splice(listener.readers.indexOf(reader), 1);
	}

	private getListener(state: string): Listener | undefined {
		return this.listeners.find(listener => listener.state === state);
	}
}
