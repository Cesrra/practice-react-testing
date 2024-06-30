'use client'
type GreetProps = {
  name?: string
}

export default function Greet(props: GreetProps) {
  return (
    <main className="flex justify-evenly min-h-screen p-24">
      <div className=""><h1>Hellow { props.name }</h1></div>
      <form action="" className="flex flex-col align-bottom border rounded-lg px-8 py-4 transition-colors hover:border-blue-200 hover:bg-yellow-100 hover:dark:border-neutral-700">
        <div className="text-center">
          <h2 className="mb-3 text-2xl font-semibold">Origin Country</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 place-items-center h-full">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="job-location">Job Location</label>
            <select name="select-job" id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CO">Colombia</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" name="terms" id="terms" /><strong>I agree to the terms and conditions</strong>
            </label>
          </div>
          <div>
            <button className="bg-white text-neutral-700 font-semibold hover:text-neutral-600 py-2 px-4 border hover:bg-yellow-200 hover:border-blue-200 rounded" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}
