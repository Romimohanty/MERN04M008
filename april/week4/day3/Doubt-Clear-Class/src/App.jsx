import axios from 'axios' 
import './App.css'

function App() {
  const [users, setUsers] = useState([]);


  async function getAllUsers() {
    try {
      const res=await axios.get("https://jsonplaceholder.typicode.com/users");
    //   const data=res.data;
    //   console.log(data);
    
    useEffect9(()=>{
      getAllUsers();
    },[])
    setUsers(res.data);}
    catch (error) {
      console.log("failed to fetch users",error)
    }
  }

  return (
    <div>
     {
      users.map((user)=>(
        <div style={{width:'300px',height:'200px',border:'1px solid blue',padding:'5px'}}>
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.website}</p>

<h4>Company Details</h4>
<div>

</div>


        </div>
      ))
     }
    </div>
  )
}

export default App
