/**
 * Created by Serhiy on 10.04.17.
 */
/* Функция cкрывает блок */
function show(element_id) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_id)) {
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById(element_id);
        //Если css-свойство display не block, то:
        if (obj.style.display != "block") {
            obj.style.display = "block"; //Показываем элемент
        }
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
}

function hide(element_id) {
    if (document.getElementById(element_id)) {
        //Записываем ссылку на элемент в переменную obj1
        var obj1 = document.getElementById(element_id);
        //Если css-свойство display block, то:
        if (obj1.style.display = "block") {
            obj1.style.display = "none"; //Скрываем элемент
        }
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_id + " не найден!");
}