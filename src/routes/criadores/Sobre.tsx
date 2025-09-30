import fotobeatriz from '/fotobeatriz.png'
import fotofernanda from '/fotofernanda.png'
import fotogiovana from '/fotogiovana.png'

export default function Sobre(){
    return(
        <>
        <header className="h-35 bg-[#15bef0] flex justify-center text-7xl p-6">
            <h1 className='font-bold'> SOBRE NÓS</h1>
        </header>

<section className='flex justify-between p-16'>
        <section className="">

            <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]"src={fotobeatriz} />
            <h3 className=''> Beatriz de Souza Franco</h3>
            <h3 className=''> Turma: 1TDSPI - RM: 563686</h3>
            

        </section>



        <section className="block">

            <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]" src={fotogiovana}/>
            <h3 className=''> Giovana Souza Vieira </h3>
            <h3 className=''> Turma: 1TDSPI - RM: 564430</h3>

        </section>



        <section className="block">

            <img className="h-85 hover:drop-shadow-[0_0_2em_#646cffaa]" src={fotofernanda}/>
            <p className=''> Maria Fernanda Santos Mendes </p>
            <h3 className=''> Turma: 1TDSPI - RM: 564430 </h3>

        </section>
</section>


        </>
    )
}