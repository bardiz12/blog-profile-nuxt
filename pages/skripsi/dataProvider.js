const csvtojson = require("csvtojson")
const labels = [
    "Normal",
    "Penipuan",
    "Promosi"
]

const mapIndexToLabelName = (rows, label_field="label") => {
    return rows.map(item => {
        const obj = {}
        obj[label_field] = labels[parseInt(item[label_field])]
        return {
            ...item,
            ...obj
        }
    })
}

const getData = async (url) => {
    const data = await (await fetch(url)).text()
    const rows = await csvtojson().fromString(data)
    const header = Object.keys(rows[0])

    return {
        header,
        data : mapIndexToLabelName(rows)
    }
}
const getDatasetAwal = async () => {
    return await getData("./dataset_ori.csv")
}

module.exports = {
    getDatasetAwal,
    getData
}