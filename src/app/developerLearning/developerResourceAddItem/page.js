'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';



export default function DeveloperResourceAddItem() {
const [responseMessage, setResponseMessage] = useState('');
const router = useRouter();

const handleSubmit = async (event) => {
 
  event.preventDefault(); // Prevent default form submission behavior
  const formData = new FormData(event.target); 

  try 
  {
    const requestOptions = {
        method: 'POST',
        body:formData
    };

    let response = await fetch('/api/developerLinkItemAdd',requestOptions);
    const data = await response.json();

    if (!response.ok) 
    {
      throw new Error('Failed to submit the data. Please try again.');
    }
    else
    {
      navigateToDeveloperResourceList();
    }

  } 
  catch (error) 
  {

    console.error('Error submitting form:', error);
    alert("Error message: " + error.message);
  } 

}



const navigateToDeveloperResourceList = () => {
  
router.push("../../developerLearning/developerResources");
};

return (
<div>
  <h2 className="heading">Add new developer resource</h2>
  <br />
<form onSubmit={handleSubmit}>
  URL <input type="text" name="url" placeholder="Enter url" required class="w-full text-input pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/> <br />
  <br />
  Title <input type="text" name="title" placeholder="Enter title" required class="w-full text-input pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/> <br />
  <br />  
  Description <input type="text" name="description" placeholder="Enter description" required class="w-full text-input pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/><br />
  <br />
  Category <input type="text" name="category" placeholder="Enter category (optional)" class="w-full text-input pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/><br />
<br />
<div class="flex md:flex md:flex-grow space-x-1 items-center justify-center">
  <button type="submit" className="base-btn btn-purple">Submit</button> 
  <Link href="../../developerLearning/developerResources" className="base-btn btn-purple btn-space-around ">Cancel</Link>
</div>

</form>
{responseMessage && <p>{responseMessage}</p>}
</div>
);
}