'use-client';

'use-client';
// employee data form to populate data in the
export default function Page() {
    return(
    <form>  
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <h1>Miesh.ai Employee Data Page</h1>
          <h1 className="mb-2 block text-sm font-medium">
            Personal Information
          </h1>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            First Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="employee_first_name"
                name="employee_first_name"
                type="text"
                step="0.01"
                placeholder="Employee First Name"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            <div className="relative">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                Last Name
            </label>
              <input
                id="employee_last_name"
                name="employee_last_name"
                type="text"
                step="0.01"
                placeholder="Employee Last Name"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>  
            <div className="relative">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                Middle Name
            </label>
              <input
                id="employee_middle_name"
                name="employee_middle_name"
                type="text"
                step="0.01"
                placeholder="Employee Middle Name"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                Gender
            </label>
              <input
                id="employee_middle_name"
                name="employee_middle_name"
                type="text"
                step="0.01"
                placeholder="Employee Middle Name"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div> 
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
          </div>
          </div>
        </div>
      </div>
    </form>
    )
  }