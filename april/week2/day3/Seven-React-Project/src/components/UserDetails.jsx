import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {
    const { Id } = useParams();

    // findout the location
    const location = useLocation();

    // refining the search using the location
    const query = new URLSearchParams(location.search);

    // from the urlSearchParam object get the query values
    const name = query.get("name");
    const age = query.get("age");

  return (
    <div>
                UserDetails
            <br />
            User Id :{Id}
            <br />
            Name : {name}
            <br />
            Age : {age}

    </div>
  )
}

export default UserDetails