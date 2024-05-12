import { ReactNode } from 'react';

interface props {
  children: ReactNode;
}

const Card = ({ children }: props) => {
  return (
    <>
      <section className=' flex w-[800px] h-[600px] bg-white rounded-[20px] justify-center items-center flex-row'>
        <div className='w-[400px] h-[600px] flex'>
          <img
            className='w-[400px] h-[600px] bg-white rounded-l-[20px]'
            src='../assets/images/image-product-desktop.jpg'
            alt=''
          />
        </div>
        <div className='w-[400px] h-[600px] flex justify-start flex-col m-[30px] mt-[85px] font-Montserrat '>
          <h1 className='tracking-[10px] text-[13px] text-text-paragraph ml-[5px] font-semibold'>
            PERFUME
          </h1>

          {children}
        </div>
      </section>
    </>
  );
};

export default Card;
