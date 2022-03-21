import React, { Fragment ,useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext,AuthContext } from '../../Store/firbaseContext';
import './Create.css';
import Header from '../Header/Header';


const Create = () => {
  const history=useHistory()
  const {firebase}= useContext(FirebaseContext)
  const {user}= useContext(AuthContext)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)
  const date =new Date()
  const handleImage=(e)=>{
  console.log("innn");
    e.preventDefault()
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
          history.push('/')
        })
      })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              
              onChange={(e)=>setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input"
             type="number" 
             id="fname" 
             onChange={(e)=>setPrice(e.target.value)}
             name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input type="file"  onChange={(e)=>{
              setImage(e.target.files[0])
            }} />
            <br />
            <button  onClick={handleImage}  className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
