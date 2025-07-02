import HeroSection from '../components/ServicesPage/HeroSection'
import BrandingStrategy from '../components/ServicesPage/BrandingStratergy'
import VideoEditing from '../components/ServicesPage/VideoEditing'
import ProductMarketing from '../components/ServicesPage/ProductMarketing'
import WebDesignDevelopment from '../components/ServicesPage/WebDesign'

const Services = () => {
  return (
    <div className='w-full -mt-20 flex flex-col gap-0 bg-black'>
        <HeroSection/>
        <BrandingStrategy/>
        <VideoEditing/>
        <ProductMarketing/>
        <WebDesignDevelopment/>
    </div>
  )
}

export default Services