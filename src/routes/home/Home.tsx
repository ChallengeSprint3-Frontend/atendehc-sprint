import personagemchatbot from '/personagemchatbot.png'
import inclusaodigital from '/inclusaodigitalrec.png'
import teleconsulta from '/teleconsulta.png'

export default function Home(){
    return(
        <>
        <header className="h-35 bg-gradient-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> QUEM SOMOS?</h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Sua referência em saúde<br></br> digital inclusiva,acessível<br></br> e de qualidade.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Atende+HC é uma plataforma criada com o intuito de ajudar pessoas que enfrentam
                        dificuldades no ambiente virtual. Constituído por um website de apoio e um ChatBot
                        integrado às plataformas Whatsapp e Telegram, o projeto Atende+HC utiliza a empatia para  
                        construir pontes entre o usuário e a tecnologia.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

        </section>

        <section className='h-[20px] bg-[#0077C8] mb-[20px]'></section>

        <section className='flex mb-[20px]'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center mr-[30px]">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Nossa missão é tornar <br></br>a internet um ambiente<br></br> confortável para todos.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Nosso objetivo é fornecer uma plataforma facilmente acessível e intuitiva
                    que complemente o web-atendimento já existente, visando diminuir as dificuldades
                    enfrentadas por usuários com pouco ou nenhum letramento digital, e com isso, aumentando a independência digital de todos os públicos.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={inclusaodigital} />
                </section>


        </section>

        <section className='h-[20px] bg-[#0077C8]'></section>

        <section className='flex mb-[20px]'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Redução significativa das <br></br>taxas de absenteísmo.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> O resultado esperado após a integração do projeto é a queda significativa das taxas de absenteísmo 
                e aumento da capacitação digital, além  de facilitar a interação com a tecnologia para todos 
                os públicos e também gerar autonomia para o usuário, que poderá por conta própria participar ativamente do processo de agendamento e teleatendimento.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={teleconsulta} />
                </section>


        </section>

        <section className='h-[20px] bg-[#0077C8]'></section>


        </>
    )
}