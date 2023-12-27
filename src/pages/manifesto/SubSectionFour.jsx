import { useState } from "react"
import { BiSolidDownArrow, BiSolidRightArrow} from "react-icons/bi";
import image8 from "../../assets/manifesto-8.webp"
import image9 from "../../assets/manifesto-9.webp"
import image10 from "../../assets/manifesto-10.webp"


const SubSectionFour = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="mt-16" >
            <h3 className="flex gap-2 items-center font-semibold cursor-pointer" onClick={() => setShow(!show)}  >{!show ? <BiSolidRightArrow /> : <BiSolidDownArrow />} Why Attention Is Worth More Than Gold</h3>
            <div className={'mt-8 ' + (show ? " h-auto border p-4 dark:border-slate-800 " : " h-0 overflow-hidden ")} >
                <p className="" >The billionaire VC who scaled Facebook to 1B users, Chamath Palihapitiya, recently shared his prediction on the next evolution of social media.</p>
                <p className="mt-6" >“Here&apos;s why content creators will be the billionaires of the future.”</p>
                <div className="mt-4 flex items-center justify-center" ><img className="w-full" src={image8} alt="image" /></div>
                <p className="mt-6" >Here is Chamath&apos;s theory (and why you should start creating content online):</p>
                <h4 className="font-semibold text-lg font-inter mt-8" >The First Wave: Hardware</h4>
                <p className="mt-2" >Apple & Google kickstarted the initial boom of modern tech.</p>
                <p className="mt-2 font-semibold" >Mostly via iPhone & Android, they attracted:</p>
                <p className="mt-2 " >- Billions of monthly active users + Trillions of dollars in value</p>
                <div className="mt-4 flex items-center justify-center" ><img className="w-full" src={image9} alt="image" /></div>
                <h4 className="font-semibold text-lg mt-8 font-inter" >The Second Wave: Apps</h4>
                <p className="mt-1 font-medium" >Think of social networks like:</p>
                <p className="mt-2 font-medium" >- Facebook</p>
                <p className="mt-1 font-medium" >- Snapchat</p>
                <p className="mt-1 font-medium" >- Youtube</p>
                <p className="mt-1 font-medium" >- Twitter</p>
                <p className="mt-4 " >These apps sit on top of Apple & Google&apos;s products.</p>
                <p className="mt-1 " >Chamath calls them an {`"`}atomized version of the platforms.{`"`}</p>
                <p className="mt-1 " >You download them from Apple & Google&apos;s app stores...</p>
                <div className="mt-6 flex items-center justify-center" ><img className="w-full" src={image10} alt="image" /></div>
                <h4 className="font-semibold text-lg mt-8 font-inter" >The Third Wave: Content Creators</h4>
                <p className="mt-4 font-semibold font-inter" >The next level, or &quot;atomic unit,&quot; is hiding in plain sight:</p>
                <p className="mt-1" >Content creators are the ones building businesses on top of these platforms.</p>
                <p className="mt-1" >In the next 5-10 years, creators like:  Mr. Beast, Joe Rogan, Logan Paul, ...will likely capture:
                    Billions of followers + Trillions of dollars</p>
                <p className="mt-6 font-semibold font-inter" >Creators are &quot;atomizing&quot; what the social networks did:</p>
                <p className="mt-1" >Curating communities + Attracting mass attention</p>
                <p className="mt-1" >And as a result, all the future value will accrue to them.</p>
                <p className="mt-1" >Mr. Beast has already been offered $1B for his YT channel.</p>
                <p className="mt-1" >If you think about it, it makes perfect sense.</p>
                <p className="mt-6 font-semibold font-inter" >In a world becoming increasingly:</p>
                <p className="mt-1" >Digitized + AI-dominated</p>
                <p className="mt-1" >People will crave other humans to filter information through.</p>
                <p className="mt-1" >They&apos;ll be drawn to individual personal brands, NOT faceless corporations.</p>
                <p className="mt-1" >It&apos;s basic human psychology.</p>
                <p className="mt-1" >Creators are the newest & future layer through which people consume media.</p>
                <p className="mt-6 font-semibold font-inter" >Chamath explicitly states:</p>
                <p className="mt-1" >“I would focus on the content creation side of things because I believe that&apos;s where the puck is going. That&apos;s a much more important shift in how we all consume information.&quot;</p>
                <p className="mt-4" >Platforms &gt; Social Apps &gt; Creators</p>
                <p className="mt-1" >This is why it&apos;s more important than ever to start building online.</p>
                <p className="mt-1" >Social media is your new resumé.</p>
                <p className="mt-1" >Don&apos;t get left behind.</p>
                <p className="mt-1" >Start now.</p>
            </div>
        </div>
    )
}

export default SubSectionFour