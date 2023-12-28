import Navbar from '../../components/navbar/Navbar'
import NavbarLink from '../../components/navbar/NavbarLink'
import ContactForm from './ContactForm'
import SubSectionFive from './SubSectionFive'
import SubSectionFour from './SubSectionFour'
import SubSectionOne from './SubSectionOne'
import SubSectionThree from './SubSectionThress'
import SubSectionTwo from './SubSectionTwo'

const Manifesto = () => {
    return (
        <div className={'w-full min-h-screen bg-white dark:bg-slate-950 transition-none md:transition-colors duration-300 ease-linear text-slate-700 dark:text-slate-300 '} >
            <Navbar>
                <NavbarLink path={"/motions"} name={"Motions"} />
                <NavbarLink path={"/pages"} name={"Motion Pages"} />
            </Navbar>
            <div className="w-full max-w-screen-lg mx-auto px-4 md:px-10  py-24 font-sans" >
                <SubSectionOne />
                <SubSectionTwo />
                <SubSectionThree />
                <SubSectionFour />
                <SubSectionFive />
                <ContactForm />
            </div>
        </div>
    )
}

export default Manifesto