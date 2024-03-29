  
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getReviewRegister } from '../reducer/review.reducer';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Review.css';
const ReviewRegister = () => {
    const loginValue = JSON.parse(localStorage.getItem('artist'))

      const reviews = useSelector(state =>{
          return state.reviews.pageResult.dtoList;
      })
      
      const [input, setInput] = useState({
          title : '',
          content : '',
          writerId : reviews.writerId,
          writerName : reviews.writerName,
      })
  
      const [files, setFiles] = useState([])
  
      const [flag, setFlag] = useState(false)
  
      const dispatch = useDispatch()
  
      const changeFlag = () => {
          setFlag(!flag)
      }
  
      const register = async(e)=>{
        e.preventDefault()
        e.stopPropagation()
  
        const formData = new FormData();
  
          for(let i=0; i<files.length; i++){
            formData.append("files["+i+"]", files[i])
          }
          formData.append("title", input.title)
          formData.append("content", input.content)
          formData.append("writerId", loginValue?.artistId)
          formData.append("writerName", loginValue?.name)
            await dispatch(getReviewRegister(formData)) 
            alert(JSON.stringify(loginValue?.name)+"님의 리뷰가 등록되었습니다.")
            changeFlag()
            history.push('/reviews/review-list')
          
      }
  
      const history = useHistory()
   
      const handleSubmit= (e) => {
    
         console.log(e.target.name, e.target.value)
  
          setInput({
              ...input,
              [e.target.name] : e.target.value
          })
      }
      const handleUpload = (e) => {
        const fileObj = e.target;
        console.dir(fileObj.files)
        setFiles(fileObj.files)
  
      }
    
  
      return (
        <section className="white-bg">
              <div className = "container" style={{marginTop:"-100px", marginBottom:"auto"}}>
               <div id="respond" className="comment-respond">
  
              <h1 className="section-title text-center" >Review Regist</h1>
              <hr className="center_line default-bg" style={{marginBottom:"50px"}}/>
  
                <div className="row-form row">
                  <div className="col-form col-md-2">
                   
                      <input
                        style={{color:"black" , marginBottom:"30px", border:"1px solid #9e9e9eb5"}}
                        type="text"
                        name="artistId"
                        placeholder="artistId *"
                        value={loginValue?.artistId}
                        onChange={(e) => handleSubmit(e)}/>
                  </div>
                  </div>
          
                  <div className="row-form row">
                  <div className="col-form col-md-2">
  
                      <input
                         style={{color:"black" , marginBottom:"30px",  border:"1px solid #9e9e9eb5"}}
                        type="text"
                        name="writerName"
                        placeholder="writerName *"
                        value={loginValue?.name}
                        onChange={(e) => handleSubmit(e)}
                      />
  
                  </div>
                  </div>
                
              
                <div className="row-form row">
                  <div className="col-form col-md-5">
  
                   <textarea
                   style={{color:"black", marginBottom:"30px",  border:"1px solid #9e9e9eb5"}}
                    name="title"
                    placeholder="제목을 입력해주세요 *"
                    value={input.title}
                    onChange={(e) => handleSubmit(e)}>
                    </textarea>
  
                  </div>
                  </div>
  
                  <div className="row-form row">
                  <div className="col-form col-md-12">
  
                  <textarea
                     style={{color:"black" , marginBottom:"30px",  border:"1px solid #9e9e9eb5"}}
                    name="content"
                    id="content"
                    rows="10"
                    placeholder="내용을 입력해주세요 *"
                    value={input.content}
                    onChange={(e) => handleSubmit(e)}
                  ></textarea>
  
                  </div>
                  </div>
  
                  <label className="input-file-button " for="input-file">Upload</label>
                      <input type="file" name="file" id="input-file" style={{display:"none"}} multiple={true} onChange={(e) =>handleUpload(e)}/>
  
           </div>
  
                <button className="btn btn-success btn-md btn-default remove-margin pull-right" onClick={!loginValue ? alert("로그인을 해주세요", history.push("/artist/artist-signin")) :register}>Register</button>
                <Link to ="/reviews/review-list">
                 <button className="btn btn-color btn-md btn-default remove-margin" style={{marginLeft:"10px"}}>Cancel</button></Link>
  
            </div>
      </section>
        
      );
  }
  export default ReviewRegister