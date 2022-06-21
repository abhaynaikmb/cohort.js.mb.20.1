const league_data = {
    manutd: {
        name: "Manchester United FC",
        table: {
            played: 38,
            wins: 27,
            loss: 6,
            draws: 5
        }
    },
    livepool: {
        name: "Liverpool FC",
        table: {
            played: 38,
            wins: 29,
            loss: 8,
            draws: 1
        }
    },
    chelsea: {
        name: "Chelsea FC",
        table: {
            played: 38,
            wins: 23,
            loss: 3,
            draws: 12
        }
    },
    arsenal: {
        name: "Arsenal FC",
        table: {
            played: 38,
            wins: 26,
            loss: 11,
            draws: 1
        }
    }, mancity: {
        name: "Manchester City FC",
        table: {
            played: 38,
            wins: 31,
            loss: 5,
            draws: 2
        }
    }, spurs: {
        name: "Tottenham Hotspur FC",
        table: {
            played: 38,
            wins: 21,
            loss: 12,
            draws: 5
        }
    }
}




let sortedTeams=Object.keys(league_data);
let sortedTeam=Object.keys(league_data);
let sortedLeague_data={};

// Q1. Add 'pts' property to the table. .
//     Pts calculation:  win = 3 pts , draw = 1pt , loss = 0 pts.


for(let [key,value] of Object.entries(league_data)){
    value.table.pts= ((value.table.wins)*3)+(value.table.draws)
}



// Q2. Sort the data based on the highest to lowest pts.
//     If two teams have same pts ..sort them based on name.


sortedTeams=sortedTeams.sort((teamA,teamB) =>{ 

ptsTeamA=(league_data[teamA]).table.pts;
ptsTeamB=(league_data[teamB]).table.pts;
if(ptsTeamA==ptsTeamB)
{
return league_data[teamA].name-league_data[teamB].name;
}
return ptsTeamA-ptsTeamB;
});

for(let i=0;i<sortedTeams.length;i++){
 sortedLeague_data={ ...sortedLeague_data ,[sortedTeams[i]] : league_data[sortedTeams[i]] };

}


console.log(sortedLeague_data)


//Q3. Write a method to generate data in the following form
  //  {
     //   team: [wins, losses], 
    // }


const newForms =sortedTeam.reduce((newForm,league)=> {
    
let wins= league_data[league].table.wins;
let loss= league_data[league].table.loss;
 
return {...newForm, [league] : [wins,loss]};
},{})
console.log(newForms)


//Q4. Copy the league_data into another object.
const copyLeague_data= {...league_data};
console.log(copyLeague_data)