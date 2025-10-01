import personagemchatbot from '/personagemchatbot.png'

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


        </>
    )
}