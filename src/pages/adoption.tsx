import Link from 'next/link';
export default function Adoption() {
    return(
        <div className='bg-[url("../../public/backphoto.jpg")] bg-cover bg-no-repeat w-full h-80 bg-bottom'>
            
        <div className='pt-10 pl-10'>
            <p className='text-blue font-semibold text-3xl'>
                Adoptions
            </p>
            <div className='flex'>
                <div className='font-medium text-xl'><Link href='/'>Home</Link></div>
                <div>b</div>
            </div>
            
        </div>
        </div>
        
        );
}