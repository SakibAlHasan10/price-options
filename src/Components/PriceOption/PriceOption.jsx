import propTypes from 'prop-types'
const PriceOption = ({option}) => {
    const {name, price} = option
    // console.log(option)
    return (
        <div className='border-2 border-red-600'>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
        </div>
    );
};
PriceOption.propTypes ={
    option : propTypes.object
}
export default PriceOption;