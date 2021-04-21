export const totalPriceItems = order => {
//количество топингов
    const countTopping = order.topping && order.topping.filter(item => item.checked).length
//стоимость топов
    const priceTopping = (order.price * 0.1) * countTopping;

    return (order.price + priceTopping) * order.count;
};

export const formatCurrency = value => value.toLocaleString('ru-RU',
{style: 'currency', currency: 'RUB'});

//ф-я возврашает новый обьект из заказа
export const projection = rules => {
    //достаем нужные ключи из базы
    const keys = Object.keys(rules);
    return obj => keys.reduce((newObj, key) => {
        newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
        return newObj;
    }, {})
};
