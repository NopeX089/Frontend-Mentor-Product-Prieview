// import Button from './components/Button';
import Button from './components/Button';
import Card from './components/Card';
import Describe from './components/Describe';
import Price from './components/Price';
import Tittle from './components/Tittle';

function App() {
  return (
    <>
      <main className='flex h-screen w-screen bg-[#f2ebe3]  justify-center items-center'>
        <Card>
          <Tittle />
          <Describe
            text=' A floral, solar and voluptous interpretation composed by Olivier Polge,
    Perfumer-Creator for the House of CHANEL'
          />
          <Price />
          <Button text='Add to Card' />
        </Card>
        {/* <Button text='Add to Cart' /> */}
      </main>
    </>
  );
}

export default App;
