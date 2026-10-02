import { useState } from 'react'

const controlClasses = "box-border min-h-11 w-full rounded border border-gray-400 bg-white px-3 py-2 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus:ring-red-200"

function POPOSForm() {
  const [errors, setErrors] = useState({})

  function handleInvalid(event) {
    const { name, validationMessage } = event.currentTarget
    setErrors((currentErrors) => ({ ...currentErrors, [name]: validationMessage }))
  }

  function clearValidError(event) {
    const { name, validity } = event.currentTarget
    if (validity.valid) {
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors }
        delete nextErrors[name]
        return nextErrors
      })
    }
  }

  function errorMessage(name) {
    return errors[name] && (
      <p id={`${name}-error`} className="text-sm text-red-700">
        {errors[name]}
      </p>
    )
  }

  return (
    <div className='px-8'>
      <h1 id="space-form-title" className="text-[clamp(1.5rem,4vw,2rem)] font-bold">Submit a New Space!</h1>

      <form
        aria-labelledby="space-form-title"
        className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 py-4 md:mx-auto md:grid-cols-2 md:gap-6"
      >

        {/* Space Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor='title' className="font-medium">Space Name:</label>
          <input
            id='title' name='title'
            type='text' required
            className={controlClasses}
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'title-error' : undefined}
            aria-errormessage={errors.title ? 'title-error' : undefined}
            onInvalid={handleInvalid}
            onChange={clearValidError}>
          </input>
          {errorMessage('title')}
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label htmlFor='address' className="font-medium">Address:</label>
          <input
            id='address' name='address'
            type='text' autoComplete='street-address' required
            className={controlClasses}
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? 'address-error' : undefined}
            aria-errormessage={errors.address ? 'address-error' : undefined}
            onInvalid={handleInvalid}
            onChange={clearValidError}>
          </input>
          {errorMessage('address')}
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-1">
          <label htmlFor='hours' className="font-medium">Hours:</label>
          <input
            id='hours' name='hours'
            type='text' required
            className={controlClasses}
            aria-invalid={Boolean(errors.hours)}
            aria-describedby={errors.hours ? 'hours-error' : undefined}
            aria-errormessage={errors.hours ? 'hours-error' : undefined}
            onInvalid={handleInvalid}
            onChange={clearValidError}>
          </input>
          {errorMessage('hours')}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label htmlFor='desc' className="font-medium">Description:</label>
          <textarea
            id='desc' name='desc' rows='4'
            className={`${controlClasses} min-h-28`}>
          </textarea>
        </div>

        {/* Indoor / Outdoor / Both */}
        <fieldset className="flex flex-wrap content-start gap-x-4 gap-y-1">
          <legend className="mb-1 w-full font-medium">Environment:</legend>

          <label htmlFor="indoor" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="indoor" name="environment" value="indoor"
              type="radio"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>Indoor
          </label>

          <label htmlFor="outdoor" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="outdoor" name="environment" value="outdoor"
              type="radio"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>Outdoor
          </label>

          <label htmlFor="both" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="both" name="environment" value="both"
              type="radio"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>Both
          </label>
        </fieldset>

        {/* Amenities */}
        <fieldset className="grid grid-cols-1 gap-x-3 gap-y-1 md:grid-cols-2">
          <legend className="mb-1 font-medium">Amenities:</legend>

          <label htmlFor="seating" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="seating" name="amenities" value="seating"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>seating
          </label>

          <label htmlFor="art" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="art" name="amenities" value="art"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>public art
          </label>

          <label htmlFor="restrooms" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="restrooms" name="amenities" value="restrooms"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>restrooms
          </label>

          <label htmlFor="dining" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="dining" name="amenities" value="dining"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>nearby dining
          </label>

          <label htmlFor="cafe" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="cafe" name="amenities" value="cafe"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>nearby cafe
          </label>

          <label htmlFor="outlets" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="outlets" name="amenities" value="outlets"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>power outlets
          </label>

          <label htmlFor="wifi" className="flex min-h-11 cursor-pointer items-center gap-2">
            <input id="wifi" name="amenities" value="wifi"
              type="checkbox"
              className="h-5 w-5 shrink-0 accent-brand">
            </input>wifi
          </label>
        </fieldset>

        {/* Main Photo */}
        <div className="flex flex-col gap-1">
          <label htmlFor='mainPhoto' className="font-medium">Main Photo:</label>
          <input
            id='mainPhoto' name='mainPhoto'
            type='file' accept="image/*" required
            className={controlClasses}
            aria-invalid={Boolean(errors.mainPhoto)}
            aria-describedby={errors.mainPhoto ? 'mainPhoto-error' : undefined}
            aria-errormessage={errors.mainPhoto ? 'mainPhoto-error' : undefined}
            onInvalid={handleInvalid}
            onChange={clearValidError}>
          </input>
          {errorMessage('mainPhoto')}
        </div>

        {/* Additional Photos */}
        <div className="flex flex-col gap-1">
          <label htmlFor='additionalPhotos' className="font-medium">Additional Photos:</label>
          <input
            id='additionalPhotos' name='additionalPhotos'
            type='file' accept="image/*"
            className={controlClasses}>
          </input>
        </div>

        <input type="submit" value='SUBMIT SPACE'
          className="min-h-11 w-full cursor-pointer rounded bg-brand px-4 py-2 font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 md:col-span-2 md:w-auto md:justify-self-end">
        </input>
      </form>
    </div>
  )
}

export default POPOSForm