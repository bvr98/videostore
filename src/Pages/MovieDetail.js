import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "../css/MovieDetail.css";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function MovieDetail({ children, id ,poster,title,year,rent,buy,overview,backdrop_path}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


return (
  <div>
    <button className="movieposter" onClick={handleOpen} >
      {children}
    </button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
    <Fade in={open}>
    {(
          <div className={classes.paper}>
            <div className="MovieDetail" >              
            <img src={`${poster}`} className="MovieDetail_portrait" alt="poster" />
            <img src={`${backdrop_path}`} className="MovieDetail_landscape"  alt="poster"/>
            <div className="MovieDetail_about">
              <span className="MovieDetail_title">
                {title} ({(year)})
              </span>
              <span className="glass">
              <ul>
                <li>Rent: {rent}</li>
                <li>Buy: {buy}</li>
               </ul>
              </span>
              <span className="MovieDetail_overview">
              {(overview)}
              </span>
              
            </div>
            </div>
            
          </div>
          )}
    </Fade>
    </Modal>
  </div>
);
}

