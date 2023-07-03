import * as Model from './model.js'
import programs from './view/radioPrograms.js'
import updateResultsView from './view/updateResultsView.js'
import costInput from './view/costInput.js'

const getData = Model.getData
programs(getData)

costInput(getData)

document.addEventListener('updateForm', (e) => {
    Model.setData(e.detail)

    const data = Model.getData()
    const results = Model.getResults()

    //Update results block
    updateResultsView(results)
})