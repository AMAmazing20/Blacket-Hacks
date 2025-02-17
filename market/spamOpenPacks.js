(async () => {
  if (!blacket.packs) return alert('You must be on the Market to run this script.');

  let pack = prompt("Which pack would you like to open?\n\nList:\n" + Object.keys(blacket.packs).join('\n'));
  if (!blacket.packs[pack]) return alert("I couldn't find that pack...");

  let amount = prompt("How many boxes do you want to open?\Enter * for the max possible.");
  if (amount.toString() === '*') amount = Math.floor(blacket.user.tokens / blacket.packs[pack].price);
  if (isNaN(amount) || amount < 0) return alert('Invalid amount.');
  if (amount < 1 || amount * blacket.packs[pack].price > blacket.user.tokens) return alert("You do not have enough tokens.");

  let speed = Number.parseInt(prompt("What speed (in ms) would you like this to open at?\nOur current recommendation is around 200."));
  if (isNaN(speed)) return alert('Invalid speed.');
  if (speed < 125) return alert('The script speed should be above 125 to avoid a ban.');

  window.blooks = [];
  let i = 0;

  const log = (...args) => console.log(...args);

  async function buy(a) {
    await blacket.requests.post("/worker/open", {
      pack: a
    }, (data) => {
      if (data.error) return;
      i++;
      
      log('%c%s', `color: white; font-size: 25px; text-shadow: 0px 0px 15px ${blacket.rarities[blacket.blooks[data.blook].rarity].color}`, `${data.blook}`);
      blooks.push(data.blook);
    });
  };

  let interval = setInterval(() => {
    if (i < amount) buy(pack);
    else {
      clearInterval(interval);

      let count = {};
      blooks.forEach(blook => {
        count[blook] = (count[blook] || 0) + 1
      });

      alert(`Final Results:\n` + Object.entries(count).map((x) => `    ${x[1]} ${x[0]}`).join(`\n`));
    };
  }, speed);
})();