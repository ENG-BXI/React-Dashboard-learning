import { Link } from "react-router";
import bootstrap from "bootstrap";
export default function DashTable(props) {
  return (
    <table className='table px-4 mx-4 table-borderless table-hover'>
      <thead>
        {props.type === 'user' ? (
          <tr className='border-bottom'>
            <th>Id</th>
            <th></th>
            <th>UserName</th>
            <th>Email</th>
            <th>Created At</th>
            <th>verified</th>
            <th>User Roles</th>
            <th></th>
          </tr>
        ) : (
          <tr className='border-bottom'>
            <th>Id</th>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>image</th>
              <th>Created At</th>
              <th></th>
          </tr>
        )}
      </thead>
      <tbody>
        {props.type === 'user'
          ? props.item.length > 0 &&
            props.item.map((element, index) => {
              {
                /* because idont have any specification from backend */
              }
              let RandomAdmin = Math.round(Math.random() * 10);
              return (
                <tr key={index}>
                  <td>#{element.id}</td>
                  <td></td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.created_at.slice(0, 10)}</td>
                  <td className={`${element.email_verified_at === null ? 'text-danger' : 'text-success'}`}>{element.email_verified_at === null ? 'Not verified' : 'verified'}</td>
                  <td>
                    <div className={`${RandomAdmin === element.id && 'bg-body-secondary text-dark-emphasis'}  p-1 rounded-2 text-center`}>{RandomAdmin === element.id ? 'Admin' : 'User'}</div>
                  </td>
                  <td>
                    <i onClick={() => props.deleteItem(element.id)} className='btn text-danger fs-5 p-0 mx-2 ri-delete-bin-6-fill'></i>
                    <Link to={`${element.id}`}>
                      <i className='btn  text-dark-emphasis fs-5 p-0  ri-pencil-fill'></i>
                    </Link>
                  </td>
                </tr>
              );
            })
          : props.item.length > 0 && props.item.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.id}</td>
                <td></td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td>{element.image}</td>
                <td>{element.created_at.slice(0, 10)}</td>
                <td>
                  <i onClick={() => props.deleteItem(element.id)} className='btn text-danger fs-5 p-0 mx-2 ri-delete-bin-6-fill'></i>
                  <Link to={`${element.id}`}>
                    <i className='btn  text-dark-emphasis fs-5 p-0  ri-pencil-fill'></i>
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}