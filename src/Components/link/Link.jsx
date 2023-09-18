import PropTypes from 'prop-types'
const Link = ({route}) => {
    return (
        <div>
            {/* <AiOutlineMenu></AiOutlineMenu> */}
            <li className="mr-10 hover:bg-slate-300 px-3"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
Link.propTypes = {
    route : PropTypes.object
}
export default Link;