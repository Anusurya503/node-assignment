import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'


const landing = () => {
  return (
    <Wrapper>
     <nav>
       {/* <img src={book} alt='library' className='logo'/> */}
       <Logo />
       <span><h1>library</h1></span>
     </nav>
     <div className="container page">
       <div className='info'>
       <h1>
         read <span>book</span> app 
       </h1>
       <p>
       Scoot butt on the rug. Sleep nap. Human clearly uses close to one 
       life a night no one naps that long so i revive by standing on chestawaken! 
       catching very fast laser pointer hopped up on catnip cattt catt cattty cat being a cat.
       Meow to be let out.
       Intrigued by the shower it's 3am, time to create some chaos but play riveting piece on synthesizer keyboard.
       </p>
       <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
       </div>
       <img src={main} alt='book hunt' className='img main-img' />
     </div>
    </Wrapper>
  )
}



export default landing