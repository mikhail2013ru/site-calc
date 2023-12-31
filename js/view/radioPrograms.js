import updateModel from "./../utils/updateModel.js"

function init(getData) {
    const radioBtns = document.querySelectorAll('input[name="program"]')
    const { base, it, gov, zero } = getData().programs
    document.getElementById('base-value').value = base
    document.getElementById('it-value').value = it
    document.getElementById('gov-value').value = gov
    document.getElementById('zero-value').value = zero

    document.getElementById('base-text').innerText = base * 100 + '%'
    document.getElementById('it-text').innerText = it * 100 + '%'
    document.getElementById('gov-text').innerText = gov * 100 + '%'
    document.getElementById('zero-text').innerText = zero * 100 + '%'

    radioBtns.forEach(function (radioBtn) {
        radioBtn.addEventListener('change', function () {
            updateModel(this, {
                selectedProgram: parseFloat(this.value),
                onUpdate: 'radioProgram',
                id: this.id
            })
        })
    })
}

export default init