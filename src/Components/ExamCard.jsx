import Accordion from 'react-bootstrap/Accordion';
import ScrollToTop from './ScrollToTop';

function ExamCard ({data}) {
    const date = new Date(data.date).toLocaleString("en-Uk")
    return (
        <div>
        <Accordion className="exam_Data_Card" >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body> {data.description} </Accordion.Body>
                    <Accordion.Body> Location: {data.locationname}</Accordion.Body>
                    <Accordion.Body> On the {date} </Accordion.Body>
                  </Accordion.Item>
        </Accordion>
        <ScrollToTop/>
        </div>
    )
    }
    export default ExamCard