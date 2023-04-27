import Accordion from 'react-bootstrap/Accordion';

function ExamCard ({data}) {
    const date = new Date(data.date).toLocaleString("en-Uk")
    return (
        <Accordion className="exam_Data_Card" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body> {data.description} </Accordion.Body>
                    <Accordion.Body> Location: {data.locationname}</Accordion.Body>
                    <Accordion.Body> On the {date} </Accordion.Body>
                  </Accordion.Item>
        </Accordion>
   
    )
    }
    export default ExamCard