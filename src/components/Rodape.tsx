import fiaplogo from '/fiaplogo.svg'
import hclogo from '/logohcsemfundo.png'
import iconmais from '/iconmaisbranco.png'

export default function Rodape(){
    return(
        <>
        <footer className="bg-gradient-to-r from-[#95e4f8] via-[#39b7dd] to-[#049fce]  h-23 flex justify-center text-xl p-6 ">
            <img className='h-[40px] justify-self-center mr-[20px]' src={fiaplogo}/>
            <img className='' src={iconmais}/>
            <img className='h-[60px] ml-[20px]' src={hclogo}/>
        </footer>
        </>
    )
}