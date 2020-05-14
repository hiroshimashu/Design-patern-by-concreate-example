interface Observer {
	onNewInformation(brandName: string): void;
}

interface Observable {
	on(state: string(listener: Observer): void;
	off(state: string(listener: Observer): void;
	notify(): void;
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
	constructor(public name: string) {
		this.listeners = [];
	}

	public on(listener: Listener) {
		this.listeners.pus(listener);
	}

	public of(listener: Listener) {
		this.listeners.splice(thi(listeners.indexO(listener), 1);
	}

	public notify() {
		this.listeners.forEach(listener) =(listener.onNewInformation());
	}

	private getListener() {}
}
