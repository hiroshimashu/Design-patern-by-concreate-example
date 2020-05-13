interface Observer {
	onNewInformation(): void;
}

interface Observable {
	on(reader: Observer): void;
	off(reader: Observer): void;
	notify(): void;
}
