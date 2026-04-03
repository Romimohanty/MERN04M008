function Home(props){
    return(
        <> 
        <h1>Home</h1> 
        { /* {children} }*/ }
        arr value:{props.arr}
        <ul>
                {
                    props.arr.map((v,i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>


            {props.arr.join(",")}

        </>
    )
}
export default Home;