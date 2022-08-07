import dayjs from "dayjs"

const mapData = (seasonsData) => {
    return seasonsData.map(data => {
        if (data.game.home_team_id === 8)  {
            return {points:data.pts, assists:data.ast, rebounds: data.reb, date: dayjs(data.game.date).format('MM/DD/YYYY'), id:data.id, opponent:data.game.visitor_team_id}
        } else {
            return {points:data.pts, assists:data.ast, rebounds: data.reb, date: dayjs(data.game.date).format('MM/DD/YYYY'), id:data.id, opponent:data.game.home_team_id}
        }
    })
}

const mapTeams = (teamsData) => {
    console.log(teamsData)
    return teamsData.map(data => {
        return {id:data.id, team: data.abbreviation}
    })
}
  
export { mapData, mapTeams }