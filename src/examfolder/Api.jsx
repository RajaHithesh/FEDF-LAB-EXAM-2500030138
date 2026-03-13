import axios from 'axios';
import React, { useEffect ,useState } from 'react'

export default function Api() 
{
    const [data,setData] = useState([])
    const [error,setError] = useState("")
 
   const displayData = async () => {
    try
    {
        const response = await axios.get("https://dummy-json.mock.beeceptor.com/companies")
        setData(response.data)
    }
    catch (error) 
    {
        setError(error.message)
    }
   }

   useEffect(() => {
        displayData()
   }, []);

  return (
    <div>
        
        {
            error ? <b>{error}</b>:
                data.length == 0 ? 
                <b>Loading...</b>:
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>country</th>
                        <th>employeCount</th>
                        <th>industry</th>
                        <th>marketcap</th>
                      
                       
                       
                        
                    </tr>
                {
                   data.map((company,index) => (
                    <tr key={index}>
                        <td>{company.id}</td>
                        <td>{company.name}</td>
                        <td>{company.address}</td>
                        <td>{company.zip}</td>
                        <td>{company.country}</td>
                        <td>{company.employeeCount}</td>
                        <td>{company.industry}</td>
                        <td>{company.marketCap}</td>
                       

                    </tr>
                    ))
                }
                </table>
        }
    </div>
  )
}



