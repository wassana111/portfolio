import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Wassana Noothong (Baibua)">
          <h3>Frontend</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/03/09").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66838343833
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : s64122202039@ssru.ac.th</p>
          <p>www.s64122202039@ssru.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate, distinctio blanditiis aspernatur repudiandae a dolore iure ab, vitae expedita voluptas fugiat dolorum nobis placeat inventore accusantium in sed hic?</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum quibusdam amet nulla itaque cum, porro, sit perspiciatis dolore ad nemo, dolorum quasi aut. Amet deserunt aperiam qui recusandae molestias.</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS /JS</p>
          <p>Microsoft office </p>
          <p>Canva</p>
          <p>Git</p>
        </Title>

      </div>
    </main>
  )
}

export default App
