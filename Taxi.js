class Taxi {
    constructor() {
    }
    drive(distance) {

        return new Promise((res, rej) => {
            let currentDistance = 0;

            //paleidziam cikla kuris kas sekunde ispausdina  nauja atstuma:

            const timer = setInterval(() => {
                console.log(`Nuvaziuotas atstumas ${++currentDistance} KM`);

                if (currentDistance === distance) {
                    clearTimeout(timer) //nukilinam cikla
                    console.log(`Kelione baigta`);
                    res(); //baigiam pazada
                }
            }, 1000);
        })
    }
}

module.exports = Taxi;