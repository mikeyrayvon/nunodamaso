import { useState } from 'react'

import EventListItem from './EventListItem'
import Container from '../Container'

const EventList = ({ docs }) => {
  return (
    <Container>
      <div className='flex flex-wrap -mx-6'>
        {docs.map((doc) => (
          <PostListItem doc={doc} key={doc.id} />
        ))}
      </div>
    </Container>
  )
}

export default EventList
