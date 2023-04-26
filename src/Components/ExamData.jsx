import { useEffect, useState } from "react"
import * as api from "../api";
import ExamCard from "./ExamCard";
import NavBar from "./NavBar";

function ExamData () {
    const [examData, setExamData] = useState([]);
    const [locationFilter, setLocationFilter] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [candidateFilter, setCandidateFilter] = useState(null);
  
    useEffect(() => {
      api.fetchExamData().then((data) => {
        setExamData(data);
      });
    }, []);
  
    const filteredData = examData.filter((data) => {
      if (locationFilter && data.locationname !== locationFilter) {
        return false;
      }
      console.log(new Date(data.date).toLocaleString("en-Uk"))
      if (dateFilter && new Date(data.date).toLocaleString("en-Uk") !== dateFilter) {
        return false;
      }
      if (candidateFilter && data.candidatename !== candidateFilter) {
        return false;
      }
      return true;
    });
  
    return (
      <div className="exam_data_container">
        <NavBar
          onLocationChange={setLocationFilter}
          onDateChange={setDateFilter}
          onCandidateChange={setCandidateFilter}
        />
        <div className="exam-list">
          {filteredData.map((data) => {
                return <ExamCard key={data.id} data={data}/>
            })}
        </div>
    </div>
    )
    }
    export default ExamData