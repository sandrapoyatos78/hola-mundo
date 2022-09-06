import { List, ListItem, ListItemIcon, ListItemText} from  '@mui/material';
import {Home, Settings} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)
            case 'TASK':
                return (<Home></Home>)
                case 'SETTINGS':
                    return (<Settings></Settings>)
         
    
        default:
            return (<Home></Home>)
    }
}

const MenuList = ({list}) => {

    const navegate = useNavigate();

    return (
        <List>
            {list.map(({text,path,icon}, index) =>
            (
                <ListItem key= {index}  button onClick={() => navegate(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary= {text}/>
                </ListItem>
            )
            )}
        </List>
    )

}

export default MenuList;