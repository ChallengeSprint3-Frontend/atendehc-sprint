import personagemchatbot from '/personagemchatbot.png'
import prototipo from '/prototipo.png'
import prototipoaudio from '/prototipoaudio.png'

export default function Prototipo(){
    return(
        <>
        <header className="h-35 bg-gradient-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> PROTÓTIPO </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Veja a funcionalidade da<br></br> nossa plataforma no <br></br>atendimento ao cliente.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Explore nosso protótipo e descubra como ele pode melhorar a experiência do paciente com uma 
                        interface intuitiva e prática de utilizar, fornecendo respostas rápidas e precisas, apoio ao usuário e acessibilidade tudo em um só lugar. </h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

        </section>

        <section className='flex'>

            <section className=''>
                <img className='w-[300px]'src={prototipo}  />
            </section>

            <section className=''>
                <img className='w-[300px]' src={prototipoaudio} />
            </section>

        </section>

        <section className='h-[20px] bg-[#0077C8]'></section>

        
        </>
    )
}