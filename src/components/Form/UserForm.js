import Button from '../UI/Button';
import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../store/user-slice';

import css from './UserForm.module.css';
import avatar from '../../assets/user-blue.svg';

const UserForm = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    const dispatch = useDispatch();

    const firstRef = useRef();
    const lastRef = useRef();
    const cityRef = useRef();
    const postRef = useRef();
    const streetRef = useRef();
    const houseNumRef = useRef();

    let user = useSelector(state => state.user.user);
    if (!user) {
        user = ['', '', '', '', '', ''];
    }

    const editForm = () => {
        setIsDisabled(false);
    };

    const saveInformation = (event) => {
        event.preventDefault();
        const userInformation = [firstRef.current.value,
            lastRef.current.value,
            streetRef.current.value,
            houseNumRef.current.value,
            cityRef.current.value,
            postRef.current.value,
        ];
        dispatch(userActions.setUserInformation(userInformation));
        setIsDisabled(true);
    };

    return (
        <div className={css.userForm}>
            <img className={css.avatar} src={avatar} alt={'avatar'}></img>
            <form className={`${css.userInformation} ${isDisabled ? css.savedInformation : css.editUserInformation}`}>
                <label><span>Firstname: </span><input disabled={isDisabled}
                                                      className={user[0].length > 0 ? css.valid : css.invalid}
                                                      defaultValue={user[0].length < 0 ? '' : user[0]}
                                                      ref={firstRef} type={'text'}/></label>
                <label><span>Lastname: </span><input disabled={isDisabled}
                                                     className={user[1].length > 0 ? css.valid : css.invalid}
                                                     defaultValue={user[1].length < 0 ? '' : user[1]} ref={lastRef}
                                                     type={'text'}/></label>
                <label><span>Street: </span><input disabled={isDisabled}
                                                   className={user[2].length > 0 ? css.valid : css.invalid}
                                                   defaultValue={user[2].length < 0 ? '' : user[4]} ref={streetRef}
                                                   type={'text'}/></label>
                <label><span>House number: </span><input disabled={isDisabled}
                                                         className={user[3].length > 0 ? css.valid : css.invalid}
                                                         defaultValue={user[3].length < 0 ? '' : user[5]}
                                                         ref={houseNumRef} type={'text'}/></label>
                <label><span>City: </span><input disabled={isDisabled}
                                                 className={user[4].length > 0 ? css.valid : css.invalid}
                                                 defaultValue={user[4].length < 0 ? '' : user[2]} ref={cityRef}
                                                 type={'text'}/></label>
                <label><span>Postcode: </span><input disabled={isDisabled}
                                                     className={user[5].length > 0 ? css.valid : css.invalid}
                                                     defaultValue={user[5].length < 0 ? '' : user[3]} ref={postRef}
                                                     type={'text'}/></label>
                <Button className={isDisabled ? css.buttonVisible : css.buttonInvisible} type={'button'}
                        onClick={editForm}>Edit</Button>
                <Button className={isDisabled ? css.buttonInvisible : css.buttonVisible} type={'submit'}
                        onClick={saveInformation}>Save</Button>
            </form>
        </div>

    );
};

export default UserForm;