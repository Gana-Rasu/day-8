//CIRCLE

class Circle{
    constructor(color,radius){
        this.radius=radius
        this.color=color
    }

    getRadius(){
        return this.radius;
    }
    setRadius(){
        this.radius=2.0
        return this.radius
    }
    getColor(){
        return this.color
    }
    setColor(){
        this.color="green"
        return this.color
    }
    toString(){
        return [this.color,this.radius]
    }
    getArea(){
        return 3.14*this.radius*this.radius
    }
    getCircumfernce(){
        return 2*3.14*this.radius
    }
}

var circle1= new Circle("red",1.0)
console.log(circle1.getArea())


// CALCULATE UBER PRICE

class uber{
    constructor(car,no_of_km,cost_per_km){
        this.car = car
        this.no_of_km = no_of_km
        this.cost_per_km = 12 
    }
    getPrice(){
        return this.no_of_km*this.cost_per_km
    }

}

var uber1 = new uber("lenovo",34)
console.log(uber1.getPrice())

//PERSON CLASS

class Person{
    constructor(name,age,ph,city){
        this.name=name
        this.age=age
        this.city=city
        this.ph=ph
    }
}
var Person1 = new Person("Raul Garcia",32,"spain",34567890)
console.log(Person1)