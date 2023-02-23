// import React, { Component } from "react";
// class MyRequest extends Component {
//   state = { list: [] };

//   list = async () => {
//     const { contract, accounts } = this.props;
//     var a = await contract.methods.getRequestList(accounts[0]).call();
//     this.setState({ list: a });
//     console.log(this.state);
//   };

//   check = async () => {
//     const { contract, accounts } = this.props;

//     var a = await contract.methods.Retrive(accounts[0]).call();

//     console.log(a);
//   };

//   yu = async () => {
//     const { contract, accounts } = this.props;

//     await contract.methods
//       .AcceptRequestByStudent(accounts[0])
//       .send({ from: accounts[0] });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.list}>O</button>
//         {this.state.list.map(li => {
//           return (
//             <div>
//               {li} <button onClick={this.check}>Verify</button>{" "}
//               <button onClick={this.yu}>Accept</button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default MyRequest;

import React, { Component } from "react";
import { Grid, Typography, Avatar, Card, Button } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import AssignmentIcon from "@material-ui/icons/Assignment";
import green from "@material-ui/core/colors/green";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailIcon from "@material-ui/icons/Mail";
import AlertDialog from "../CommonComponents/AlertDialog";

class MyRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          {/* <Grid item md={1} /> */}
          <Grid item md={6}>
            <Card
              style={{
                marginTop: "30px",
                marginLeft: "50px",
                marginRight: "50px",
                width: "1150px"
              }}
            >
              <Grid container>
                <Grid item md={1}>
                  <Avatar
                    style={{ margin: "15px", backgroundColor: "#E10050 " }}
                  >
                    <MailIcon />
                  </Avatar>
                </Grid>
                <Grid item md={10}>
                  <Typography
                    variant="h4"
                    style={{
                      padding: "10px",
                      marginLeft: "15px",
                      color: "#E10050"
                    }}
                  >
                    Transfer of Ownership Requests
                    <Typography variant="caption" style={{ marginLeft: "5px" }}>
                      (Click on the Request to view.)
                    </Typography>
                  </Typography>
                  <hr />
                </Grid>

                {/* array map ExpPanel.jsx */}
                <Grid container>
                  <Grid item md={2} style={{ marginLeft: "25px" }}>
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: green[500]
                      }}
                    >
                      <MailIcon />
                    </Avatar>
                  </Grid>

                  <Grid item md={6}>
                    <Typography>
                      Request to view{" "}
                      <em style={{ color: "red" }}>Class X marksheet </em> was
                      sent on <em>26/1/2015</em> by <em>CPSKR</em>. <br />
                      Requester Address : <em>8855DDX84844</em>
                    </Typography>
                    <br />
                  </Grid>
                  <Grid item md={1} />
                  <Grid item md={1}>
                    <AlertDialog /> {/* array map the alert dialog  */}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyRequest;
