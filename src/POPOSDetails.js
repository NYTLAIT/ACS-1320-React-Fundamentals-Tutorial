// import styles from './POPOSDetails.module.css'
import { useParams } from 'react-router'
import data from './sfpopos-data.json'

function POPOSDetails() {
  const params = useParams()
  const { id } = params
  const { images, title, desc, hours, features, address, website } = data[id]

  return (
    <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
          alt={title}
          className="block w-full h-auto object-cover"
        />
      </div>

      <div className="p-2">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
        <p className='py-2'>{desc}</p>

        <div className="py-2 px-4">
          {hours && <p><b>Hours: </b>{hours}</p>}
          {address && <p><b>Address: </b>{address}</p>}
        </div>

        <div className="pt-2 pb-4 px-4">
          {features && <p><b>Features: </b></p>}
          <ul className="list-none p-0 m-0">
            {features.map(feature => (
              <li key={feature}> - {feature}</li>
            ))}
          </ul>
        </div>

        {website && (
          <a className="text-brand hover:underline" href={website}>
            ᯓ➤ Visit the {title} Site</a>
        )}
      </div>
    </div>
  )
}

export default POPOSDetails