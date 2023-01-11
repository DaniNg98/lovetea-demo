import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import sushiMenu from './files/sushi.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
      backgroundColor: '#696166',
      borderColor: '#fff',
      color: '#fff',
    },
  },
}));

const Sushi = () => {
  const classes = useStyles();
  return (
    <section id='Menu' className='backgroundSushi'>
      <div className='sushi'>
        <h1>Sushi menu</h1>
        <div className='sushi-button'>
          <Button
            className={classes.root}
            variant='outlined'
            color='primary'
            size='large'
            href={sushiMenu}
            target='_blank'
            style={{
              marginTop: '10%',
              width: '100%',
            }}
          >
            Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sushi;
