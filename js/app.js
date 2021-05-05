function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.style.background = "#abdaf2";
}

function denyDrop(ev) {
    ev.stopPropagation();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function leave(ev) {
    ev.preventDefault();
    ev.target.style.background = "inherit";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.target.style.background = "inherit";

    //Atualiza as quantidades totais quando move o produto
    atualizaTotal();
}

$("#produtos").mousedown(function () {
    $("#produtos #qtde-1").prop("disabled", true);
    $("#produtos #qtde-2").prop("disabled", true);
});

$("#checkout").mousedown(function () {
    $("#checkout #qtde-1").prop("disabled", false);
    $("#checkout #qtde-2").prop("disabled", false);
});

$("input[name='qtde']").change(function () {
    atualizaTotal();
});

const atualizaTotal = () => {
    var total = 0;
    var quantidade_total = 0;
    $("#checkout").find("article").each(function (idx) {

        var quantidade = $(this).find("input[name='qtde']").val();
        var preco = $(this).find("input[name='valor']").val();
        var sub_total = quantidade * preco;
        quantidade_total = quantidade_total + parseInt(quantidade);
        total = total + sub_total;
    })

    $("#valor-total").html(total);
    $("#total-itens").html(quantidade_total);

};