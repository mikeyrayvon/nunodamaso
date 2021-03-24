const Hero = ({ image }) => {
  return (
    <section className='relative h-screen w-screen bg-center bg-cover' style={{
      backgroundImage: `url("${image.url}")`
    }}>
      <div className='absolute inset-0 bg-gradient-to-t from-blue-light to-transparentGray'></div>
      <div className='absolute inset-0 flex flex-col justify-center text-center items-center text-white p-4'>
        <div className='mb-2'>
          <h1 className='text-4xl font-serif'>Holistic Health Coaching</h1>
        </div>
        <div>
          <span className='uppercase'>Nuno Damaso</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
