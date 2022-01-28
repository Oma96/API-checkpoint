import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'




 export default function AddMovie({movies,setMovies}) {

   const[title,setTitle]= useState("")
   const[desc,setDesc]= useState("")
   const[poster, setPoster]=useState()
   const[rate,setRate]=useState()


   

   const addHandler=()=>{
    
    setMovies([...movies,{id: Math.random(),title:title,description:desc,image:poster,rate:rate}])
   console.log(movies)
    handleClose()
   }
 

   

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

      <Button className="button" variant="secondary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <h1 className="title"> Edit your Movie </h1>
        <input type="text" placeholder="Add a movie "  onChange={(e)=>{
      setTitle (e.target.value)}}/> 
         <input type="text" placeholder="Add description" onChange
         ={(e)=>{setDesc (e.target.value)}}/>
         <input type="text"placeholder="Add a poster" onChange={(e)=>{
      setPoster (e.target.value)}}/>
        <input type="text" placeholder="Add a rate" onChange={(e)=>{
      setRate (e.target.value)}}/>
        <Button variant="secondary" onClick={handleClose}> Close </Button>
        <Button variant='primary' onClick={addHandler}> Save Changes </Button>
        
      </Modal>    
     </div>
    )
}




