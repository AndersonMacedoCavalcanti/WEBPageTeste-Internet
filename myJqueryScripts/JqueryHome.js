$(function () {

    $(function () {
        $(".containerPromo").css("width",$(window).width());
        $(".containerPromoAvatar").css("width",$(window).width());
        $("#janelaprincPrinc").css("width",$(window).width());
    })

    function f() {

        let altura = $(window).height()-16
        let largura = $(window).width()

        $(".containerPromo").css("width",largura);
        $(".containerPromoAvatar").css("width",largura);
        $("#janelaprincPrinc").css("width",largura);



    }

    $(window).resize(function () {
        f()
    })


    $(function () {

        var limite;

        function animar() {

            $("#janelaPrinc").animate({top:"-=400"},1000, function () {

                if($("#janelaPrinc").position().top == limite+400){
                    $("#janelaPrinc").animate({top:"0"},0)
                }
            })
        }

        $(function () {

            limite =$("#janelaPrinc img").length * $("#janelaPrinc img").height()*-1;


            setInterval(animar,6000);



        })


    })


})
