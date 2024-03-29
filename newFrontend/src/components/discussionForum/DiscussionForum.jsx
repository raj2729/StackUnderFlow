import {
  IconButton,
  Container,
  Card,
  Avatar,
  CardHeader,
  CardActions,
  Collapse,
  CardContent,
  Typography,
  Button,
  Modal,
  Paper,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ReplyIcon from "@material-ui/icons/Reply";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import data from "./data";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "70px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)",
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  card: {
    border: "2px solid #C8C6C6",
    padding: "10px !important",
    margin: "20px 100px 0px 100px",
    borderRadius: "10px",
  },
  add: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    fontSize: "large",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    alignContent: "center",
    width: "50%",
    padding: "10px",
  },
  post: {
    marginTop: "10px",
  },
}));

function DiscussionForum() {
  // console.log("in discuss forummm")
  const classes = styles();
  // console.log("userInfo",userLogin)
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questionId, setQuestionId] = useState(null);

  // const questions = [{ 'profile': { 'profilePicture': 'https://res.cloudinary.com/dizvyn9b5/image/upload/v1632215752/mtxpeyrrjcbmmuygtj5z.jpg', 'name': 'Riya Singh' }, 'datePosted': 'September 21, 2021', 'question': 'When will I get it back?', 'answers': [{ 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }, { 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }] },
  // { 'profile': { 'profilePicture': 'https://res.cloudinary.com/dizvyn9b5/image/upload/v1632215752/mtxpeyrrjcbmmuygtj5z.jpg', 'name': 'Riya Singh' }, 'datePosted': 'September 21, 2021', 'question': 'How do i do the assignment?', 'answers': [{ 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }, { 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }] },
  // { 'profile': { 'profilePicture': 'https://res.cloudinary.com/dizvyn9b5/image/upload/v1632215752/mtxpeyrrjcbmmuygtj5z.jpg', 'name': 'Riya Singh' }, 'datePosted': 'September 21, 2021', 'question': 'How do i do the assignment? When will I get it backvuirnuienruincuw wjnbciuwbi uwefbyb iuwbefub', 'answers': [{ 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }, { 'name': 'Rohit', 'datePosted': 'September 22, 2021', 'answer': 'By typing it' }] }]
  const [expanded, setExpanded] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  useEffect(() => {
    setQuestions(data);
  }, [questions]);

  const [filter, setFilter] = useState("");

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handlePostQuestion = () => {
    // submitQuestion();
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Container>
                      <AppBar position="static" className={classes.bar}>
                          <Toolbar>
                              <Typography className={classes.title} variant='h4'>Discussion Forum</Typography>
                              <div className={classes.search}>
                                  <div className={classes.searchIcon}>
                                      <SearchIcon />
                                  </div>
                                  <InputBase
                                      placeholder="Search…"
                                      onChange={(e) => setFilter(e.target.value)}
                                      classes={{
                                          root: classes.inputRoot,
                                          input: classes.inputInput,
                                      }}
                                      inputProps={{ 'aria-label': 'search' }}
                                  />
                              </div>
                          </Toolbar>
                      </AppBar>
                      <br /> */}
      <Container style={{marginTop: "100px"}}>
        {questions.map((question, index) => {
          const profile = question;
          {
            /* if (question.question.includes(filter)) { */
          }
          return (
            <Card key={index} className={classes.card}>
              <CardHeader
                avatar={<Avatar src={profile.img} />}
                title={profile.askedBy}
                subheader={question.date}
              />
              <CardContent style={{ padding: "0px", paddingLeft: "10px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={9} md={9}>
                    <Typography variant="h6" color="textSecondary">
                      {question.question}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} md={3}>
                    <CardActions disableSpacing>
                      <IconButton
                        onClick={() => handleExpandClick(index)}
                        aria-expanded={expanded === index}
                        aria-label="show more"
                      >
                        <Typography>Replies</Typography>
                        {expanded === index ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setQuestionId(question.qId);
                          handleOpen1();
                        }}
                      >
                        <Typography>Reply</Typography>
                        <ReplyIcon />
                      </IconButton>
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                {question.answers.map((answer, index) => {
                  return (
                    <Container key={index}>
                      <Typography variant="h5">{answer.answeredBy}</Typography>
                      <Typography variant="caption">{answer.date}</Typography>
                      <Typography paragraph>{answer.answer}</Typography>
                    </Container>
                  );
                })}
              </Collapse>
            </Card>
          );
          {
            /* } */
          }
        })}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.add}
          onClick={handleOpen2}
        >
          Ask Question
        </Button>
        <Modal
          className={classes.modal}
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              label="Enter your Answer"
              multiline
              maxRows={20}
              fullWidth
              className={classes.text}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.post}
              onClick={() => {
                // handlePostAnswer();
              }}
            >
              Post Answer
            </Button>
          </Paper>
        </Modal>
        <Modal
          className={classes.modal}
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              label="Enter your Question"
              multiline
              maxRows={20}
              fullWidth
              className={classes.text}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.post}
              onClick={() => handlePostQuestion()}
            >
              Post Question
            </Button>
          </Paper>
        </Modal>
      </Container>
    </>
  );
}

export default DiscussionForum;
