import moment from 'moment'
const formatDate = (date) => {
    let time = moment(date).locale('es').format('LL')
    return time
}
export default formatDate