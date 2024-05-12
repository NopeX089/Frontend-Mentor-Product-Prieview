type Props = {
  text: string;
};

const Describe = ({ text }: Props) => {
  return (
    <p className='flex text-text-paragraph font-Montserrat mt-[30px] text-[22px] font-medium '>
      {text}
    </p>
  );
};

export default Describe;
