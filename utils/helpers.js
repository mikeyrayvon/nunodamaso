import moment from 'moment'

export const constructDatespan = (start_date, end_date) => {
  if (start_date === null)
    return null

  if (end_date === null)
    return moment(start_date).format("Do MMMM YYYY")

  const isSameDay = moment(start_date).isSame(moment(end_date), 'day')

  if (isSameDay)
    return moment(start_date).format("Do MMMM YYYY")

  const isSameMonth = moment(start_date).isSame(moment(end_date), 'month')

  if (isSameMonth)
    return moment(start_date).format("Do") + ' — ' +  moment(end_date).format("Do MMMM YYYY")

  return moment(start_date).format("Do MMMM") + ' — ' +  moment(end_date).format("Do MMMM YYYY")
}
