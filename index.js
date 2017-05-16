var NFC = require('nfc-pcsc').default;
var robot = require('robotjs');

const nfc = new NFC();

nfc.on('reader', reader => {
	reader.on('card', card => {
		robot.typeString(card.uid);
		robot.keyTap('enter');
	})
})
