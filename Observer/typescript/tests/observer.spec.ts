import { PassionNews, User } from '../src/observer';

test('Register observer', () => {
	const masuo = new User('masuo');
	const pns = new PassionNews('');

	pns.on('dior', masuo);
	expect(pns.listeners.length).toBe(1);
});
