import { imageWebDesktop } from "../assets/images"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="padding-l padding-r flex flex-row gap-9" >
      <div>
        <img 
          src={imageWebDesktop} 
          alt="hero"
          className="w-full object-cover"
        />
        <div className="flex flex-row justify-between mt-4">  
          <div className="w-2/6">
            <h1 className="text-4xl font-bold leading-none font-inter">The Bright Futute of Web 3.0?
            </h1> 
          </div> 
             
          <div className="w-3/5 p-2">
            <p className="text-slate-gray leading-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit et nam velit excepturi repellat at dolores non. Eum ea necessitatibus odio tempora.</p>
            <Button />
          </div>
        </div>
      
      </div>
      <div className="bg-black text-slate-gray p-4 w-4/6 font-inter">
        <h1 className="text-yellow-400 text-3xl mb-3 font-bold">New</h1>
        <h2 className="font-bold text-white text-xl hover:text-yellow-400 ">Hydrogen vs Electric cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EV's</p>
        <div className="border-t border-gray-500 w-full h-1 my-7 "></div>

        <h2 className="font-bold text-white text-xl hover:text-yellow-400 ">The Downside of AI Artistry</h2>
        <p>What are the possible adverse effects of on-demand AI image geberation?</p>
        <div className="border-t border-gray-500 w-full h-1 my-7 "></div>

        <h2 className="font-bold text-white text-xl hover:text-yellow-400 ">Is VC Funding Drying up?</h2>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>       
      </div>
    </section>
  )
}

export default Hero