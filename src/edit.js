import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

class EditItemClass extends React.Component {
    state = {
        userName: this.props.params.name,
        userAge: this.props.params.age,
    };

    handleChangeName = (event) => {
        const nameValue = event.target.value;
        this.setState({ userName: nameValue });
    }

    handleChangeAge = (event) => {
        const ageValue = event.target.value
        this.setState({ userAge: ageValue });
    }


    handleSubmitClick = () => {
        const { navigate } = this.props;
        window.sessionStorage.setItem(this.state.userName, this.state.userAge);
        navigate('/');
    }

    render () {
        const { userName, userAge } = this.state;
        return (
            <FormGroup
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <img src=
{`https://avatars.dicebear.com/api/bottts/${userName+userAge}.svg`} alt="Avatar" width="60"/>
                </Avatar>
                <TextField
                    id="userNameID"
                    name='userName'
                    label="User Name"
                    variant="standard"
                    value={userName}
                    onChange={this.handleChangeName}
                    error={this.state.errorName}   
                />
                <TextField
                    id="userAgeID"
                    type='text'
                    name='userAge'
                    label='Age'
                    variant="standard"
                    value={userAge}
                    onChange={this.handleChangeAge}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={this.handleSubmitClick}
                >
                    Save
                </Button>
          </FormGroup>
         );
    }
}

// need wrapped EditItem class for useNavigate hook etc.
export default function EditItem (props) {
    const navigate = useNavigate();
    const params = useParams();
    return <EditItemClass {...props} navigate={navigate} params={params}/>;
}