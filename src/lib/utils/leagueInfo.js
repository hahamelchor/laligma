/*   STEP 1   */
export const leagueID = "944523156285390848"; // your league ID
export const leagueName = "La Ligma"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome, sports fans, to La Ligma, the ultimate destination for fantasy football enthusiasts! Whether you're a seasoned veteran or a newcomer to the game, La Ligma offers the perfect platform to showcase your skills, strategy, and knowledge of the game.</p>
  <p>But be warned, the road to glory is not for the faint-hearted. The competition here is fierce, and the battles are won and lost in the blink of an eye. The stakes are high, and the rewards are even higher.</p>
  <p>And then there's Kayvaan. Ah, Kayvaan. The man, the myth, the legend. His eternal struggle to defeat Joe has become the stuff of legend around these parts. Some say he's cursed, others say he's simply unlucky. But one thing is for sure: when Kayvaan is on the field, anything can happen.</p>
  <p>So whether you're here to dominate your league, make new friends, or simply watch Kayvaan's latest attempt to slay the Joe-shaped dragon, La Ligma is the place for you. Get ready for an epic journey filled with ups and downs, twists and turns, and unforgettable moments that will have you on the edge of your seat.</p>
  <p>Welcome to La Ligma, where the fantasy football dreams are big and the victories are even bigger. Let the games begin!</p>
  
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "79658423637393408",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Bastiboo",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Luis Obispo, CA", // (optional)
      "bio": "Bastiboo, the premier up and coming fantasy football manager, is a force to be reckoned with. Known for his sharp wit and quick thinking, he's always one step ahead of his opponents - both on the field and off. When he's not busy crushing the competition in fantasy football, Bastiboo can be found practicing his jiu jitsu moves. His love for the sport runs deep - some say he even dreams in grappling techniques. But don't let his impressive skills on the mat fool you - he's just as deadly when it comes to picking the perfect lineup. But there's one thing that Bastiboo loves even more than fantasy football and jiu jitsu - his cats. Yes, you read that right. This tough, competitive manager has a soft spot for his furry feline friends. In fact, he's been known to take a break from analyzing stats to cuddle with his cats and watch funny cat videos online. So what makes Bastiboo stand out from the rest of the fantasy football crowd? It's his unique approach to the game. He's not afraid to take risks and try new strategies, even if they seem a little unorthodox. And with his killer combination of jiu jitsu skills, cat-like reflexes, and a razor-sharp mind, he's sure to take the fantasy football world by storm. Keep an eye out for Bastiboo - he's a rising star in the world of fantasy football, and he's just getting started. Whether he's choking out opponents on the mat or dominating the leaderboard, there's no stopping this cat-loving, jiu jitsu mastermind.",
      "photo": "/managers/bastiboo.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Himself", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "944523156285390848",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Champ",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Fresno, CA", // (optional)
      "bio": "Joe 'Champ' Bianchi is a true legend in the world of fantasy football. With an impressive track record of championship wins, he has established himself as one of the greatest managers of all time. But it's not just his success on the field that sets him apart - it's his unwavering passion for the game and his unrelenting drive to win. Joe's love for beating Kayvaan is well-known among fantasy football circles. Their epic rivalry has become the stuff of legend, with each matchup more intense than the last. But despite Kayvaan's best efforts, Joe always seems to come out on top. His strategic thinking and meticulous planning have made him a force to be reckoned with, and his ability to read the game like a book is second to none. But Joe's success is not just a product of his talent - it's a product of his dedication and hard work. He spends countless hours analyzing stats, poring over game footage, and researching players to ensure that he always has the upper hand. And his relentless pursuit of victory has earned him the respect and admiration of his peers. In short, Champ is a true champion in every sense of the word. His love for the game, his skill on the field, and his unyielding determination to win have made him an icon in the world of fantasy football. And as long as he's around, his opponents - including poor Kayvaan - had better watch out.",
      "photo": "/managers/joe.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kayvaan", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Be better.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
//   /*   !!  !!  IMPORTANT  !!  !! */
//   /*
//   Below is the most up to-date version of a manager. Please leave this commented out
//   and don't delete it. This will be updated if any fields are added, removed or changed
//   and will allow updates without causing merge conflicts
//   */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
