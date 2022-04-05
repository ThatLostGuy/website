$(function() {
	function getRndCharacter() {
		const options = [
			['Trapper', 'https://ss.iamlost.xyz/l/RuPe9.png/raw'], 
			['Wraith', 'https://ss.iamlost.xyz/l/Veme9.png/raw'], 
			['Hillbilly', 'https://ss.iamlost.xyz/l/xaTO0.png/raw'], 
			['Nurse', 'https://ss.iamlost.xyz/l/YAtA3.png/raw'], 
			['Shape', 'https://ss.iamlost.xyz/l/kaWe3.png/raw'],
			['Hag', 'https://ss.iamlost.xyz/l/sUqU9.png/raw'],
			['Doctor', 'https://ss.iamlost.xyz/l/qAyu9.png/raw'],
			['Huntress', 'https://ss.iamlost.xyz/l/noRU5.png/raw'],
			['Cannibal', 'https://ss.iamlost.xyz/l/SAxe0.png/raw'],
			['Nightmare', 'https://ss.iamlost.xyz/l/pICE8.png/raw'],
			['Pig', 'https://ss.iamlost.xyz/l/Fenu5.png/raw'],
			['Clown', 'https://ss.iamlost.xyz/l/gIFi2.png/raw'],
			['Spirit', 'https://ss.iamlost.xyz/l/QiVo8.png/raw'],
			['Legion', 'https://ss.iamlost.xyz/l/XuFe3.png/raw'],
			['Plague', 'https://ss.iamlost.xyz/l/fici6.png/raw'],
			['Ghost Face', 'https://ss.iamlost.xyz/l/YAQu9.png/raw'],
			['Demogorgon', 'https://ss.iamlost.xyz/l/SAyA5.png/raw'],
			['Oni', 'https://ss.iamlost.xyz/l/yuqE4.png/raw'],
			['Deathslinger', 'https://ss.iamlost.xyz/l/FehU9.png/raw'],
			['Executioner', 'https://ss.iamlost.xyz/l/TEKE4.png/raw'],
			['Blight', 'https://ss.iamlost.xyz/l/VUda3.png/raw'],
			['Twins', 'https://ss.iamlost.xyz/l/YIdo6.png/raw'],
			['Trickster', 'https://ss.iamlost.xyz/l/gAwa3.png/raw'],
			['Nemesis', 'https://ss.iamlost.xyz/l/KoCu4.png/raw'],
			['Cenobite', 'https://ss.iamlost.xyz/l/zavi0.png/raw'],
			['Artist', 'https://ss.iamlost.xyz/l/miCE8.png/raw'],
			['Onryō', 'https://ss.iamlost.xyz/l/qIbI5.png/raw']
		];
		const rndNum = Math.floor(Math.random() * options.length);
	
		return options[rndNum];
	}
	
	function btnClickRndCharacter() {
		const character = getRndCharacter();

		document.getElementById('character-name').value = character[0];
		document.getElementById('character-image').src = character[1];
	}

	$.btnClickRndCharacter = btnClickRndCharacter;
});