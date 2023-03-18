console.log('Advanced debugging example running.');
debugger;

let gameObject = function(){
  returnObject ={
  home: {
    "teamName": "Brooklyn Nets",
    "colors": "Black, White",
    "players": {
      "Alan Anderson" : {
        "number": 0,
        "shoe": 16,
        "points": 22,
        "rebounds": 12,
        "assists": 12,
        "steals": 3,
        "blocks": 1,
        "slamDunks":1
      },
      "Reggie Evans" : {
        "number": 30,
        "shoe": 14,
        "points": 12,
        "rebounds": 12,
        "assists": 12,
        "steals": 12,
        "blocks": 12,
        "slamDunks": 7
      },
      "Brook Lopez" : {
        "number": 11,
        "shoe": 17,
        "points":17,
        "rebounds":19,
        "assists":10,
        "steals":3,
        "blocks": 1,
        "slamDunks":15
      },
      "Mason Plumlee" : {
        "number": 1,
        "shoe": 19,
        "points": 26,
        "rebounds": 12,
        "assists": 6,
        "steals": 3,
        "blocks": 8,
        "slamDunks":5
      },
      "Jason Terry" : {
        "number": 31,
        "shoe": 15,
        "points": 19,
        "rebounds": 2,
        "assists": 2,
        "steals": 4,
        "blocks": 11,
        "slamDunks":1
      }

    }
  },
  away: {
    "teamName": "Charlotte Hornets",
    "colors": "Turquoise, Purple",
    "players": {
      "Jeff Adrien" : {
        "number": 4,
        "shoe": 18,
        "points": 10,
        "rebounds": 1,
        "assists": 1,
        "steals": 2,
        "blocks": 7,
        "slamDunks":2
      },
      "Bismak Biyombo" : {
        "number": 0,
        "shoe": 16,
        "points": 12,
        "rebounds": 4,
        "assists": 7,
        "steals": 7,
        "blocks": 15,
        "slamDunks":10
      },
      "DeSagna Diop" : {
        "number": 2,
        "shoe": 14,
        "points": 24,
        "rebounds": 12,
        "assists": 12,
        "steals": 4,
        "blocks": 5,
        "slamDunks":5
      },
      "Ben Gordon" : {
        "number": 8,
        "shoe": 15,
        "points": 33,
        "rebounds": 3,
        "assists": 2,
        "steals": 1,
        "blocks": 1,
        "slamDunks":0
      },
      "Brendan Haywood" : {
        "number": 33,
        "shoe": 15,
        "points": 6,
        "rebounds": 12,
        "assists": 12,
        "steals": 22,
        "blocks": 5,
        "slamDunks":12
      }
      
    }
  }};
  return returnObject;
}

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
// goodPractices()

function numPointsScored(name){
  let games = gameObject();
  for (let team in games){
      for (let player in games[team]["players"]){
          if (player === name){
              return games[team]["players"][player]["points"];
          }
      }
  } return "Player not found";
}

function shoeSize(name){
  let games = gameObject();
  for (let team in games){
      for (let player in games[team]["players"]){
          if (player === name){
              return games[team]["players"][player]["shoe"];
          }
      }
  } return "Player not found";
}

function teamColors(name){
  let games = gameObject();
  for (let team in games){
    if (name === games[team]["teamName"]){
      return games[team]["colors"];
    }
  } return "Team not found";
}

function teamNames(){
let array = [];
let games = gameObject();
  for (let team in games){
    array.push(games[team]["teamName"]);
  } return array;
}

function playerNumbers(name){
  let games = gameObject();
  let array = [];
  for (let team in games){
    if(name === games[team]["teamName"]){
      for(player in games[team]["players"]){
        array.push(games[team]["players"][player]["number"]);
      } 
    }  
  } return array;
}

function playerStats(name){
  let games = gameObject();
  for (let team in games){
      for (let player in games[team]["players"]){
          if (player === name){
              return games[team]["players"][player];
          }
      }
  } return "Player not found";
}

function bigShoeRebounds(){
  let game = gameObject();
  let maxShoeSize = 0;
  let playerWithMaxShoeSize;
  
  // Find the player with the largest shoe size
  for(let team in game){
    for(let player in game[team].players){
      let currentPlayer = game[team].players[player];
      if(currentPlayer.shoe > maxShoeSize){
        maxShoeSize = currentPlayer.shoe;
        playerWithMaxShoeSize = currentPlayer;
      }
    }
  }
  
   return playerWithMaxShoeSize.rebounds;
}