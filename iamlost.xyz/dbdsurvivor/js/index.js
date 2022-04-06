$(function() {
	function getRndCharacter() {
		const options = [
			['Dwight Fairfield', 'https://ss.iamlost.xyz/l/yAZE7.png/raw'], 
			['Meg Thomas', 'https://ss.iamlost.xyz/l/raDU0.png/raw'], 
			['Claudette Morel', 'https://ss.iamlost.xyz/l/zUkU7.png/raw'], 
			['Jake Park', 'https://ss.iamlost.xyz/l/poZU3.png/raw'], 
			['Nea Karlsson', 'https://ss.iamlost.xyz/l/FAvE2.png/raw'],
			['Laurie Strode', 'https://ss.iamlost.xyz/l/mOdI8.png/raw'],
			['Ace Visconti', 'https://ss.iamlost.xyz/l/nOzA6.png/raw'],
			['William "Bill" Overbeck', 'https://ss.iamlost.xyz/l/Zira1.png/raw'],
			['Feng Min', 'https://ss.iamlost.xyz/l/TaJA5.png/raw'],
			['David King', 'https://ss.iamlost.xyz/l/poca4.png/raw'],
			['Quentin Smith', 'https://ss.iamlost.xyz/l/cIve7.png/raw'],
			['Detective David Tapp', 'https://ss.iamlost.xyz/l/LEYo0.png/raw'],
			['Kate Denson', 'https://ss.iamlost.xyz/l/wURe6.png/raw'],
			['Adam Francis', 'https://ss.iamlost.xyz/l/fALU2.png/raw'],
			['Jeffrey "Jeff" Johansen', 'https://ss.iamlost.xyz/l/Rawu4.png/raw'],
			['Jane Romero', 'https://ss.iamlost.xyz/l/mAwi2.png/raw'],
			['Ash J. Williams', 'https://ss.iamlost.xyz/l/ZewO4.png/raw'],
			['Nancy Wheeler', 'https://ss.iamlost.xyz/l/CASu1.png/raw'],
			['Steve Harrington', 'https://ss.iamlost.xyz/l/Gido8.png/raw'],
			['Yui Kimura', 'https://ss.iamlost.xyz/l/YAgo0.png/raw'],
			['Zarina Kassir', 'https://ss.iamlost.xyz/l/BajA8.png/raw'],
			['Cheryl Mason', 'https://ss.iamlost.xyz/l/QiLi4.png/raw'],
			['Felix Richter', 'https://ss.iamlost.xyz/l/joXu5.png/raw'],
			['Élodie Rakoto', 'https://ss.iamlost.xyz/l/zEFU5.png/raw'],
			['Yun-Jin Lee', 'https://ss.iamlost.xyz/l/QoyI6.png/raw'],
			['Jill Valentine', 'https://ss.iamlost.xyz/l/ruse8.png/raw'],
			['Leon Scott Kennedy', 'https://ss.iamlost.xyz/l/tADi8.png/raw'],
			['Mikaela Reid', 'https://ss.iamlost.xyz/l/Wezo3.png/raw'],
			['Jonah Vasquez', 'https://ss.iamlost.xyz/l/riNE2.png/raw'],
			['Yoichi Asakawa', 'https://ss.iamlost.xyz/l/QAge0.png/raw'],
		];
		const rndNum = Math.floor(Math.random() * options.length);
	
		return options[rndNum];
	}
	
	function btnClickRndCharacter() {
		const character = getRndCharacter();
		const perk1 = getRndPerk();
		const perk2 = getRndPerk();
		const perk3 = getRndPerk();
		const perk4 = getRndPerk();

		document.getElementById('character-name').value = character[0];
		document.getElementById('character-image').src = character[1];
		document.getElementById('perk1-name').value = perk1[0];
		document.getElementById('perk1-image').src = perk1[1];
		document.getElementById('perk2-name').value = perk2[0];
		document.getElementById('perk2-image').src = perk2[1];
		document.getElementById('perk3-name').value = perk3[0];
		document.getElementById('perk3-image').src = perk3[1];
		document.getElementById('perk4-name').value = perk4[0];
		document.getElementById('perk4-image').src = perk4[1];
	}

	$.btnClickRndCharacter = btnClickRndCharacter;

	function getRndPerk() {
		const options = [
			/*Nurse*/
			['A Nurse\'s Calling', 'https://ss.iamlost.xyz/l/XOYi1.png/raw'],
			['Stridor', 'https://ss.iamlost.xyz/l/buMu2.png/raw'], 
			['Tanatophobia', 'https://ss.iamlost.xyz/l/RENO7.png/raw'], 

		];
		const rndNum = Math.floor(Math.random() * options.length);
	
		return options[rndNum];
	}
});
