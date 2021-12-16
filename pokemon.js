class pokemonok{
    constructor(node,elem,i){
        this.elem=elem;
        this.elem.i=i;
        this.node=node;
        this.id=this.node.children(".id");
        this.Nev=this.node.children(".nev");
        this.Kep=this.node.children(".kep");
        this.Kepesseg=this.node.children(".kepesseg");
        this.Gomb=this.node.children(".kivalaszt");
        this.setAdat(elem);
        $(".kivalaszt").on("click",function(){
            console.log("nezzuk");
        })
    }
        

    setAdat(adat){
        this.id.text(adat.id);
        this.Nev.text(adat.name);
        this.Kep.attr("src",adat.sprites.front_default);
        this.Kepesseg.text(adat.abilities[0].ability.name);
        this.Gomb.text("kivalaszt");
    }





    
}