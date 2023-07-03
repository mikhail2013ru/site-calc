function init(getData) {
    const input = document.getElementById('input-cost')

    const settings = {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        delimiter: ' '
    }

    new Cleave(input, settings)
}

export default init