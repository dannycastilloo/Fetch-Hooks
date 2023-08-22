import { useFetch } from "../hooks/useFetch"

export const UsersComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
    <h1>Users</h1>
      {isLoading
        ? <h4>Cargando...</h4>
        : errors ? <p>An error has ocurred: {errors}</p>
                : <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(user => {
                        return (
                          <tr key={user.id}>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
      }
    </>
  )
}
