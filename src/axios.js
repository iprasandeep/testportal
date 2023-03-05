import axios from "axios";

const API = axios.create({
    baseURL: "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID="
})

export default API;