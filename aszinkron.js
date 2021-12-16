class MyAszinkron{
    constructor(){}
    getAdat(apiVegPont,valtozo,mmyCallBack,mmyCallhiba){
        $.ajax({
            url: apiVegPont,
            type: "GET",
            success:function(result){
                valtozo=result;
                mmyCallBack(valtozo);
            },
            error:function(hibakod){
                mmyCallhiba(hibakod);
            }
        })
    }
}