import Link from 'next/link';
export default function Brands() {
    return(
        <div>
            
            <div className='bg-[url("../../public/backphoto.jpg")] bg-cover bg-no-repeat w-full h-80 bg-bottom'>            
                <div className='pt-10 pl-10'>
                    <p className='text-blue font-semibold text-3xl'>
                        Brands
                    </p>
                    <p className='font-medium text-xl'><Link href='/'>Home</Link></p>
                </div>
            </div>
        </div>
        
        
        );
}