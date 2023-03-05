import {useEffect, useState} from 'react'
// import API from './axios';
import './Page.css';
import axios from 'axios';
import {MathJaxContext, MathJax } from "better-react-mathjax";

const API = "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID="
const qID = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"];

const Question = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myData, setMyData] = useState([]);

  const handleNext = () =>{
    
    if(currentQuestion<qID.length-1)
    {
      const nextQestions = currentQuestion+1;
      setCurrentQuestion(nextQestions);
    }
    else{
      setCurrentQuestion(0);
    }
  }

  const getApiData = async (url) =>{

    const res = await axios.get(url)
    console.log(res.data);
    setMyData(res.data);
    }
    useEffect(()=>{
      getApiData(`${API}`+qID[currentQuestion]);
      // setCurrentQuestion(nextQestions);
    },[currentQuestion])
    
  return (
    <>
    <div className='main-container'>
      <div className='section_bar'>
        <span>JEE MAINS Questions 2023</span>
        <span>Section: Maths</span>
      </div>

      <div className='container'>
          <div className='questions'>
            {myData.map((qns)=>{
            const { Question, QuestionID } = qns;
            return (
                      <div className='=card'>
                        <div>
                        <span className='question-id'><b>Question ID: </b> <i className='qnsID-text'>{QuestionID}</i></span>
                        </div>
                        <div>
                        <span className='question-text'><b>Question: {currentQuestion+1}</b> <MathJaxContext><MathJax>{qns.Question}</MathJax></MathJaxContext></span>
                        </div>
                      </div>
                    )
                  })
                }
          </div>
      </div>
    
    </div>
    <div className='btn'>
        <button onClick={handleNext}>Next</button>
    </div>
    </>
  )}
export default Question;