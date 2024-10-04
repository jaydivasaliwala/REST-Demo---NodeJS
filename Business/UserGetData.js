const data = [
    {
        id:1,
        name:"dj",
        age:"23"
    },
    {
        id:2,
        name:"ramesh",
        age:"25"
    },
    {
        id:3,
        name:"joy",
        age:"30"
    }
]

const UserGetData = (id) => {
    return data.filter(d => d.id == id)
}

module.exports = {data, UserGetData}