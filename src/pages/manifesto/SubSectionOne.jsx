import image1 from "../../assets/manifesto-1.webp"
import image2 from "../../assets/manifesto-2.webp"

const SubSectionOne = () => {
    return (<>
        <div className=''>
            <div className=''>
                <p className='text-lg font-semibold' >Social Media isn&apos;t social anymore we&apos;re bringing that back, with a great social blueprint.</p>
                <p className=' mt-6' >We believe the power of our interconnectedness is barely in use.</p>
                <p className=' mt-6' >Call us crazy, but you are about to see a blueprint for all these questions that we actually want to be answered from world leaders and influencers, platformed, and addressed.</p>
            </div>
            <div className='mt-8 flex items-center justify-center w-full border dark:border-slate-950 shadow-xl bg-white overflow-hidden' ><img className='max-w-lg w-full ' src={image1} alt='image' /></div>
        </div>
        <div className='mt-16' >
            <p>We think its time for creators to be storytellers of <b>true missions for the world to align behind are the future.</b> This is not only a massive need in society, but also a massive opening.</p>
            <div className='mt-8 flex items-center justify-center w-full shadow-xl ' ><img className=' w-full ' src={image2} alt='image' /></div>
            <p className='mt-8' >It seems inevitable we will have a way for the collective emotion of people, the highest wants and wishes of questions and concerns to reach the most powerful and elite of our world.</p>
            <p className='mt-6' >A movement which will empower the internet to recognize the power of its voice, moving us from being a cancel culture to a proactive forward motion culture.</p>
            <p className='mt-6' >It&apos;s a failure of connection between world leaders today, and the most powerful corporations not being connected with the hard hitting questions and concers so that they may actZ, right by the people. Yet, also many great leaders are simply not understanding how much many people on the internet are misunderstanding there true intentions. </p>
            <p className='mt-6' >WeMotions is a platform that creates a gateway for the voice of the people, to demand communication from the person, or corporation on certain subjects. </p>
        </div>
    </>)
}

export default SubSectionOne