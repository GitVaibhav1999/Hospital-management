import axios from 'axios'

const backend = 'http://localhost:9000'

export const getDoctorsData = async() => {
    const docData = await axios.get(`${backend}/doctors/getDoctorsData`)
    return docData.data
}