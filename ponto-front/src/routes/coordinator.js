export const goToHome = (history) => {
    history.push('/')
}

export const goToForm = (history) => {
    history.push('/registrar')
}

export const goToRecords = (history) => {
    history.push('/registros')
}

export const goToRecordDetail = (history, id) => {
    history.push(`/validar/${id}`)
}

export const goToError = (history) => {
    history.push('/error')
}