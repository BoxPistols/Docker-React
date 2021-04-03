import { makeStyles } from '@material-ui/core/styles'
import { FC, useState } from 'react'
import { Container, Paper, Grid, Button } from '@material-ui/core'
import './App.scss'

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const App: FC<Props> = () => {
  const [count, setCount] = useState<number>(0)
  const classes = useStyles()

  return (
    <div className='App'>
      <Container maxWidth='sm' className='container'>
        <div className={classes.root}>
          {/* <Grid container spacing={10} direction='column' justify='center' alignItems='center'> */}
          <Grid container spacing={10} justify='center' alignItems='center'>
            <Grid item xs={2}>
              Side
            </Grid>
            <Grid item xs={10}>
              <Paper className={classes.paper}>
                <h2>{count}</h2>
              </Paper>
              <Paper className={classes.paper}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => {
                    setCount(count + 1)
                  }}
                >
                  Count
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
