class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atacar(type = this.type){
        let ataque = "";
        switch(type){
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }
        if(ataque === ""){
            console.log("Classe não registrada!");
        }else{
            console.log(`O ${this.type} atacou usando ${ataque}`);
        }
    }
}

let herois = [
    new hero("Maicon", 20, "ninja"),
    new hero("Cleiton", 28, "monge"),
    new hero("Joseph", 48, "mago"),
    new hero("Ichiban", 35, "guerreiro"),
    new hero("Natsu", 16, "dragonSlayer")
];

for(let i in herois){
    herois[i].atacar();
}
