import personagemchatbot from '/personagemchatbot.png'

export default function Faq(){
    return(
        <>
        <header className="h-35 bg-gradient-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> PERGUNTAS FREQUENTES </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Tire suas dúvidas sobre a<br></br> plataforma ATENDE+HC<br></br> na saúde digital. </h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[20px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Bem-vindo à nossa central de ajuda! Aqui você encontra respostas para as dúvidas
            mais comuns sobre nosso projeto e suas funcionalidades.
            Caso não encontre o que está procurando, entre em contato com a nossa equipe.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

                

        </section>


        <section className="">

            <h2> Qual o nosso diferencial? </h2>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto 
                quos mollitia asperiores non voluptas expedita quibusdam ad vero
                voluptates cum cumque repellendus, eveniet id facilis maiores natus eaque?
                Commodi, ipsum!</p>

            <h2> Qual a eficiência real do projeto? </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis
                perspiciatis ex, nemo at vero ab debitis pariatur doloremque magnam id
                veritatis facere possimus eos voluptate sit, ea dolore repudiandae!</p>

            <h2> Qual o público-alvo do projeto?</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dicta 
                qui repellat cupiditate autem dignissimos animi fugit vero atque nisi 
                exercitationem, corporis obcaecati alias aliquam voluptates minus temporibus
                officiis eum.</p>

            <h2> Como os pacientes poderão acessar o ChatBot e quais os requisitos técnicos necessários??</h2>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem consequatur,
                non dolore, deserunt amet odio voluptatum dolores nisi consequuntur, 
                voluptatibus ducimus sit! Nam, voluptas dolore necessitatibus sapiente 
                nostrum alias odio?</p>

            <h2> Quais serão os benefícios esperados do uso do ChatBot em termos de 
                eficiência e custo?</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit 
                necessitatibus maiores possimus incidunt deserunt impedit fugit illum, 
                vero ex molestias quod ratione voluptatibus consequuntur corporis doloribus 
                amet aut esse unde?</p>

            <h2> Quais são as limitações do ChatBot?</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora 
                doloribus soluta ab obcaecati incidunt enim doloremque rem, magnam quas 
                reprehenderit error explicabo! Eaque possimus deserunt voluptas aut 
                excepturi numquam?</p>

            
            <h2> Como o chatbot será integrado à plataforma digital de saúde já existente
                do hospital?</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi magni 
                consequatur quo esse voluptates, soluta sequi sed eligendi necessitatibus
                accusamus deserunt! Et eaque deleniti tempore nostrum soluta eos qui.</p>
        </section>
                </>
    )
}