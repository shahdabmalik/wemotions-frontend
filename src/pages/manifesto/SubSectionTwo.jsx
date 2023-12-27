import image3 from "../../assets/manifesto-3.webp"
import image4 from "../../assets/manifesto-4.webp"
import image5 from "../../assets/manifesto-5.webp"
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"
import { BiSolidDownArrow, BiSolidRightArrow} from "react-icons/bi";
import parse from "html-react-parser"
import { useEffect, useState } from "react"

const SubSectionTwo = () => {

    const [show, setShow] = useState(false)   

    useEffect(() => {
        // window.scrollTo(0, 0)
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js'; // URL of the TikTok embed script
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='mt-16' >
            <h3 className='text-lg font-semibold' >How The WeMotions Movement Rises:</h3>
            <p className='mt-2' >Each video button represents a new post (once per day), the flag represents the payoff which the followers are watching someone go towards with the daily video update.</p>
            <div className='mt-8 flex items-center justify-center p-4 shadow-xl w-full border bg-white' ><img className=' w-full max-w-xl ' src={image3} alt='image' /></div>
            <p className='mt-8' >For example, this creator made videos saying day 1 of their goal to Hug Elon musk and after posting daily for 62 days built a massive following which got Musk to hear about it multiple times, before he set it up. </p>
            <div className='flex justify-center mt-8' >{parse(`<iframe width="315" height="560" src="https://www.youtube.com/embed/j6xrJR2Otto?si=pItVYIsDodpMECit" title="YouTube ideo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`)}</div>
            <div className='mt-8 flex items-center justify-center p-4 shadow-xl w-full border bg-black dark:border-slate-800' ><img className=' w-full max-w-xl ' src={image4} alt='image' /></div>
            <div className='flex items-center gap-2 mt-8 cursor-pointer' onClick={() => setShow(!show)}>
                {show ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                <h4 className='' ><b>More Examples of Storytelling Pages:</b></h4>
            </div>
            <div className={'mt-8 ' + (show ? " h-auto border p-4 dark:border-slate-800 " : " h-0 overflow-hidden ")} >
                <div>{parse(`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@fidias0" data-unique-id="fidias0" data-embed-type="creator" style="max-width: 100%; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@fidias0?refer=creator_embed">@fidias0</a> </section> </blockquote>`)}</div>
                <div className='mt-8' >{parse(`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@sel.elh/video/7290226482515823905" data-video-id="7290226482515823905" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@sel.elh" href="https://www.tiktok.com/@sel.elh?refer=embed">@sel.elh</a> Sister talk✨ <a title="raar" target="_blank" href="https://www.tiktok.com/tag/raar?refer=embed">#raar</a> <a title="gym" target="_blank" href="https://www.tiktok.com/tag/gym?refer=embed">#gym</a> <a title="grappig" target="_blank" href="https://www.tiktok.com/tag/grappig?refer=embed">#grappig</a> <a title="relatable" target="_blank" href="https://www.tiktok.com/tag/relatable?refer=embed">#relatable</a> <a title="vrouwen" target="_blank" href="https://www.tiktok.com/tag/vrouwen?refer=embed">#vrouwen</a> <a target="_blank" title="♬ origineel geluid - Selma" href="https://www.tiktok.com/music/origineel-geluid-7290226494285171488?refer=embed">♬ origineel geluid - Selma</a> </section> </blockquote>`)}</div>
                <div className='flex justify-center mt-8' >{parse(`<iframe width="315" height="560" src="https://www.youtube.com/embed/DVgzYlJztI8" title="YouTube ideo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`)}</div>
                <div className='mt-8 flex justify-center' >
                    <video width='320' controls>
                        <source src={video1} />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='mt-8' >{parse(`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@dicquewuopamela/video/7286449202111008002" data-video-id="7286449202111008002" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@dicquewuopamela" href="https://www.tiktok.com/@dicquewuopamela?refer=embed">@dicquewuopamela</a> Rose🌹💔=iphone📱 <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a title="social" target="_blank" href="https://www.tiktok.com/tag/social?refer=embed">#social</a> <a title="comedia" target="_blank" href="https://www.tiktok.com/tag/comedia?refer=embed">#comedia</a> <a title="experiment" target="_blank" href="https://www.tiktok.com/tag/experiment?refer=embed">#experiment</a> <a title="dicquewopamela" target="_blank" href="https://www.tiktok.com/tag/dicquewopamela?refer=embed">#dicquewopamela</a> </section> </blockquote> `)}</div>
                <div className='mt-8 flex justify-center' >
                    <video width='320' controls >
                        <source src={video2} />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='mt-8' >{parse(`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@marwat_king009/video/7292289673450376454" data-video-id="7292289673450376454" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@marwat_king009" href="https://www.tiktok.com/@marwat_king009?refer=embed">@marwat_king009</a></section> </blockquote>`)}</div>
                <div className='mt-8' >{parse(`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@justinbejolly" data-unique-id="justinbejolly" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@justinbejolly?refer=creator_embed">@justinbejolly</a> </section> </blockquote>`)}</div>
                <p className='mt-8' >I have not seen a single person take this method, and create an ecosystem effect out of it. Tackling multiple large goals at once means fanbases will emerge across the accounts, and when one flag post gets taken down, the entire vision and roadmap will become even more enticing and fun to consume.</p>
                <p className='mt-8' >Each separate social media account going after a goal is represented by a flag pole here. The different flag poles of each account vary in difficulty. As different flags get knocked down, the end state flag becomes more tangible as possible in the viewers eye, and the story of the other flags also becomes more interesting.</p>
                <div className='mt-8 flex items-center justify-center p-4 w-full bg-white' ><img className=' w-full max-w-xl ' src={image5} alt='image' /></div>
            </div>
            {/* {show && <div className='mt-4 flex gap-4 items-center font-semibold cursor-pointer' onClick={() => setShow(false)} ><BiSolidUpArrow /> Hide Examples</div>} */}
        </div>
    )
}

export default SubSectionTwo