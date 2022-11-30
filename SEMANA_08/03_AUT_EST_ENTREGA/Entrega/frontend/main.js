const getDBResDiv = "#getDB";
const api = 'http://127.0.0.1:3061'

/* CRUD database */
var users = {
    list() {
        $.ajax({
            url: api + '/personalidade',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<button class="insert" onclick="user.insert()">Inserir</button>';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += `<div class="title"><h2>${element.Personalidade} - ${element.Score}/5 </h2></div>`;
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="user.update(' + `${element.Cód}, '${element.Personalidade}', ${element.Score}` + ')"><p class="button-div">Editar</p></div>';
                            tx += '<div class="action" onclick="user.delete(' + element.Cód + ')"><p class="button-div">Excluir</p></div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#persona').html(tx);
            }
        });
        
    }
    
};
var user = {

    insert() {
        var Personalidade = prompt('Digite a personalidade:');
        var Score = prompt('Digite o score:');
        console.log(`${Personalidade} - ${Score}`);
        if (Personalidade && Score) {
            if (Personalidade.trim() != '' && Score.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/personalidadeinsert',
                    data: {Personalidade: Personalidade, Score: Score},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(Cód, oldTitle, oldScore) {

        var nome = prompt('Digite a nova personalidade:', oldTitle);
        var score = prompt('Digite o novo score:', oldScore);
        if (nome && score) {
            if (nome.trim() != '' && score.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/personalidadeupdate',
                    data: {Personalidade: nome, Cód: Cód, Score: score},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    console.log('FAIL');
                }).always(function (msg) {
                    console.log('ALWAYS');
                });
            }
        }
    },

    delete(Cód) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/personalidadedelete',
                data: {Cód: Cód},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}

$(document).ready(function(){
    const colorA = '#395B64';
    const colorB = '#373737';
    var currentColor = colorB;

    users.list();
    
    /* carroussel right */
    $('#right').click(function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active');
            nextImg.addClass('active')
        }
        else{
            currentImg.removeClass('active');
            $('#first-profile').addClass('active');
        }
    })
    /* carroussel left */
    $('#left').click(function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active');
            prevImg.addClass('active')
        }
        else{
            currentImg.removeClass('active');
            $('#last-profile').addClass('active');
        }
    })
    /* Change background color on click */
    $('.container').click(function(){
        if(currentColor == colorA){
            currentColor = colorB
            $('.container').css('background', currentColor)
        }
        else{
            currentColor = colorA
            $('.container').css('background', currentColor)
        }
    })

    
})

