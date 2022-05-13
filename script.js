/**
 * JS API Function to use are:
 *
 * alert(); - standard text for read only
 * let answer = confirm(); - yes or no questions
 * let otherAnswer = prompt(); - open-ended questions
 *
 */

let playerName;
let playerAge;
let wantsToPlay;
let advance;
let weapon;
let forest;
let castle;
let wizard;
let shoes;
let map;

const victory = () => {
  alert("The wizard has died! I can feel myself being taken from this world!");
  alert(
    `I don't know how I can thank you, ${playerName}! Be sure to page me when I'm in the new world!`
  );
};

const lose = () => {
  alert("That HURT!");
  alert(
    "YOU HAVE FAILED TO GUIDE ME OUT! LUCKILY THIS GAME IS CODED TO TAKE US BACK TO THE WEAPON SELECT!"
  );
  alert(`Try not to suck this time, ${playerName}!`);
  weaponSelect();
};

const wizardSecret = () => {
  alert(
    "The door has led us to the wizard's quarters. There he is! Sleeping like a baby! This might be too easy."
  );
  alert(
    "Alright. We are here. How should I do this? Up close and personal, or from a distance?"
  );
  finalBlow = prompt("'close' or 'distance'");
  if (finalBlow === "close" && weapon === "bow of truth") {
    alert("* Right next to the sleeping wizard *");
    alert("Hey, IDIOT! You and your nasty beard breath need to DIE!!!");
    alert(
      "* Startled like a parent being awoken by a child with a nightmare in the middle of the night, the wizard suffered a stroke!*"
    );
    victory();
  } else if (finalBlow === "close" && weapon === "dagger of shadows") {
    alert("* Right next to the sleeping wizard *");
    alert("Stabby! Stabby!!!");
    alert("Wizard: Et tu, Brute?!");
    victory();
  } else if (finalBlow === "close" && weapon === "sock of quarters") {
    alert("* Right next to the sleeping wizard *");
    alert("Death to WIZARD!!! *Thud* *Thud*...*Thud*");
    alert("*THUD*");
    alert("Got 'em!");
    victory();
  } else if (finalBlow === "distance" && weapon === "dagger of shaadows") {
    alert("* Unsheathes dagger and throws *");
    alert("* Dagger hits bed post *");
    alert("Wizard: What's that? Who's ther.... Oh! Idiots!");
    alert("⚡️* ZAPPY ZAPPY * ⚡️");
    alert("☠️☠️☠️");
    lose();
  } else if (finalBlow === "distance" && weapon === "sock of quarters") {
    alert("BET!");
    alert("YEEEET!");
    alert(
      "* Sock of quarters flies accross the room, hitting a pilar next to the wizard's bed, exploding, sending quarters everywhere! *"
    );
    alert("Wizard: What's that? Who's ther.... harghghhahhaaaaaaa.....");
    alert(
      "Damn. He choked on a quarter?!? Right before I was going to tell him to choke on soomething else!"
    );
    victory();
  } else {
    alert("YOU'RE ALONE BECAUSE NO ONE LOVES YOU!");
    alert("Wizard: What's that? Who's ther.... Oh! Idiots!");
    alert("⚡️* ZAPPY ZAPPY * ⚡️");
    alert("☠️☠️☠️");
    lose();
  }
};

const wizardFront = () => {
  alert("* Busts down Wizard's door *");
  alert("Yo', Wizzy! Come get it!");
  alert("* Running to the wizard upon his thrown *");
  alert("* The wizard reaches for his wand!*");
  alert("Death to WIZARD!!! *Thud* *Thud*...*Thud*");
  alert("*THUD*");
  alert("Got 'em!");
  victory();
};

const wizardLure = () => {
  alert("* The wizard emerges upon his dragon! *");

  switch (weapon.toLowerCase()) {
    case "sock of quarters":
      alert("Wizard: 'You fool! You think you can beat me?!'");
      alert("BET!");
      alert("YEEEET!");
      alert(
        "* Sock of quarters flies through the air, hitting the dragon in the eye! *"
      );
      alert("* Dragon shreaks and flails! As Wizard falls off! *");
      alert("Wizard: harghghhahhaaaaaaa!!!! *** Thud*");
      victory();
      break;
    case "dagger of shadows":
      alert("* The wizard flies through the trees on his dragon *");
      alert('* Landing behind the wizard * "Stabby! Stabby!!!"');
      alert("Wizard: Et tu, Brute?!");
      victory();
      break;
    case "bow of truth":
      alert("* The wizard flies through the trees on his dragon *");
      alert(
        "Hey, DUUsty ScALes! All that mutton go straight to your thighs!?!"
      );
      alert("🔥🔥🔥☠️☠️☠️🔥🔥🔥");
      lose();
      break;
  }
};

const castleEntrance = () => {
  if (castle === "secret entrance" && weapon === "dagger of shadows") {
    alert("Excellent! He'll never know what's coming! Muhahaha!");
    alert("The secret entrance is by the base of the castle.");
    wizardSecret();
  } else if (castle === "secret entrance" && weapon === "bow of truth") {
    alert("Thank God you're not stupid enough to choose head on!");
    alert("The secret entrance is by the base of the castle.");
    wizardSecret();
  } else if (castle === "secret entrance" && weapon === "sock of quarters") {
    alert("I see the secret entrance at the sewer! LET'S GET 'EEM!");
    wizardSecret();
  } else if (castle === "front door" && weapon === "dagger of shadows") {
    alert(
      "Perhaps the invisibility granted by the dagger will cloak me enough! Here I go!"
    );
    alert("* Advances to the front door, clouded by mist *");
    alert(
      "☠️☠️☠️ * A trap is triggered and spikes are shot out of the castle walls, impaling our hero.* ☠️☠️☠️"
    );
    lose();
  } else if (castle === "front door" && weapon === "bow of truth") {
    alert("Honestly, this is probably a crappy idea.");
    alert("* Advances to the front door, bow in hand *");
    alert("Hey, Mr. Wizard! You're house is very poorly decorated!");
    alert(
      "☠️☠️☠️ * A trap is triggered and spikes are shot out of the castle walls, impaling our hero.* ☠️☠️☠️"
    );
    lose();
  } else if (castle === "front door" && weapon === "sock of quarters") {
    alert("ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR KICKIN' ASS!");
    alert(
      "* Charging through the front door, the sock of quarters swinging overhead saves our hero by deflecting spikes!*"
    );
    alert(
      "* Henchmen charge to defend the castle, but are met with the taste of sweaty metal where their teeth used to be!*"
    );
    alert(
      "I've made my way through the castle, and this is the last wing. The wizard must be in here!"
    );
    wizardFront();
  } else if (castle === "lure" && weapon === "dagger of shadows") {
    alert(
      "We don't have anything to lure the wizard ot with though. I'll set a trap for when he has to come out. I'll position myself in the tree above the main road to prepare myself for an arial assassination."
    );
    alert("* Two days pass *");
    alert(
      "I hear him! The wizard is coming out! They are opening his grand door! I am ready to cut out his heart!"
    );
    wizardLure();
  } else if (castle === "lure" && weapon === "bow of truth") {
    alert(
      "We don't have anything to lure the wizard ot with though. I'll set a trap for when he has to come out. I'll position myself in the tree above the main road to prepare myself for an arial assassination."
    );
    alert("* Two days pass *");
    alert(
      "I hear him! The wizard is coming out! They are opening his grand door! I have no idea what to do next!"
    );
    wizardLure();
  } else {
    alert("HeY, WiZArD! I'M HERE TO KICK YOUR ASS! COME GET IT!");
    wizardLure();
  }
};

const castleView = () => {
  castle = null;
  alert("There it is, over that hill is the Wizard's castle.");
  if ((map = true)) {
    alert(
      "The way I see it, we have a few options. The map we scored says there's a secret entrance. Otherwise, we can try to lure the wizard out or charge the front door."
    );
    castle = prompt(
      "What do you think? 'secret entrance', 'front door', or 'lure'?"
    );
    castleEntrance();
  } else {
    alert(
      "The way I see it, we have a few options. We can try to lure the wizard out or charge the front door."
    );
    castle = prompt("What do you think? 'front door' or 'lure'?");
    castleEntrance();
  }
};

const forestAid = () => {
  forest = null;
  alert("We have to go through the forest to get to the wizard's castle!");
  alert(
    "Wait! I hear something! There's a scuffle up ahead! It looks like a rock troll and a wood elf are in a bit of a tiff!"
  );
  alert(
    "They seem evenly matched, but I bet if I aid one, they may be willing to return the favor!"
  );
  forest = prompt("Should I help the elf or the troll?");

  if (forest == "elf" && weapon === "dagger of shadows") {
    alert("Then watch as I slay this troll!");
    alert("*Draws dagger, disappearing into a mist*");
    alert("*Sneaks up behind troll*");
    alert(
      "☠️☠️☠️ *The sound of metal scraping stone as the dagger breaks in pieces! Followed by the crunching sound of troll fist breaking through human skull!* ☠️☠️☠️"
    );
    lose();
  } else if ((forest = "elf") && weapon === "bow of truth") {
    alert("Alright! Check this out!");
    alert("*Draws bow*");
    alert(
      "Hey, pebble breath!!! YOU'rE GenUiNelY UN 👏🏻 A 👏🏻 TTRACT 👏🏻 IVE!!!!"
    );
    alert(
      "* Rock troll is critacally injured (in the emotions) and runs away, crying*"
    );
    alert(
      "Elf:'Thank you for your assistance! He almost had me there! I'm happy you knew that trolls are extremely sensitive.'"
    );
    alert(
      "Elf:'I see you're on your way to the Wizard's Castle. Please, accept these gifts as a token of my gratitude. May they aid you in your quest'"
    );
    alert(
      "* The elf gifts the enchanted 'Sneakers of Silence' and a map showing a trap door to the Wizard's Castle. *"
    );
    shoes = true;
    map = true;
    castleView();
  } else if (forest === "elf" && weapon === "sock of quarters") {
    // 'knocks the mfer out!
    alert("HELL YEAH!!! LEEROOY JANKINSSS!!!!");
    alert(
      "* In a flash of light and jangling coins, the troll is knocked to the ground, unconcious! *"
    );
    alert(
      "Elf:'Thank you for your assistance! He almost had me there! I'm happy you knew that trolls are extremely sensitive.'"
    );
    alert(
      "Elf:'I see you're on your way to the Wizard's Castle. Please, accept these gifts as a token of my gratitude. May they aid you in your quest'"
    );
    alert(
      "* The elf gifts the enchanted 'Sneakers of Silence' and a map showing a trap door to the Wizard's Castle. *"
    );
    shoes = true;
    map = true;
    castleView();
  } else if (forest === "troll" && weapon === "bow of truth") {
    alert("Alright! Check this out!");
    alert("*Draws bow*");
    alert("*Pulls back arrow*");
    alert("Hey, Elfo! NiCe PoNy tAiL, DWEEB!");
    alert(
      "* Distracted by giving the middle finger, the elf took a stoney blow to the head*"
    );
    alert("Troll: Thank you help! Here! Take elf shoes!");
    alert("* The troll gifts the enchanted 'Sneakers of Silence'*");
    shoes = true;
    castleView();
  } else if (forest === "troll" && weapon === "sock of quarters") {
    alert("HELL YEAH!!! LEEROOY JANKINSSS!!!!");
    alert(
      "* In a flash of light and jangling coins, the elf is knocked to the ground, unconscious! *"
    );
    alert("Troll: Thank you help! Here! Take elf shoes!");
    alert("* The troll gifts the enchanted 'Sneakers of Silence'*");
    alert(
      "Troll: 'Also, take extra quarters! Cousin Bridge Troll gave for Pagan Holiday!'"
    );
    alert("* The sock chimes and jingles with ever more power *");
    shoes = true;
    castleView();
  }
  // forest=false && weapon === dagger of shadows
  else {
    alert("Then watch as I slay this elf!");
    alert("*Draws dagger, disappearing into a mist*");
    alert("* Sneaks up behind elf *");
    alert("* Bathes in the blood from elf's slit jugular *");
    alert("* Troll flees in fear/terror *");
    alert(
      " Ahh! The elf has enchanted 'Sneakers of Silence'! I will take them for my own dastardly purposes! And in them is a map to the castle's trap door!"
    );
    shoes = true;
    castleView();
  }
};

const weaponSelect = () => {
  weapon = null;
  while (!weapon) {
    weapon = prompt(
      "For my weapon, should I take the 'Sword of Destiny', the 'Dagger of Shadows', the 'Bow of Truth', or this 'Sock of Quarters'?"
    );
  }

  switch (weapon.toLowerCase()) {
    case "sword of destiny":
      alert("Great choice! * Grabs and unsheethes the Sword of Destiny *");
      alert("Oh crap! Destiny didn't like that! She looks peeved!");
      alert("☠️☠️☠️*Character was beaten to death by Destiny*☠️☠️☠️");
      lose();
      break;

    case "dagger of shadows":
      alert(
        "* Unsheathing the dagger, the character disappears into a mist, making the character invisible *"
      );
      alert("This will do nicely! * Laughs meniacally 😈 *");
      forestAid();
      break;

    case "sock of quarters":
      alert(
        "Dope! Let's go knock his teeth out! * Runs into forest swinging Sock of Quarters overhead*"
      );
      forestAid();
      break;

    case "bow of truth":
      alert("Bullseye!");
      alert("* Strings Bow of Truth *");
      alert(
        "You know, Forrest Gump wasn't that great of a movie... Oh! It really is the Bow of Truth!"
      );
      alert("Let's get to the castle!");
      forestAid();
      break;
  }
};

const continueTheGame = () => {
  advance = confirm("You cannot turn back, without unleashing a curse!");
  if (!advance) {
    alert("Lorem ipsum dolor sit amet consectetur, adipisicing elit!");
  } else {
    alert(
      "I was trapped in this computer in 1996 after failing to complete this game! I need your help in defeating the computer wizard to release me from this trap and save yourself from the same fate!"
    );
    alert("Excellent! Now let's choose a weapon!");
    weaponSelect();
  }
};

const startAdventure = () => {
  alert("Let's go on an adventure");
  playerName = prompt("What's your name?");
  alert(`Hello, ${playerName}. It's nice to meet you.`);
  playerAge = prompt("Do you mind if I ask how old you are?");
  if (playerAge < 13) {
    return alert("Sorry but you must be at least 13 to play.");
  }

  wantsToPlay = confirm("Do you want to play a game with me");
  if (wantsToPlay) {
    alert("The contract is sealed!");
    continueTheGame();
  } else {
    alert("🖕🏻");
  }
};

const btn = document.querySelector("button");
btn.addEventListener("click", startAdventure, false);
