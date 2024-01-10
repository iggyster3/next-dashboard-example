'use-client';

'use-client';
// employee data form to populate data in the
export default function Page() {
    return(
    <form>  
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <h1>Miesh.ai Employee Data Page</h1>
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Personal Information
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            First Name
          </label>
        </div>  
      </div>
    </form>
    )
  }