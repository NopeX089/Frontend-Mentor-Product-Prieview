type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className='w-[290px] h-12  flex justify-center border-none items-center bg-secondary text-accent rounded-lg font-semibold font-Montserrat mt-[25px] ml-[25px] hover:bg-emerald-800 ease-in-out transition duration-[500ms] shadow-md'>
      <img src='../assets/images/favicon-32x32.png' alt='' /> {text}
    </button>
  );
};

export default Button;
