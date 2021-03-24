import moment from 'moment'

import EventListItem from './EventListItem'
import Container from '../Container'

const EventList = ({ docs }) => {
  const isToday = (date) => moment(date).isSame(moment(), 'day')
  const isFuture = (date) => moment(date).isAfter(moment(), 'day')
  const isPast = (date) => moment(date).isBefore(moment(), 'day')

  const futureDocs = docs.filter(doc => isToday(doc.data.start_date) || isFuture(doc.data.start_date))
  const pastDocs = docs.filter(doc => !isToday(doc.data.start_date) && isPast(doc.data.start_date))

  if (docs && docs.length > 0) {
    return (
      <>
        {futureDocs.length > 0 &&
          <section className='bg-blue-lightest pt-36'>
            <Container>
              <h2 className='mb-8 text-xl'>Upcoming Events</h2>
              <div className='flex flex-wrap -mx-6'>
                {docs.map(doc => (
                  <EventListItem doc={doc} key={doc.id} />
                ))}
              </div>
            </Container>
          </section>
        }
        {pastDocs.length > 0 &&
          <section className={futureDocs.length === 0 ? 'pt-36' : 'pt-28'}>
            <Container>
              <h2 className='mb-8 text-xl'>Past Events</h2>
              <div className='flex flex-wrap -mx-6'>
                {docs.map(doc => (
                  <EventListItem doc={doc} key={doc.id} />
                ))}
              </div>
            </Container>
          </section>
        }
      </>
    )
  }

  return (
    <section className='bg-blue-lightest pt-36'>
      <Container>
        <h2 className='pb-20 sm:pb-40 text-xl'>Events</h2>
      </Container>
    </section>
  )

}

export default EventList
