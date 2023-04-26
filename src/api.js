import axios from 'axios'

const examApi = axios.create({
    baseURL: `https://victvs-exam-data-be.onrender.com/api`
})

export const fetchExamData = () => {
    return examApi.get().then(({data}) => {
        return data.candidateData
    })
}