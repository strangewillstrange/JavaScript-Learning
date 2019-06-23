const name = prompt("what is your character Name?");

if (name) {
	alert("hello, " + name);
}

var role = prompt("Will you fight or cast?");

if (role == "fight") {
	const fighter = prompt("What gives you strength? \nskill, \ngod, \nrage");
	switch (fighter) {
		case "skill":
			alert(name + ", You should be a fighter.");
			break;
		case "god":
			alert(name + ", You should be a Paladin.");
			break;
		case "rage":
			alert(name + ", you should be a Barbarian.");
			break;
		default:
			alert("try again");
			break;
		} 
	} else {
		const caster = prompt("Where does your magic come from? \nspellbook, \ngod, \nmusic");
		switch (caster) {
			case "spellbook":
				alert(name + ", You should be a Wizard.");
				break;
			case "god":
				alert(name + ", You should be a Cleric.");
				break;
			case "music":
				alert(name + ", you should be a Bard.");
				break;
			default:
				alert("try again");
				break;
		}
	}
