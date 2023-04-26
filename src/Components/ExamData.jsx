import { useEffect, useState } from "react"
import * as api from "../api";
import ExamCard from "./ExamCard";


function ExamData () {
    const [examData, setExamData] = useState([])

    useEffect(()=> {
        api.fetchExamData().then((data)=>{
            setExamData(data)
        })

    }, [])

    return (
    <div className="exam_data_container">
        <div className="exam-list">
            
            {examData.map((data) => {
                return <ExamCard key={data.id} data={data}/>
            })}
        </div>
    </div>
    )
    }
    export default ExamData