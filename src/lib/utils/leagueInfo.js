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
      "roster": 1,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "464542203771875328",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Erik Annenson",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Sacramento, CA", // (optional)
      "bio": "Erik is a force to be reckoned with in the world of fantasy football. As a strategic manager with a burning desire to make a name for himself, he brings a level of intensity and passion to the game that is unmatched. As a fire fighter, Erik knows that preparation and quick thinking are the keys to success. And he brings that same level of discipline and focus to his fantasy football game, spending countless hours analyzing stats, studying players, and fine-tuning his strategies. But it's not just about the numbers for Erik - he also has an uncanny ability to read the game, to anticipate his opponents' moves, and to make split-second decisions when it matters most. And make no mistake - Erik is not just in it to compete. He's in it to win. His competitive spirit and unyielding determination make him a true champion, and he's not afraid to take risks and try new things in order to come out on top. Whether he's battling blazes or battling it out on the fantasy football field, he's always thinking several steps ahead of his opponents. So what's next for this fiery fantasy football manager? Only time will tell. But one thing is for sure - he's hungry to make a name for himself in the world of fantasy football, and he's not going to stop until he reaches the top. With his strategic thinking, his fierce competitive spirit, and his unwavering love for the San Francisco 49ers, he's sure to make waves in the years to come.",
      "photo": "/managers/erik.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kayvaan", // Can be anything (usually your rival's name)
        link: "7", // manager array number within this array, or null to link back to all managers page
        image: "/managers/kayvaan.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5816, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Will sell left nut for a Niners SB win.", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "79658423637393408",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Bastiboo",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Luis Obispo, CA", // (optional)
      "bio": "Bastiboo, the premier up and coming fantasy football manager, is a force to be reckoned with. Known for his sharp wit and quick thinking, he's always one step ahead of his opponents - both on the field and off. When he's not busy crushing the competition in fantasy football, Bastiboo can be found practicing his jiu jitsu moves. His love for the sport runs deep - some say he even dreams in grappling techniques. But don't let his impressive skills on the mat fool you - he's just as deadly when it comes to picking the perfect lineup. But there's one thing that Bastiboo loves even more than fantasy football and jiu jitsu - his cats. Yes, you read that right. This tough, competitive manager has a soft spot for his furry feline friends. In fact, he's been known to take a break from analyzing stats to cuddle with his cats and watch funny cat videos online. So what makes Bastiboo stand out from the rest of the fantasy football crowd? It's his unique approach to the game. He's not afraid to take risks and try new strategies, even if they seem a little unorthodox. And with his killer combination of jiu jitsu skills, cat-like reflexes, and a razor-sharp mind, he's sure to take the fantasy football world by storm. Keep an eye out for Bastiboo - he's a rising star in the world of fantasy football, and he's just getting started. Whether he's choking out opponents on the mat or dominating the leaderboard, there's no stopping this cat-loving, jiu jitsu mastermind.",
      "photo": "/managers/bastiboo.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Himself", // Can be anything (usually your rival's name)
        link: "1", // manager array number within this array, or null to link back to all managers page
        image: "/managers/bastiboo.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 167, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "If you can't beat them in fantasy, make damn sure you can take them down with jiu jitsu.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Email",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "401600575495475200",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Champ",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Fresno, CA", // (optional)
      "bio": "Joe 'Champ' Bianchi is a true legend in the world of fantasy football. With an impressive track record of championship wins, he has established himself as one of the greatest managers of all time. But it's not just his success on the field that sets him apart - it's his unwavering passion for the game and his unrelenting drive to win. Joe's love for beating Kayvaan is well-known among fantasy football circles. Their epic rivalry has become the stuff of legend, with each matchup more intense than the last. But despite Kayvaan's best efforts, Joe always seems to come out on top. His strategic thinking and meticulous planning have made him a force to be reckoned with, and his ability to read the game like a book is second to none. But Joe's success is not just a product of his talent - it's a product of his dedication and hard work. He spends countless hours analyzing stats, poring over game footage, and researching players to ensure that he always has the upper hand. And his relentless pursuit of victory has earned him the respect and admiration of his peers. In short, Champ is a true champion in every sense of the word. His love for the game, his skill on the field, and his unyielding determination to win have made him an icon in the world of fantasy football. And as long as he's around, his opponents - including poor Kayvaan - had better watch out.",
      "photo": "/managers/joe.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jimmy", // Can be anything (usually your rival's name)
        link: "4", // manager array number within this array, or null to link back to all managers page
        image: "/managers/jimmy.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 954, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Be better.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "339223697556504576",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kevin Diza",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Las Vegas, NV", // (optional)
      "bio": "Kevin is a fantasy football manager who always seems to be on the cusp of greatness. With his confidence and swagger, he exudes the kind of energy that inspires his team to reach for the stars. And despite the fact that he's never quite made it to the top, there's a sense of hope and excitement that surrounds him every time he takes the field. But it's not just his personality that makes Kevin stand out - it's his demand for sauce. He's always on the lookout for the latest trends, from custom jerseys to flashy cleats, and he knows that looking good is just as important as playing well. And with his keen eye for style, his team is sure to turn heads both on and off the field. And while he may not have won the championship yet, Kevin is always learning and growing. He studies his opponents, refines his strategies, and works tirelessly to build the best team possible. He knows that success is just around the corner, and he's not going to stop until he gets there. So what's next for Kevin? The sky's the limit. With his combination of confidence, sauce, and talent, he's sure to make waves in the fantasy football world. And who knows - this may just be the year that he finally takes home the trophy. One thing is for sure - if he does, he's gonna look good while doing it.",
      "photo": "/managers/kevin.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 536, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Look good. Feel good. Play good. But mostly, look good.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 5,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "463940473484996608",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "James Raymond Clifton III",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pretty Much Chicago", // (optional)
      "bio": "Jimmy is a fantasy football manager with an uncanny resemblance to Mickey Mouse. But don't let his adorable appearance fool you - he's a fierce competitor with a talent for the game that is unparalleled. With a championship already under his belt, he's proven that he has what it takes to win. And with his propensity for luck, who knows what he'll achieve in the years to come. But it's not just luck that makes Jimmy stand out. He's also a strategic genius, always thinking several steps ahead of his opponents and making bold moves when they matter most. He has an intuitive understanding of the game that allows him to predict outcomes and make the right decisions, even in the most high-pressure situations. And yet, despite his talent and success, Jimmy remains humble and grounded. He knows that luck plays a role in the game, and he never takes his victories for granted. He works hard every day to refine his skills and build the best team possible, always striving to be better than he was the day before. So what's next for this talented fantasy football manager? Only time will tell. But one thing is for sure - he's got the skills, the talent, and the luck to take on the best of the best. Whether he's facing down his opponents on the field or in the boardroom, Jimmy is a force to be reckoned with - and he's only just getting started.",
      "photo": "/managers/jimmy.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joe", // Can be anything (usually your rival's name)
        link: "2", // manager array number within this array, or null to link back to all managers page
        image: "/managers/joe.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Sophomores", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Nobody wants a thousand plastic meatballs.", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 6,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "404377896925282304",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Shabes",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Chico, CA", // (optional)
      "bio": "Shabes is a gritty fantasy football manager who always believes he has a chance, even when the odds are stacked against him. He's the kind of person who never gives up, who keeps pushing forward no matter how difficult the situation may seem. And while he may not always come out on top, his resolve and determination are unmatched. One of Shabes' greatest strengths as a fantasy football manager is his ability to sell his team to others. He's a master of salesmanship, able to make even the most mediocre players sound like superstars. He knows how to build excitement and momentum around his team, and he's always looking for ways to get his opponents off balance. But it's not just his salesmanship that makes Shabes a force to be reckoned with. He's also a strategic genius, always thinking several moves ahead and making bold, game-changing decisions. He knows how to read his opponents and exploit their weaknesses, and he's never afraid to take risks when the situation calls for it.And while Shabes may not always win, he's never one to give up. He's always looking for ways to improve his team and his own skills, and he's constantly pushing himself to be better. So don't count him out just yet - with his resolve, determination, and salesmanship, he's got what it takes to go all the way.",
      "photo": "/managers/shabes.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6955, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "You gotta pay the cost to be the boss.", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 7,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "404453411153510400",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Joseph Luna",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Central Coast, CA", // (optional)
      "bio": "Joseph has been a diehard Detroit Lions fan his entire life, so it's no surprise that his love for football extends to the world of fantasy. He's been playing in the league for years, but he's always been stuck in the basement of teams, never quite able to break out of the bottom ranks. But this year, he's feeling something different. He's got a fire burning inside of him. Armed with the first overall draft pick, Joseph is poised to make a drive to finally break out of the shadows and become a champion. Perhaps he may even get his first win against Tim. He's ready to take on the challenge, and he knows he has what it takes to come out on top. He's got the power to choose the best player in the draft, and he's not going to waste it. Look out world, here he comes.",
      "photo": "/managers/joseph.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "TAHCMD", // Can be anything (usually your rival's name)
        link: "8", // manager array number within this array, or null to link back to all managers page
        image: "/managers/tim.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4149, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Oh, you think darkness is your ally. But you merely adopted the dark; I was born in it, molded by it. I didn't see the light until I was already a man, by then I had already accepted the truth. Jared Goff is my quarterback.", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Discord",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 8,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "356852380609871872",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kayvaan Ghovanloo",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "San Fransisco, CA", // (optional)
      "bio": "Kayvaan has been playing fantasy football for years, but he's always struggled to build a championship team. He's been stuck in the top 2-3, never quite able to put the final nail in the coffin. Specifically specking, despite his best efforts, he's never been able to dethrone his arch-nemesis, Joe. But this year, things are looking different. Kayvaan's team is filled with seasoned veterans who have been in the league for years. Some would say they're past their prime, but Kayvaan knows that they still have a lot of fight left in them. He's spent countless hours studying their stats and strategizing his draft picks, determined to finally build a team that can go toe-to-toe with the best of them. Kayvaan knows that he's up against some tough competition, but he's feeling confident. He's got a fire burning inside of him, a drive to finally prove himself and take down Joe. He's worked hard to build a team that's built to win, and he's not going to let anything stand in his way. As the season kicks off, Kayvaan can feel the excitement building. He's watching his team perform on the field, and he knows that they've got what it takes to compete with the best of them. He's been waiting for this moment for years, and he's not going to let it slip away. This year may finally be the year that Kayvaan breaks through and becomes a champion. He's got the talent, the experience, and the drive to make it happen. And he knows that he's not alone – his team is behind him every step of the way, ready to take on any challenge that comes their way. So watch out, Joe – Kayvaan is coming for you, and this year, he's not going to be stopped.",
      "photo": "/managers/kayvaan.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joe", // Can be anything (usually your rival's name)
        link: "2", // manager array number within this array, or null to link back to all managers page
        image: "/managers/joe.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2309, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My four quarters is worth your $5.", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 9,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "404707379788173312",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Tim DeMartimprey",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Central Coast, CA", // (optional)
      "bio": "Tim is a savvy fantasy football manager who is always considered a dark horse contender but is looking to break through and make a name for himself in the league. He's been playing for a few years now and his record is decent, but he knows that he has the potential to be great. One of Tim's biggest strengths is his ability to make savvy trades. He always seems to find a way to get the players he wants while giving up as little as possible in return. He's not afraid to take risks, but he's always calculated and methodical in his approach. His fellow managers know that they need to be careful when negotiating with Tim because he's always thinking a few steps ahead. Despite his successes, Tim is always hungry for more. He knows that he hasn't reached his full potential yet and is constantly looking for ways to improve. He's always reading up on the latest news and trends in the fantasy football world and is never satisfied with his current roster. His fellow managers respect his dedication and know that he's always a threat to make a deep playoff run. In short, Tim is a formidable opponent in the league who is always looking to improve and outsmart his competition. With his savvy trading skills, well-rounded team, and relentless drive, he's poised to break into the top echelon of fantasy football managers and make a name for himself as a true contender.",
      "photo": "/managers/tim.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Shabes", // Can be anything (usually your rival's name)
        link: "5", // manager array number within this array, or null to link back to all managers page
        image: "/managers/shabes.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5850, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Veterans", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "That's 'Sir Timothy Alexis Hughes Christopher Marie DeMartimprey' to you, you imbecile.", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 10,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "358880258877042688",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "MJ Padua",
      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Tucson, AZ", // (optional)
      "bio": "Mj is a once-great manager who has fallen from grace. But don't be fooled, MJ is not one to be underestimated. He has the been a part of the most trades in the league and is always willing to pull the trigger if there's a chance it moves the needle forward for his team. He's looking to get back to the top of the heap, and he's got the determination to do it. MJ's downfall came from a few unwise trades, but he's learned from his mistakes and is ready to take on the league once again. He's spent countless hours analyzing player stats and keeping an eye on the waiver wire, always looking for that next big trade. And with his years of experience, there's no doubt that he has a few tricks up his sleeve. Some may see MJ as a has-been, but that couldn't be further from the truth. He's always been a contender, and he's got the drive to prove it. He's got a shrewd mind for the game, always staying one step ahead of his opponents. His determination and passion for the sport have kept him in the game, and this year he's looking to make his comeback. The league should watch out for MJ, as he's a dark horse with the potential to take the championship. He's got the skill, the knowledge, and the willingness to make trades to take his team to the top. And who knows, maybe this year he'll make the trades that will finally bring him back to his former glory.",
      "photo": "/managers/mj.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jimmy", // Can be anything (usually your rival's name)
        link: "4", // manager array number within this array, or null to link back to all managers page
        image: "/managers/jimmy.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3161, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Sophomores", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "'miChaEL ThoMaS iS a ToP 3 wR aLL tiMe.'", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
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
    
