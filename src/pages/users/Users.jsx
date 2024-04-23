import Datatable from '../../components/dataTable/Datatable'
import './users.scss'



function Users() {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
     <Datatable/>
      
    </div>
  )
}

export default Users