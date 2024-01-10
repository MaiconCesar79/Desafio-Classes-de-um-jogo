class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atacar(type){
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
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }
}

let herois = new hero[("Maicon",20, "ninja"), ("Cleiton", 28, "monge"), ("Joseph", 48, "mago"), ("Ichiban", 35, "guerreiro")];