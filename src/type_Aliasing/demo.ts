
type address= {
    city:string,
    pincode:number

}

type player={

    name:string,
    jerseyNumber:number,
    salary:number,
    club:string[],
    address:address


}

const player_1:player = {
    name:'Gerath Bale',
    jerseyNumber:11,
    salary:11990,
    club:['Real Madrid','Tottenham Hotspurs'],
    address:{
        city:'Madrid',
        pincode:312
    }

}

const player_2:player ={

    name:'Luis Suarez',
    jerseyNumber:9,
    salary:11990,
    club:['Liverpool','Barcelona'],
    address:{
        city:'Barcelona',
        pincode:313
    }

}

console.log(player_1.club[2]);
