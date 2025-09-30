import personagemchatbot from '/personagemchatbot.png'

export default function Contato(){
    return(
        <>
        <header className="h-35 bg-[#15bef0] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> CONTATO </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Nossa equipe valoriza sua<br></br> opinião. Aguardamos seu Feedback.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[5px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Nossa equipe responsável pela ATENDE+HC está comprometida em fornecer suporte e assistência para garantir
            que você obtenha o máximo de benefícios na nossa plataforma. Caso tenha alguma pergunta,
            comentário ou sugestão, por favor, não hesite em entrar em contato conosco através do formulário abaixo:</h4>
                </section>

            </section> 

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>  

                

        </section>
        </>
    )
}