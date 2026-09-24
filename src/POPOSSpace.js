// import styles from './POPOSSpace.module.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className='
      w-full min-w-0 shadow-lg
      md:overflow-hidden md:border md:border-brand md:rounded-lg
    '>
      <Link to={`/details/${id}`}>
        <img
          className='w-full h-auto 
            object-cover object-center 
            aspect-video lg:aspect-auto'
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={`${name}`} />
        <div className='m-0 py-2 px-4 
          flex flex-1 justify-between gap-1
          lg:flex-col lg:gap-2 lg:pb-4
        '>
          <h1 className='text-start m-0 text-2xl 
            lg:text-center'>{name}</h1>
          <div className='flex flex-col'>
            <p className='m-1 lg:m-0 text-brand'><em>{address}</em></p>
            <p className='m-1 lg:m-0'>{hours}</p>
          </div>
        </div>
      </Link>
    </div >
  )
}

export default POPOSSpace