import React from 'react'
import styled from 'styled-components'

const PeopleStyle = styled.div`
.container-sec{ 
  margin: 20rem 10rem;
  }

  .people-container{
  
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


table {
  border: 2px solid var(--yellow);
  width: 800px;
  height: 500px;
}
  
th {
  border-bottom: 1px solid black;
  background-color: var(--yellow);
}
  
td {
  text-align: center;
}

`
function People({data}) {
  

  return (
    
      <PeopleStyle className="container-sec">
        <div className="people-container">
        <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Height</th>
          <th>Gender</th>
        </tr>
        {data.map((people, key) => {
          
          return (
            <tr key={key}>
              <td>{people.id}</td>
              <td>{people.name}</td>
              <td>{people.height}</td>
              <td>{people.gender}</td>
            </tr>
          )
          
        })}
      </table>
      </div>
    </PeopleStyle>
  )
}

export default People