import dayjs from "dayjs"

const mapData = (seasonsData) => {
    return seasonsData.map(data => {
        return {points:data.pts, assists:data.ast, rebounds: data.reb, date: dayjs(data.game.date).format('MM/DD/YYYY'), id:data.id}
    })
}
  
export { mapData }