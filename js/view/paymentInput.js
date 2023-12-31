import updateModel from '../utils/updateModel.js'

function init(getData) {
    const input = document.getElementById('input-downpayment')

    const settings = {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        delimiter: ' '
    }

    const cleaveInput = new Cleave(input, settings)
    cleaveInput.setRawValue(getData().payment)

    input.addEventListener('input', function() {
        const value = +cleaveInput.getRawValue()
        console.log(value)

        if (value < getData().getMinPayment() || value > getData().getMaxPayment()) {
            input.closest('.param__details').classList.add('param__details--error')
        }

        if (value >= getData().getMinPayment() && value <= getData().getMaxPayment()) {
            input.closest('.param__details').classList.remove('param__details--error')
        }

        updateModel(input, { payment: value, onUpdate: 'inputPayment' })
    })

    input.addEventListener('change', function() {
        const value = +cleaveInput.getRawValue()

        if (value > getData().maxPrice) {
            input.closest('.param__details').classList.remove('param__details--error')
            cleaveInput.setRawValue(getData().getMaxPayment())
        }

        if (value < getData().minPrice) {
            input.closest('.param__details').classList.remove('param__details--error')
            cleaveInput.setRawValue(getData().getMinPayment())
        }

        updateModel(input, { payment: value, onUpdate: 'inputPayment' })
    })

    return cleaveInput
}

export default init