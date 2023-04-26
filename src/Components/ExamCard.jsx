function ExamCard ({data}) {
    const date = new Date(data.date).toLocaleString("en-Uk")
    return (
        
    <div className="exam_Data_Card">
        <h3>{data.title}</h3>
        <h4>{data.locationname}</h4>
        <p>{data.description}</p>
        <p>{date}</p>
    </div>
   
    )
    }
    export default ExamCard