import useSWR from "swr";

const Fetcher=async(url)=>{
    const data=await fetch(url);
    const json= await data.json();
    return json;
}
 export  function Profile(){
    const{data,error,isLoading}=useSWR("https://sum-server.100xdevs.com/todos",Fetcher)
    if(error) return <div>failed to load...</div>
    if(isLoading) return <div>loading....</div>
    return <div>Hello ,you have {data.todos.length}</div>
   }