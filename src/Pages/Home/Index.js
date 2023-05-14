import './Index.css'

import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div className='Container'>
        <TypeAnimation
        sequence={[
            'Olá', 
            2000,
            'Meu nome é Vitor',
            2000,
            'Sou um desenvolvedor de software',
            2000
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        />
    </div>
  );
};

export default HomePage;