$(function() {
	function getRndCharacter() {
		const options = [
			['Dwight Fairfield', 'https://ss.iamlost.xyz/l/RuPe9.png/raw'], 
			['Meg Thomas', 'https://ss.iamlost.xyz/l/Veme9.png/raw'], 
			['Claudette Morel', 'https://ss.iamlost.xyz/l/xaTO0.png/raw'], 
			['Jake Park', 'https://ss.iamlost.xyz/l/YAtA3.png/raw'], 
			['Nea Karlsson', 'https://ss.iamlost.xyz/l/kaWe3.png/raw'],
			['Laurie Strode', 'https://ss.iamlost.xyz/l/sUqU9.png/raw'],
			['Ace Visconti', 'https://ss.iamlost.xyz/l/qAyu9.png/raw'],
			['William "Bill" Overbeck', 'https://ss.iamlost.xyz/l/noRU5.png/raw'],
			['Feng Min', 'https://ss.iamlost.xyz/l/SAxe0.png/raw'],
			['David King', 'https://ss.iamlost.xyz/l/pICE8.png/raw'],
			['Quentin Smith', 'https://ss.iamlost.xyz/l/Fenu5.png/raw'],
			['Detective David Tapp', 'https://ss.iamlost.xyz/l/gIFi2.png/raw'],
			['Kate Denson', 'https://ss.iamlost.xyz/l/QiVo8.png/raw'],
			['Adam Francis', 'https://ss.iamlost.xyz/l/XuFe3.png/raw'],
			['Jeffrey "Jeff" Johansen', 'https://ss.iamlost.xyz/l/fici6.png/raw'],
			['Jane Romero', 'https://ss.iamlost.xyz/l/YAQu9.png/raw'],
			['Ash J. Williams', 'https://ss.iamlost.xyz/l/SAyA5.png/raw'],
			['Nancy Wheeler', 'https://ss.iamlost.xyz/l/yuqE4.png/raw'],
			['Steve Harrington', 'https://ss.iamlost.xyz/l/FehU9.png/raw'],
			['Yui Kimura', 'https://ss.iamlost.xyz/l/TEKE4.png/raw'],
			['Zarina Kassir', 'https://ss.iamlost.xyz/l/VUda3.png/raw'],
			['Cheryl Mason', 'https://ss.iamlost.xyz/l/YIdo6.png/raw'],
			['Felix Richter', 'https://ss.iamlost.xyz/l/gAwa3.png/raw'],
			['Élodie Rakoto', 'https://ss.iamlost.xyz/l/KoCu4.png/raw'],
			['Yun-Jin Lee', 'https://ss.iamlost.xyz/l/zavi0.png/raw'],
			['Jill Valentine', 'https://ss.iamlost.xyz/l/miCE8.png/raw'],
			['Leon Scott Kennedy', 'https://ss.iamlost.xyz/l/qIbI5.png/raw'],
			['Mikaela Reid', 'https://ss.iamlost.xyz/l/qIbI5.png/raw'],
			['Jonah Vasquez', 'https://ss.iamlost.xyz/l/qIbI5.png/raw'],
			['Yoichi Asakawa', 'https://ss.iamlost.xyz/l/qIbI5.png/raw'],
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
