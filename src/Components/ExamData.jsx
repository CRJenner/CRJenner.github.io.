import { useEffect, useState } from "react"
import * as api from "../api";
import ExamCard from "./ExamCard";
import NavBar from "./NavBar";

function ExamData () {
    const [examData, setExamData] = useState([]);
    const [locationFilter, setLocationFilter] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [candidateFilter, setCandidateFilter] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setIsLoading(true)
      api.fetchExamData().then((data) => {
        setExamData(data);
        setIsLoading(false)
      });
    }, []);
  
    const filteredData = examData.filter((data) => {
      if (locationFilter && data.locationname !== locationFilter) {
        return false;
      }
      if (dateFilter && new Date(data.date).toLocaleString("en-Uk") !== dateFilter) {
        return false;
      }
      if (candidateFilter && data.candidatename !== candidateFilter) {
        return false;
      }
      return true;
    });
    
if(isLoading) return <p>Loading...</p>

    if(filteredData.length===0){
        return (<div>
            <NavBar
          onLocationChange={setLocationFilter}
          onDateChange={setDateFilter}
          onCandidateChange={setCandidateFilter}
        />
            <h4 className="empty_filter">no exams set with these filters: </h4>
                <ul>{locationFilter }</ul>
                <ul>{candidateFilter}</ul>
                <ul>{dateFilter}</ul>
        </div>)
        
    }
  
    return (
      <div >
        <div className="exam_data_container">
        <NavBar
          onLocationChange={setLocationFilter}
          onDateChange={setDateFilter}
          onCandidateChange={setCandidateFilter}
        />
        </div>
        <div className="content">
          {filteredData.map((data) => {
                return <ExamCard key={data.id} data={data}/>
            })}
        </div>
    </div>
    )
    }
    export default ExamData