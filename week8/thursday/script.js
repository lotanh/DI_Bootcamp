
// way 1
const formatDate = (dates) => {
    let newArr = [];
    console.log(dates)
    let addZero;
    let x = dates.toISOString().substring(0, 10);
    console.log(x)
    let time = dates.toISOString().substring(11, dates.length);
    // console.log(time);
    // console.log(x)
    x = x.split("");
    time = time.split(':')
    // console.log(time);
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== "-") {
            newArr.push(x[i]);
        } 
    }
    for (let j = 0; j < time.length; j++) {
        if (time[j].length > 2) {
            newArr.push(time[j].substring(0 , 2));
            console.log(newArr);
        } else {
            newArr.push(time[j]) 
            console.log(newArr);
        }
        
    }
    if (14 > newArr.length) {
        addZero = 14 - newArr.length;
        // console.log(addZero);
        let zeros = "0".repeat(addZero);
        // console.log(zeros);
        (newArr.push(zeros));
        x = newArr.join("");
        console.log(x);
    }else {
        x = newArr.join("");
        console.log(x);
    }
    
}

// way 2

Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad2(n) { 
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +
               pad2(this.getMonth() + 1) + 
               pad2(this.getDate()) +
               pad2(this.getHours()) +
               pad2(this.getMinutes()) +
               pad2(this.getSeconds());
    }
});

alert(new Date().YYYYMMDDHHMMSS()); 

formatDate(new Date(2020, 6, 4, 8, 0, 0))
formatDate(new Date(2019, 11, 31, 23, 59, 59))
formatDate(new Date(2020, 6, 4))

