function POPOSForm() {
  return (
    <div className='px-8'>
      <h1 className="text-3xl font-bold">Submit a New Space!</h1>

      <form className="
      py-4
      flex flex-col gap-4">

        {/* Space Name */}
        <div className="flex flex-col">
          <label for='title'>Space Name:</label>
          <input
            id='title' name='title'
            type='text' required
            className="border-2">
          </input>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label for='address'>Address:</label>
          <input
            id='address' name='address'
            type='text' autocomplete='street-address' required
            className="border-2">
          </input>
        </div>

        {/* Hours */}
        <div className="flex flex-col">
          <label for='hours'>Hours:</label>
          <input
            id='hours' name='hours'
            type='text' required
            className="border-2">
          </input>
        </div>

        {/* Decription */}
        <div className="flex flex-col">
          <label for='desc'>Description:</label>
          <textarea
            id='desc' name='desc' rows='' cols='20'
            className="border-2">
          </textarea>
        </div>

        {/* Indoor / Outdoor / Both */}
        <fieldset className="flex gap-4">
          <legend>Environment:</legend>

          <label for="indoor" className="flex gap-1">
            <input id="indoor" name="environment" value="indoor"
              type="radio"
              className="">
            </input>Indoor
          </label>

          <label for="outdoor" className="flex gap-1">
            <input id="outdoor" name="environment" value="outdoor"
              type="radio"
              className="">
            </input>Outdoor
          </label>

          <label for="both" className="flex gap-1">
            <input id="both" name="environment" value="both"
              type="radio"
              className="">
            </input>Both
          </label>
        </fieldset>

        {/* Amenities */}
        <fieldset className="flex flex-col gap-1">
          <legend>Amenities:</legend>

          <label for="seating" className="flex gap-1">
            <input id="seating" name="amenities" value="seating"
              type="checkbox"
              className="">
            </input>seating
          </label>

          <label for="art" className="flex gap-1">
            <input id="art" name="amenities" value="art"
              type="checkbox"
              className="">
            </input>public art
          </label>

          <label for="restrooms" className="flex gap-1">
            <input id="restrooms" name="amenities" value="restrooms"
              type="checkbox"
              className="">
            </input>restrooms
          </label>

          <label for="dining" className="flex gap-1">
            <input id="dining" name="amenities" value="dining"
              type="checkbox"
              className="">
            </input>nearby dining
          </label>

          <label for="cafe" className="flex gap-1">
            <input id="cafe" name="amenities" value="cafe"
              type="checkbox"
              className="">
            </input>nearby cafe
          </label>

          <label for="outlets" className="flex gap-1">
            <input id="outlets" name="amenities" value="outlets"
              type="checkbox"
              className="">
            </input>power outlets
          </label>

          <label for="wifi" className="flex gap-1">
            <input id="wifi" name="amenities" value="wifi"
              type="checkbox"
              className="">
            </input>wifi
          </label>
        </fieldset>

        {/* Main Photo */}
        <div className="flex flex-col">
          <label for='title'>Main Photo:</label>
          <input
            id='title' name='title'
            type='file' accept="image/*" required
            className="border-2">
          </input>
        </div>

        {/* Additional Photos */}
        <div className="flex flex-col">
          <label for='title'>Additional Photos:</label>
          <input
            id='title' name='title'
            type='file' accept="image/*"
            className="border-2">
          </input>
        </div>

        <input type="submit" value='SUBMIT SPACE'
          className="text-white bg-brand">
        </input>
      </form>
    </div>
  )
}

export default POPOSForm