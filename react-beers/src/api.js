import axios from 'axios'

const service = axios.create({
    baseURL: 'https://ironbeer-api.herokuapp.com/beers/'
})

export default {
    getBeers(){
        if(localStorage.getItem('beers')){
            console.log("CACHE")
            return new Promise((resolve, reject) => {
                resolve(JSON.parse(localStorage.getItem('beers')))
            })
        }
        else {
            console.log("NO CACHE")
            return service.get('all')
                .then(res => {
                    let beers = res.data
                    localStorage.setItem('beers', JSON.stringify(beers))
                    return beers
                })
        }
    },
    getSingleBeer(id){
        return service.get(`single/${id}`)
            .then(res => {return res})
    },
    getRandomBeer(){
        return service.get('random')
            .then(res => {return res})
    },
    createNewBeer(newBeer){
        return service.post('new', newBeer)
            .then(res => {return res})
    }
}