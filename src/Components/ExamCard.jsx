function ExamCard ({data}) {
    const date = new Date(data.date).toLocaleString("en-US")

    return (
    <div className="exam_Data_Card">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{date}</p>

    </div>
    )
    }
    export default ExamCard