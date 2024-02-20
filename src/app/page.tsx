import Header from '@/app/Header';
import NavBar from '@/app/navbar';
import Brands from '@/pages/brands';
import FeaturedProducts from './featuredproducts';
import ShopByCategory from '@/components/shopbycategory';

export default function Home() {
  return (
    <div className='bg-slate-200'>   
        <Header />
        <NavBar />
        <Brands />
        <FeaturedProducts />
        <ShopByCategory />
    </div>
  );
}
