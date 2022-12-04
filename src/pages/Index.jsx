import { useLoaderData } from 'react-router-dom'
import { getClients } from '../../data/Clients';
import Client from '../components/Client';

export function loader() {
    
   const clients = getClients();
   return clients
}

function Index() {

    const dataClients = useLoaderData();

    
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
        <p className='mt3'>Manage all your clients </p>

        {dataClients.length ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Client</th>
                        <th className='p-2'>Contact</th>
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {dataClients.map( client => (
                        <Client 
                            client={client}
                            key={client.id}
                        />
                    ))}
                </tbody>
            </table>
        ) : (
            <p className='text-center mt-10'>No clients to display </p>
        )}
    </>
  )
}

export default Index