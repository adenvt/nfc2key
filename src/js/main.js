import NFC from 'nfc-pcsc'
import robot from 'robotjs'

export default function start(document) {
	const nfc = new NFC();

	nfc.on('reader', reader => {
		let input = document.getElementById('reader');
		let info = document.getElementById('detect');

		input.value = reader.reader.name;
		info.style.display = 'inline-block';

		reader.on('card', card => {
			robot.typeString(card.uid);
			robot.keyTap('enter');
		})

		reader.on('end', () => {
			input.value = '-';
			info.style.display = 'none';
		});
	})
}
