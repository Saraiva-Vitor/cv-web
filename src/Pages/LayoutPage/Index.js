import MyPhoto from '../../Assets/MyPhoto.png'

import { HomeOutlined, BookOutlined, IdcardOutlined, FileDoneOutlined, CodeOutlined, MessageOutlined, LinkedinFilled, GithubFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './Index.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

import HomePage from '../Home/Index'
import AboutPage from '../About/Index'
import StudiesPage from '../Studies/Index'
import CoursesPage from '../Courses/Index'
import ExpPage from '../Experience/Index'
import ContactPage from '../Contact/Index'

const { Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{minHeight: '100vh', display: 'flex', flexDirection: 'row'}}>
      <Sider>
        <div>
            <img className= 'Image' src= {MyPhoto} alt= 'myphoto'/>
            <h1 className='Title'>Vitor Saraiva</h1>
        </div>
        <Menu theme="dark" mode="inline" 
          onClick={({key}) => {
            navigate(key)
          }}
          items={[
            { label: "Início", key: "/", icon: <HomeOutlined />},
            { label: "Sobre mim", key: "/about", icon: <IdcardOutlined />},
            { label: "Formação", key: "/studies", icon: <BookOutlined />},
            { label: "Cursos", key: "/courses", icon: <FileDoneOutlined />},
            { label: "Experiência", key: "/experiences", icon: <CodeOutlined />},
            { label: "Contato", key: "/contact", icon: <MessageOutlined />},
          ]} 
        />
        <div className='Links'>
            <a href='https://www.linkedin.com/in/vitor-saraiva99/'><LinkedinFilled /></a>
            <a href='https://github.com/Saraiva-Vitor'><GithubFilled /></a>
        </div>
      </Sider>
      <Layout className="Content">
        <Content />
      </Layout>
    </Layout>
  );
};

function Content(){
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/studies' element={<StudiesPage />}></Route>
      <Route path='/courses' element={<CoursesPage />}></Route>
      <Route path='/experiences' element={<ExpPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
    </Routes>
  );
};

export default App;