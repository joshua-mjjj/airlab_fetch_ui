import React  from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// // import Input from '@material-ui/core/Input';
// import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import { fetch_service } from "../actions/service request";
// import TextField from '@material-ui/core/TextField';

import Spinner from "../assets/home_load.gif";
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginBottom: theme.spacing(4),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  grid:{
      margin: theme.spacing(2),
  },
    submitButton: {
       // marginLeft: '60px',
        marginTop: '10px',
        alignItems: 'center',
        color: '#FF3D00',
        justifyContent: 'center',
        backgroundColor: '#fff!important',
        border: '1.5px solid #FF3D00',
        borderRadius: '50px',
        "&:hover": {
             backgroundColor: '#F0FFF0!important',
            },
         "&:focus": {
             outline: 'none !important'
            }
        },
}));

function Form(props) {
  const classes = useStyles();
  const [ProjectId, setProjectId] = React.useState("");
  const [XmlFormId, setXmlFormId] = React.useState("");
  const [Filename, setFilename]   = React.useState("");
  const [non_fields_error, setNon_fields_error]   = React.useState(null);
  const [show, setShow]   = React.useState(false);


  const handleFetch = () => {
    if(ProjectId && XmlFormId && Filename){
        props.fetch_service(ProjectId, XmlFormId, Filename);
        setShow(true)
    }else{
      setNon_fields_error("Please provide all the required information.")
    }
  }



  return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-left h-full">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Provide detals about the project 
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              {
                non_fields_error !== null ? 
                  (
                  <Grid item xs={12} className={classes.grid}>
                      <Alert
                        severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setNon_fields_error(null)
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }>
                         <div >{non_fields_error}</div>
                      </Alert>
                 </Grid>
                  ): null
                }
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {/*<div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>*/}
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      ProjectId
                    </label>
                    <input
                      onChange={(e) => setProjectId(e.target.value)}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="id"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      XmlFormId
                    </label>
                    <input
                      onChange={(e) => setXmlFormId(e.target.value)}
                       type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="XmlFormId"
                    />
                  </div>
                   <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Filename
                    </label>
                    <input
                      onChange={(e) => setFilename(e.target.value)}
                       type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="filename for the file to be created"
                    />
                  </div>
                  <div className="text-center focus:outline-none box-shadow:none mt-6">
{/*                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleFetch}
                    >
                      {"Fetch"} <div style={{
                               // alignItems:'center',
                               // justifyContent:'center'
                               marginLeft:'10px',
                               marginTop: '5px'
                                }}>
                              <img src={Spinner} alt="" height="25px" width="25px" /> 
                           </div>
                    </button>*/}

                     <Button
                          variant="outlined"
                          color="primary"
                          //disabled={disabl_}
                          style={{maxWidth: '160px', maxHeight: '35px', minWidth: '160px', minHeight: '35px'}}
                          onClick={handleFetch}
                          className={classes.submitButton}
                        >
                        {"Fetch"} 
                            {
                              props.service_request.isLoading === true ? (
                                <div style={{
                                   marginLeft:'10px',
                                   marginTop: '5px'
                              }}>
                                <img src={Spinner} alt="" height="25px" width="25px" /> 
                             </div>) : null
                            }
                      </Button>
                {
                  props.service_request.service_data !== null && show === true ? 
                    (
                    <Grid item xs={12} className={classes.grid}>
                        <Alert
                          severity="info"
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setShow(false)
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }>
                           <div >{"Request complete!"}</div>
                        </Alert>
                   </Grid>
                    ): null
                }

                  </div>
                </form>
              </div>
            </div>
           {/* <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  service_request: state.service_request,
});

export default connect(mapStateToProps, {fetch_service} )(Form);

  

