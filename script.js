const data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

let stockReg = data.stock.stocks[34]
let stockRegKeys = Object.keys(stockReg)

function getName () {
    return data.displayedName.displayedName.value.join(' ')
}

function getAvailability () {
    return stockRegKeys.filter(item => stockReg[item] > 0)
}

function getMaxItem() {
    let sortStockReg = stockRegKeys.sort( (a, b) => stockReg[a] - stockReg[b])

    let maxRemains = {}
    maxRemains[sortStockReg[sortStockReg.length - 1]] = stockReg[sortStockReg[sortStockReg.length - 1]]
    return maxRemains
}

console.log(getName(), getAvailability(), getMaxItem());

