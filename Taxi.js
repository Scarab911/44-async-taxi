class Taxi {
    constructor() {
    }
    print(km) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (typeof km === 'number') {
                    res(`Nuvaziuota: ${km} km.`);
                } else {
                    rej('Kilometrai turi buti skaiciai.');
                }
            }, 1000);
        })
    }

    async drive(distance) {
        for (let i = 1; i <= distance; i++) {
            await this.print(i)
                .then((msg) => {
                    console.log(msg);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log('Kelione baigta.');
    }



    // drive(distance) {

    //     return new Promise((res, rej) => {
    //         let currentDistance = 0;

    //         //paleidziam cikla kuris kas sekunde ispausdina  nauja atstuma:

    //         const timer = setInterval(() => {
    //             console.log(`Nuvaziuotas atstumas ${++currentDistance} KM`);

    //             if (currentDistance === distance) {
    //                 clearTimeout(timer) //nukilinam cikla
    //                 console.log(`Kelione baigta`);
    //                 res(); //baigiam pazada
    //             }
    //         }, 1000);
    //     })
    // }
}

module.exports = Taxi;