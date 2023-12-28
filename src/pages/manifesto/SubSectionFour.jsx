import { useState } from "react"
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import image8 from "../../assets/manifesto-8.webp"
import image9 from "../../assets/manifesto-9.webp"
import image10 from "../../assets/manifesto-10.webp"
import Account from "./Account";


const SubSectionFour = () => {

    const [show, setShow] = useState(false)
    const [subShow, setSubShow] = useState(false)

    return (
        <div className="mt-16" >
            <h3 className="flex gap-2 items-center font-semibold cursor-pointer" onClick={() => setShow(!show)}  >{!show ? <BiSolidRightArrow /> : <BiSolidDownArrow />} Why Attention Is Worth More Than Gold</h3>
            {show && <div className='mt-8 h-auto border p-2 dark:border-slate-800  '  >
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
                <div className="mt-16" >
                    <h3 className="flex gap-2 items-center font-semibold text-sm cursor-pointer" onClick={() => setSubShow(!subShow)}  >{!subShow ? <BiSolidRightArrow /> : <BiSolidDownArrow />}Our Daily Video Accounts With A Range Of Goal Sizes.</h3>
                    {subShow && <div className='mt-8' >
                        <p className="font-semibold text-lg border-t pt-2 dark:border-slate-700" >MORNING:</p>
                        <Account
                            username={"@topvcaffeine"}
                            text={"Day 1 of using this caffeine inhaler to wake up until 1,000 people join the daily caffeine wake up journey, make a video with me, and I give one of them a Tesla."}
                            tiktok={"https://tiktok.com/@topvcaffeine"}
                            instagram={"https://www.instagram.com/topvcaffeine/"}
                            youtube={"https://www.youtube.com/@topvcaffeine"}
                        />
                        <Account
                            username={"@dailyteethvibe"}
                            text={"Day 1 of brushing my teeth until the Actor chip skylark sings me a song"}
                            tiktok={"http://tiktok.com/@dailyteethvibe"}
                            instagram={"https://www.instagram.com/dailyteethvibe/"}
                            youtube={"https://www.youtube.com/@dailyteethvibe"}
                        />
                        <Account
                            username={"@vibegurugratitude"}
                            text={"Day 1 of expressing gratitude until the kingdom of heaven comes down to earth"}
                            tiktok={"http://tiktok.com/@vibegurugratitude"}
                            instagram={"https://www.instagram.com/vibegurugratitude/"}
                            youtube={"https://www.youtube.com/@vibegurugratitude"}
                        />
                        <Account
                            username={"@dailyshoenice"}
                            text={"Day 1 of Saying shoenice and chugging a bottle everyday until he mentions me or I get 10m followers (trippy water eventually, could use a glass bottle and buy the powder again) (saying shoenice and chugging trippy water everyday)"}
                            tiktok={"http://tiktok.com/@dailyshoenice"}
                            instagram={"https://www.instagram.com/daily.shoenice/"}
                            youtube={"https://www.youtube.com/@dailyshoenice"}
                        />
                        <p className="font-semibold mt-6 text-lg border-t pt-2 dark:border-slate-700" >AFTER SHOWER:</p>
                        <Account
                            username={"@quitnicchallenge"}
                            text={"Day 1 of smoking QuitStick until I have no urges to vape"}
                            tiktok={"http://tiktok.com/@quitnicchallenge"}
                            instagram={"https://www.instagram.com/quitnicchallenge/"}
                            youtube={"https://www.youtube.com/@quitnicchallenge"}
                        />
                        <Account
                            username={"@riseofsocialverse"}
                            text={" Day 1 of building Reddit, Roblox, And Tiktok Combined until its the most viral app on the planet."}
                            tiktok={"http://tiktok.com/@riseofsocialverse"}
                            instagram={"https://www.instagram.com/riseofsocialverse/"}
                            youtube={"https://www.youtube.com/@riseofsocialverse"}
                        />
                        <Account
                            username={"@DailyVibeGuru"}
                            text={"Day 1 of being so present in the moment I forget the past and future exist (repeat the same phrase never going to day 2)"}
                            tiktok={"http://tiktok.com/@dailyvibeguru"}
                            instagram={"https://www.instagram.com/dailyvibeguru/"}
                            youtube={"https://www.youtube.com/@dailyvibeguru"}
                        />
                        <Account
                            username={"@topvpushups"}
                            text={"Day 1 of doing push-ups until I can do 111 in a row"}
                            tiktok={"http://tiktok.com/@topvpushups"}
                            instagram={"https://www.instagram.com/topvpushups"}
                            youtube={"https://www.youtube.com/@topvpushups"}
                        />
                        <Account
                            username={"@topvsquats"}
                            text={"Day 1 of doing squats till a Jenner compliments my ass"}
                            tiktok={"http://tiktok.com/@topvsquats"}
                            instagram={"https://www.instagram.com/topvsquats"}
                            youtube={"https://www.youtube.com/@topvsquats"}
                        />
                        <Account
                            username={"@topvtraining"}
                            text={"Day 1 of learning to spin a basketball on my finger until Lebron James comments good job"}
                            tiktok={"http://tiktok.com/@topvtraining"}
                            instagram={"https://www.instagram.com/topvtraining"}
                            youtube={"https://www.youtube.com/@topvtraining"}
                        />
                        <Account
                            username={"@topvtraining"}
                            text={"Day 1 of learning to spin a basketball on my finger until Lebron James comments good job"}
                            tiktok={"http://tiktok.com/@topvtraining"}
                            instagram={"https://www.instagram.com/topvtraining"}
                            youtube={"https://www.youtube.com/@topvtraining"}
                        />
                        <Account
                            username={"@dailylovesnippet"}
                            text={"Day 1 of kissing my girlfriend until the day I propose to her"}
                            tiktok={"http://tiktok.com/@dailylovesnippet"}
                            instagram={"https://www.instagram.com/dailylovesnippet"}
                            youtube={"https://www.youtube.com/@dailylovesnippet"}
                        />
                        <Account
                            username={"@dailyAiawareness"}
                            text={"Day 1 of requesting you work on ai goverance until we have the correct solution"}
                            tiktok={"http://tiktok.com/@dailyAiawareness"}
                            instagram={"https://www.instagram.com/daily.aiawareness/"}
                            youtube={"https://www.youtube.com/@dailyAiawareness"}
                        />
                        <Account
                            username={"@StartupCollegeStory"}
                            text={"Day 1 of calling a VC until I raise 2 million dollars for my StartupCollege"}
                            tiktok={"http://tiktok.com/@StartupCollegeStory"}
                            instagram={"https://www.instagram.com/start.upcollegestory"}
                            youtube={"https://www.youtube.com/@StartupCollegeStory"}
                        />
                        <Account
                            username={"@goldenmemestory"}
                            text={"Day 1 of following the golden rule by spreading the golden meme to as many people as possible (SCREEN RECORDING FROM TARAK)"}
                            tiktok={"http://tiktok.com/@goldenmemestory"}
                            instagram={"https://www.instagram.com/goldenmemestory"}
                            youtube={"https://www.youtube.com/@goldenmemestory"}
                        />
                        <Account
                            username={"@prohabchallenge"}
                            text={"Day 1 of not eating till I finish my to do list so these tasks become my prey"}
                            tiktok={"http://tiktok.com/@prohabchallenge"}
                            instagram={"https://www.instagram.com/prohabchallenge"}
                            youtube={"https://www.youtube.com/@prohabchallenge "}
                        />
                        <p className="font-semibold mt-6 text-lg border-t pt-2 dark:border-slate-700" >BEDTIME:</p>
                        <Account
                            username={"@ZZbarTillIDie"}
                            text={"Day 1 of smoking this melatonin vape to fall asleep until I dont wake up (as in until the day I die)"}
                            tiktok={"http://tiktok.com/@ZZbarTillIDie"}
                            instagram={"https://www.instagram.com/ZZbarTillIDie"}
                            youtube={"https://www.youtube.com/@ZZbarTillIDie"}
                        />
                        <Account
                            username={"@DailyVibeGuru"}
                            text={"Day 1 of doing consecutive storytelling videos that will eventually lead to me becoming the most viral person on the planet and spreading a new global narrative (TAKE A CLIP FROM EACH OF THAT DAYS VIDEOS)"}
                            tiktok={"http://tiktok.com/@DailyVibeGuru"}
                            instagram={"https://www.instagram.com/DailyVibeGuru"}
                            youtube={"https://www.youtube.com/@DailyVibeGuru"}
                        />
                    </div>}
                </div>
                <p className="font-semibold mt-8" >Content leads to Community which leads to Capital which we use to create Improved Content and the flywheel continues. This is the business model of any creator, I just am yet to see any creator take on telling a story as grand as even pieces of what I want to do. Some see that as a sign that the story is too big, I see it as a sign opportunity and a missing place in the world. Musk is great, but he is a CEO.</p>
            </div>}
        </div>
    )
}

export default SubSectionFour