class LaciKonyha {
    constructor() {
        this.orders = [];
        this.guests = ['Márk','Zsófi', 'Narancs', 'don Gatto', 'Dexter', "Törpilla", "Józsi", "Birsa"];
        this.stock = [
            {
                name: 'ratmeat',
                amount: 20
            },
            {
                name: 'radish',
                amount: 10
            },
            {
                name: 'salad',
                amount: 30
            },
            {
                name: 'pita',
                amount: 5
            },
            {
                name: 'potato',
                amount: 10
            }
        ]
        this.menu = [
            {
                name: "gyros",
                ingredients: [
                    {
                        name: 'ratmeat',
                        amount: 2,         
                    },
                    {
                        name: 'salad',
                        amount: 5,                    
                    },
                    {
                        name: 'pita',
                        amount:2,                   
                    }
                ]
            },
            {
                name: "gyros bowl",
                ingredients: [
                    {
                        name: 'ratmeat',
                        amount: 2,         
                    },
                    {
                        name: 'salad',
                        amount: 5,                    
                    },
                    {
                        name: 'potato',
                        amount:2,                   
                    }
                ]
            },
            {
                name: "vega",
                ingredients: [
                    {
                        name: 'pita',
                        amount:1,
                    },
                    {
                        name: 'salad',
                        amount:15,                    
                    },
                    {
                        name: 'radish',
                        amount:10,                    
                    }
                ]
            }
            

        ]
    }
    enter(guest){
        if(this.guests.length < 10) {
            this.guests = [...this.guests, guest]
        }
        else console.log('too many people here')
    }
    leave(guest) {
        const guestIdx = this.guests.indexOf(guest);
        if(guestIdx > -1) {
            this.guests.splice(guestIdx,1)
        }
        else console.log(`${guest} is not here`)
    }
    order(guest, dish){
        const guestIdx = this.guests.indexOf(guest);
        if(guestIdx === -1) {
            console.log('this guest is not even here')
            return
        }
        this.menu.forEach(menuItem => {
            if(menuItem.name === dish){
                console.log('dish is on the menu');
                menuItem.ingredients.forEach(ingredient => {
                    this.stock.map(stockItem => {
                        if (stockItem.name == ingredient.name) {
                            if(stockItem.amount < ingredient.amount) {
                                console.log(`we are out of ${ingredient.name}`)
                                return
                            }
                            else {
                                stockItem.amount = stockItem.amount - ingredient.amount
                                const order = {
                                    guest: guest,
                                    dish: dish
                                }
                                this.orders.push(order)
                            }
                        }
                    })
                }
                )
            }
        })
    } 

}

const lacikonyha = new LaciKonyha();
console.log(lacikonyha)
lacikonyha.enter('Anna')
console.log(lacikonyha)
lacikonyha.enter('Patrik')
console.log(lacikonyha)
lacikonyha.leave('Patrik')
console.log(lacikonyha)
lacikonyha.leave('Patrik')
console.log(lacikonyha);
lacikonyha.enter('Petra')
console.log(lacikonyha);
lacikonyha.enter('Petra')
console.log(lacikonyha);
lacikonyha.order('Anna', 'gyros');
console.log(lacikonyha);
lacikonyha.order('Anna', 'gyros');
console.log(lacikonyha);
lacikonyha.order('Anna', 'gyros');
console.log(lacikonyha);

lacikonyha.order('Boró', 'gyros');





