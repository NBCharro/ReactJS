import { Fragment, Component } from 'react';

import Users from './Users';
import UsersContext from '../store/store-context';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        };
    }
    componentDidMount() {
        // Imaginemos que filteredUsers viene de un http request y es un array vacio=> filteredUseres: [],
        // Send http request...
        this.setState({ filteredUsers: this.context.users });
    }
    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            // Para evitar loops infinitos
            this.setState({
                filteredUsers: this.context.users.filter(user =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
// useEffect(() => {
//     setFilteredUsers(
//         DUMMY_USERS.filter(user => user.name.includes(searchTerm))
//     );
// useContext()
// useEffect(()=>{
// 	setFilteredUsers(DUMMY_USERS)
// },[])
// }, [searchTerm]);
//     const searchChangeHandler = event => {
//         setSearchTerm(event.target.value);
//     };
//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;
