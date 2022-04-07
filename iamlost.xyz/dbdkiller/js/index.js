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

	$('#flexCheckDefault').change(function(e) {
		if ($(this).is(':checked')) {
			  $("#perk1-name, #perk1-image").show();
			  $("#perk2-name, #perk2-image").show();
			  $("#perk3-name, #perk3-image").show();
			  $("#perk4-name, #perk4-image").show();
		} else {
			  $("#perk1-name, #perk1-image").hide();
			  $("#perk2-name, #perk2-image").hide();
			  $("#perk3-name, #perk3-image").hide();
			  $("#perk4-name, #perk4-image").hide();
			;
		}
	});

	/*if (localStorage.getItem('character-name') !== null) {
		$('#character-name').val(localStorage.getItem('character-name'));
		$('#perk1-name').val(localStorage.getItem('perk1-name'));
		$('#perk2-name').val(localStorage.getItem('perk2-name'));
		$('#perk3-name').val(localStorage.getItem('perk3-name'));
		$('#perk4-name').val(localStorage.getItem('perk4-name'));

		$('#character-image').prop('src', localStorage.getItem('character-image'));
		$('#perk1-image').prop('src', localStorage.getItem('perk1-image'));
		$('#perk2-image').prop('src', localStorage.getItem('perk2-image'));
		$('#perk3-image').prop('src', localStorage.getItem('perk3-image'));
		$('#perk4-image').prop('src', localStorage.getItem('perk4-image'));

		if ($('.col-md-3').hasClass('hidden')) {
			$('.col-md-3').fadeIn(0, function() {
				$(this).removeClass('hidden');
			});
		}
	}
	*/
	

	$('#select-killer-btn').click(function(event) {
		const character = getRndCharacter();
		const perk1 = getRndPerk();
		const perk2 = getRndPerk();
		const perk3 = getRndPerk();
		const perk4 = getRndPerk();

		localStorage.setItem('character-name', character[0]);
		localStorage.setItem('perk1-name', perk1[0]);
		localStorage.setItem('perk2-name', perk2[0]);
		localStorage.setItem('perk3-name', perk3[0]);
		localStorage.setItem('perk4-name', perk4[0]);

		localStorage.setItem('character-image', character[1]);
		localStorage.setItem('perk1-image', perk1[1]);
		localStorage.setItem('perk2-image', perk2[1]);
		localStorage.setItem('perk3-image', perk3[1]);
		localStorage.setItem('perk4-image', perk4[1]);

		$('#character-name').val(character[0]);
		$('#character-image').prop('src', character[1]);
		$('#perk1-name').val(perk1[0]);
		$('#perk1-image').prop('src', perk1[1]);
		$('#perk2-name').val(perk2[0]);
		$('#perk2-image').prop('src', perk2[1]);
		$('#perk3-name').val(perk3[0]);
		$('#perk3-image').prop('src', perk3[1]);
		$('#perk4-name').val(perk4[0]);
		$('#perk4-image').prop('src', perk4[1]);


		// if 
		if ($('.col-md-3').hasClass('hidden')) {
			$('.col-md-3').fadeIn(0, function() {
				$(this).removeClass('hidden');
			});
		}
	});

	function getRndPerk() {
		const options = [
			/*Nurse*/
			['A Nurse\'s Calling', 'https://ss.iamlost.xyz/l/XOYi1.png/raw'],
			['Stridor', 'https://ss.iamlost.xyz/l/buMu2.png/raw'], 
			['Tanatophobia', 'https://ss.iamlost.xyz/l/RENO7.png/raw'], 
			/*Trapper*/
			['Agitation', 'https://ss.iamlost.xyz/l/JaDa7.png/raw'], 
			['Brutal Strength', 'https://ss.iamlost.xyz/l/QuMu1.png/raw'], 
			['Unnerving Presence', 'https://ss.iamlost.xyz/l/QuMu1.png/raw'],
			/*Wraith*/
			['Predator', 'https://ss.iamlost.xyz/l/XEFA1.png/raw'], 
			['Shadowborn', 'https://ss.iamlost.xyz/l/WASa1.png/raw'], 
			['Bloodhound', 'https://ss.iamlost.xyz/l/gOCI4.png/raw'],
			/*Hillbilly*/
			['Enduring', 'https://ss.iamlost.xyz/l/yESo0.png/raw'], 
			['Lightborn', 'https://ss.iamlost.xyz/l/VUKO4.png/raw'], 
			['Tinkerer', 'https://ss.iamlost.xyz/l/wiRI2.png/raw'],
			/*Shape*/
			['Save the Best for Last', 'https://ss.iamlost.xyz/l/KOxu7.png/raw'], 
			['Play with Your Food', 'https://ss.iamlost.xyz/l/huTu3.png/raw'], 
			['Dying Light', 'https://ss.iamlost.xyz/l/MaBi5.png/raw'],
			/*Hag*/
			['Hex: Ruin', 'https://ss.iamlost.xyz/l/nibe4.png/raw'], 
			['Hex: The Third Seal', 'https://ss.iamlost.xyz/l/Fetu4.png/raw'], 
			['Hex: Devour Hope', 'https://ss.iamlost.xyz/l/ragU4.png/raw'],
			/*Doctor*/
			['Monitor & Abuse', 'https://ss.iamlost.xyz/l/Nabe7.png/raw'], 
			['Overcharge', 'https://ss.iamlost.xyz/l/VOCo0.png/raw'], 
			['Overwhelming Presence', 'https://ss.iamlost.xyz/l/reXI2.png/raw'],
			/*Huntress*/
			['Territorial Imperative', 'https://ss.iamlost.xyz/l/hOHE1.png/raw'], 
			['Hex: Huntress Lullaby', 'https://ss.iamlost.xyz/l/XEzo9.png/raw'], 
			['Beast of Prey', 'https://ss.iamlost.xyz/l/vIKI1.png/raw'],
			/*Cannibal*/
			['Knock Out', 'https://ss.iamlost.xyz/l/qUZi4.png/raw'], 
			['Franklin\'s Demise', 'https://ss.iamlost.xyz/l/CekI9.png/raw'], 
			['Barbecue & Chilli', 'https://ss.iamlost.xyz/l/wiRE0.png/raw'],
			/*Nightmare*/
			['Remember Me', 'https://ss.iamlost.xyz/l/yORa1.png/raw'], 
			['Fire Up', 'https://ss.iamlost.xyz/l/Jara7.png/raw'], 
			['Blood Warden', 'https://ss.iamlost.xyz/l/REXU5.png/raw'],
			/*Pig*/
			['Surveillance', 'https://ss.iamlost.xyz/l/NEjE4.png/raw'], 
			['Make Your Choice', 'https://ss.iamlost.xyz/l/SoWA2.png/raw'], 
			['Hangman\'s Trick', 'https://ss.iamlost.xyz/l/tOTa7.png/raw'],
			/*Clown*/
			['Pop Goes the Weasel', 'https://ss.iamlost.xyz/l/qoxa8.png/raw'], 
			['Coulrophobia', 'https://ss.iamlost.xyz/l/ZUDu0.png/raw'], 
			['Bamboozle', 'https://ss.iamlost.xyz/l/HaGe1.png/raw'],
			/*Spirit*/
			['Hex: Haunted Ground', 'https://ss.iamlost.xyz/l/fase5.png/raw'], 
			['Rancor', 'https://ss.iamlost.xyz/l/tOmI4.png/raw'], 
			['Spirit Fury', 'https://ss.iamlost.xyz/l/xAHA5.png/raw'],
			/*Legion*/
			['Mad Grit', 'https://ss.iamlost.xyz/l/zeTe0.png/raw'], 
			['Iron Maiden', 'https://ss.iamlost.xyz/l/weXU5.png/raw'], 
			['Discordance', 'https://ss.iamlost.xyz/l/BOyo4.png/raw'],
			/*Plague*/
			['Infectious Fright', 'https://ss.iamlost.xyz/l/CAfI6.png/raw'], 
			['Dark Devotion', 'https://ss.iamlost.xyz/l/LulE5.png/raw'], 
			['Corrupt Intervention', 'https://ss.iamlost.xyz/l/vURu2.png/raw'],
			/*Ghost Face*/
			['Furtive Chase', 'https://ss.iamlost.xyz/l/BEHa0.png/raw'], 
			['I\'m All Ears', 'https://ss.iamlost.xyz/l/LOcu2.png/raw'], 
			['Thrilling Tremors', 'https://ss.iamlost.xyz/l/cIya9.png/raw'],
			/*Oni*/
			['Blood Echo', 'https://ss.iamlost.xyz/l/zuCa3.png/raw'], 
			['Zanshin  Tactics', 'https://ss.iamlost.xyz/l/rImo2.png/raw'], 
			['Nemesis', 'https://ss.iamlost.xyz/l/YIRU4.png/raw'],
			/*Deathslinger*/
			['Hex: Retribution', 'https://ss.iamlost.xyz/l/FEHI5.png/raw'], 
			['Gearhead', 'https://ss.iamlost.xyz/l/QaHA2.png/raw'], 
			['Dead Man\'s Switch', 'https://ss.iamlost.xyz/l/HOGa4.png/raw'],
			/*Executioner*/
			['Deathbound', 'https://ss.iamlost.xyz/l/fELi3.png/raw'], 
			['Forced Penance', 'https://ss.iamlost.xyz/l/ViKi3.png/raw'], 
			['Trail of Torment', 'https://ss.iamlost.xyz/l/gato0.png/raw'],
			/*Blight*/
			['Hex: Undying', 'https://ss.iamlost.xyz/l/LeGU4.png/raw'], 
			['Hex: Blood Favour', 'https://ss.iamlost.xyz/l/ROrI1.png/raw'], 
			['Dragon\'s Grip', 'https://ss.iamlost.xyz/l/NAgO3.png/raw'],
			/*Twins*/
			['Hoarder', 'https://ss.iamlost.xyz/l/WosO4.png/raw'], 
			['Coup de Grâce', 'https://ss.iamlost.xyz/l/QUWa0.png/raw'], 
			['Oppression', 'https://ss.iamlost.xyz/l/saMe7.png/raw'],
			/*Trickster*/
			['Hex: Crowd Control', 'https://ss.iamlost.xyz/l/zEbO4.png/raw'], 
			['No Way Out', 'https://ss.iamlost.xyz/l/ZeWu6.png/raw'], 
			['Starstruck', 'https://ss.iamlost.xyz/l/Zuvi3.png/raw'],
			/*Nemesis*/
			['Lethal Pursuer', 'https://ss.iamlost.xyz/l/nexA0.png/raw'], 
			['Hysteria', 'https://ss.iamlost.xyz/l/yICO1.png/raw'], 
			['Eruption', 'https://ss.iamlost.xyz/l/YAyi6.png/raw'],
			/*Cenobite*/
			['Hex: Plaything', 'https://ss.iamlost.xyz/l/ZOtI4.png/raw'], 
			['Deadlock', 'https://ss.iamlost.xyz/l/jINe7.png/raw'], 
			['Scourge Hook: Gift of Pain', 'https://ss.iamlost.xyz/l/KIyi8.png/raw'],
			/*Artist*/
			['Hex: Pentimento', 'https://ss.iamlost.xyz/l/Geka2.png/raw'], 
			['Grim Embrace', 'https://ss.iamlost.xyz/l/cAqA4.png/raw'], 
			['Scourge Hook: Pain Resonance', 'https://ss.iamlost.xyz/l/faXU0.png/raw'],
			/*Onryō*/
			['Merciless Storm', 'https://ss.iamlost.xyz/l/LisU5.png/raw'], 
			['Call of Brine', 'https://ss.iamlost.xyz/l/ziGo3.png/raw'], 
			['Scourge Hook: Floods of Rage', 'https://ss.iamlost.xyz/l/vEWu8.png/raw'],
			/*All*/
			['Bitter Murmur', 'https://ss.iamlost.xyz/l/PoXu1.png/raw'], 
			['Claustrophobia', 'https://ss.iamlost.xyz/l/yiPO5.png/raw'], 
			['Deerstalker', 'https://ss.iamlost.xyz/l/YeBU0.png/raw'],
			['Distressing', 'https://ss.iamlost.xyz/l/sasU4.png/raw'], 
			['Fearmonger', 'https://ss.iamlost.xyz/l/yaCE2.png/raw'], 
			['Hex: No One Esxapes Death', 'https://ss.iamlost.xyz/l/vOWU3.png/raw'],
			['Iron Grasp', 'https://ss.iamlost.xyz/l/Dici2.png/raw'], 
			['Insidious', 'https://ss.iamlost.xyz/l/VUWo8.png/raw'], 
			['Hex: Thrill of the Hunt', 'https://ss.iamlost.xyz/l/tOcI4.png/raw'],
			['Jolt', 'https://ss.iamlost.xyz/l/nIsE1.png/raw'], 
			['Monstrous Shrine', 'https://ss.iamlost.xyz/l/dEri5.png/raw'], 
			['Sloppy Butcher', 'https://ss.iamlost.xyz/l/qAJu9.png/raw'],
			['Spies from the Shadows', 'https://ss.iamlost.xyz/l/dIXA4.png/raw'], 
			['Unrelenting', 'https://ss.iamlost.xyz/l/tuLU7.png/raw'], 
			['Whispers', 'https://ss.iamlost.xyz/l/QOha6.png/raw']

		];
		const rndNum = Math.floor(Math.random() * options.length);
	
		return options[rndNum];
	}
}
);