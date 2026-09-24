// import styles from './POPOSList.module.css'
import data from './sfpopos-data.json'
import POPOSSpace from "./POPOSSpace"

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className='
      w-full m-0 box-border
      grid grid-cols-1 gap-8
      md:grid-cols-2 md:px-8 md:py-4
      lg:grid-cols-3 lg:gap-12 lg:px-12 lg:py-6
      2xl:grid-cols-4 2xl:gap-16 2xl:px-16 2xl:py-8
    '>
      {spaces}
    </div>
  )
}

export default POPOSList