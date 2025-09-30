import personagemchatbot from '/personagemchatbot.png'

export default function Prototipo(){
    return(
        <>
        <header className="h-35 bg-[#15bef0] flex justify-center text-7xl p-6">
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
        </>
    )
}