let data = {
    selectedProgram: 0.1,
    programs: {
        base: 0.1,
        it: 0.47,
        gov: 0.067,
        zero: 0.12
    }
}

function getData() {
    return {...data}
}

function setData(newData) {
    console.log('data', newData)
    data = {
        ...data,
        ...newData
    }

    console.log('New data', data)
}

export { getData, setData }