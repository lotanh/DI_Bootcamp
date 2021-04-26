function isenoughMoney(wants) {
    if (wants.money > wants.cost) {
        console.log(`Im happy , I bought a ${wants.thing}`)
    } else {
        console.log(`Im sad, I need more ${wants.cost - wants.money}$ to buy it`)
    }
}
isenoughMoney({"money": 10000, "thing" : "computer", "cost" : 200})
isenoughMoney({"money":10000, "thing": "kitchen", "cost": 30000})
