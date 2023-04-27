import { GeoAltFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import ScrollToTop from './ScrollToTop';


function ExamCard ({data}) {
    const date = new Date(data.date).toLocaleString("en-Uk")
    return (
        <div className ="exam_card_container">
        <Accordion className="exam_Data_Card" >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Exam: {data.title}</Accordion.Header>
                    <Accordion.Body className="content">
                    {data.description}
                    <br />
                    Candidate: {data.candidatename}
                    <br />
                    Location: {data.locationname}
                    <br />
                    On {date}
                    </Accordion.Body>
                    <Accordion.Body className="content">
                    <div >
                    
                    <Button variant= "dark" href="/location" data={data}>
                        <GeoAltFill /> | location </Button>
                        
                     </div>
                    </Accordion.Body>
                  </Accordion.Item>
        </Accordion>
        <ScrollToTop/>
        </div>
    )
}
export default ExamCard