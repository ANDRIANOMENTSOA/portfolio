import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function Menu() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className="menu">
          <Button color="inherit">Portfolio</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
