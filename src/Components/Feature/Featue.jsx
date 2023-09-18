import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Featue = ({feature}) => {
    return (
        <div className='text-left'>
            
            <p className='flex items-center '>
                <AiFillCheckCircle className='text-green-700 mr-2'></AiFillCheckCircle> 
                {feature}</p>
            
        </div>
    );
};
Featue.propTypes ={
    feature : PropTypes.string
}
export default Featue;