import React, { useEffect, useState } from 'react';
import axios from "axios";

const CustomersPage = props => {

    const[customers, setCustomers] = useState([])

    // je ve cree un effet pour lancer quand quelque chose se cpasse
    useEffect(() => {
        axios.get("http://localhost:8000/api/customers")
              .then(response=>{
console.log("response",response)

                return response.data["hydra:member"]
              })// des que taura fini afffiche moi la reponse
              .then(data => setCustomers(data))// quand jaurai ce tableau je vais avoir ici avec ce quon appelle data je veux changer ce quils ya dans mes customers en data
              .catch(error => console.log(error.response));
    }, []); // tableau pour surveiller les variables

    return (
    
   
    <table className="table table-hover">
  

        <thead>
            <tr>
                <th>Id.</th>
                <th>Client</th>
                <th>Email</th>
                <th>Entreprise</th>
                <th className="text-center">Factures</th>
                <th className="text-center">Montant total</th>
                <th />
            </tr>
        </thead>

        <tbody>
            {customers.map(customer => (
                 <tr key={customer.id}>
            
                <td>{customer.id}</td>
                <td>
                    <a href="#">{customer.firstName} {customer.lastName}</a>
                </td>
                <td>{customer.email}</td>
                <td>{customer.company}</td>
                <td className="text-center">
                    <span className="badge badge-primary">{customer.invoices.length}</span>
                </td>
                <td className="text-center">
                    {customer.totalAmount}</td>
                <td>
             
                    <button className="btn btn-sm btn-danger">Supprimer</button>
                </td>
            </tr>
            ))}
        </tbody> 
    </table>
    
    );
};


export default CustomersPage;