import React from "react"

const AddMoney: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center flex-col bg-slate-200">
      <h2 className="mb-6 text-2xl font-semibold">Payment</h2>
        <form
          action="#"
          className=" rounded-lg border border-gray-200 border-gray-700 dark:bg-gray-800 max-w-xl lg:p-8"
        >
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                {" "}
                Full name (as displayed on card)*{" "}
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Bonnie Green"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                {" "}
                Card number*{" "}
              </label>
              <input
                type="text"
                id="card-number-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Pay now
          </button>
        </form>
    </div>
  )
}
export default AddMoney
