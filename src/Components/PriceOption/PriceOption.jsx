import propTypes from 'prop-types'
import Featue from '../Feature/Featue';
const PriceOption = ({option}) => {
    const {name, price, features} = option
    // console.log(option)
    return (
        <div className=' flex flex-col border-2 bg-blue-500 rounded-xl p-5 pb-6 text-center text-white'>
            <h2>
                <span className='text-7xl font-semibold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-2xl my-6'>{name}</h4>
            <div className='pl-4 flex-grow'>
                {
                    features.map((feature, idx) => <Featue key={idx}
                    feature={feature}
                    ></Featue>)
                }
            </div>
            <button className='btn mt-12 bg-orange-400 w-full font-bold hover:bg-orange-300'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option : propTypes.object
}
export default PriceOption;