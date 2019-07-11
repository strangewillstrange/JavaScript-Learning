const name = prompt("To start, what is your character's Name?");

alert(`Great!  Let's answer a few questions about ${name}.`);

const alignment1 = stopCrime(name);

const alignment2 = deadBody(name);

const fullAlignment = alignmentCalculator(alignment1, alignment2);

const stats = [17, 15, 14, 13, 11, 10];

alert(`Looks like ${name} is ${fullAlignment}`);

function alignmentCalculator(a1,a2) {
  if (a1 === "neutral" && a2 === "neutral") {
    return "True neutral";
  } else {
    return `${a1} ${a2}`;
  }
}

function deadBody(characterName) {
  const good = /alert/;
  const neutral = /continue/;
  const evil = /search/;
  alert(
    `${characterName} is looking for a place to eat dinner when they stumbles upon a dead body in an alley...`
  );
  let body = prompt(
	`What does ${characterName} do: (please specify the letter)
	A.) Alert a city guard.
	B.) Search the body for a coin purse.
	C.) Continue to look for dinner?`
  );
  switch (body) {
    case 'a':
      alert("What a good deed...");
	  return "good";
    case 'c':
      alert("What makes a good man go neutral...?");
	  return "neutral";
    case 'b':
      alert("How very evil...");
	  return "evil;";
    default:
      alert("try again!");
	  return deadBody(characterName);s
  }
}

function stopCrime(characterName) {
  const law = /tackle/;
  const na = /god/;
  const chaos = /trip/;
  alert(
    `${characterName} hears someone should "THIEF!" and sees a young man being chased by the city guard...`
  );
  let crime = prompt(
    `Does ${characterName} forcefully tackle the young man, sneakily trip the guard, or let the Gods decide the outcome?`
  );
  crime = crime.toLowerCase();
  if (law.test(crime)) {
    alert("How noble of you!");
    return "lawful";
  } else if (chaos.test(crime)) {
    alert("How devilish of you!");
    return "chaotic";
  } else if (na.test(crime)) {
    alert("How very neutral of you...");
    return "neutral";
  } else {
    alert("Try again!");
    return stopCrime(characterName);
  }
}
