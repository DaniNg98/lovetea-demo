import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import bubbleTeaMenu from './files/bubbletea.pdf';

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

const BubbleTea = () => {
  const classes = useStyles();
  return (
    <section id='Bubble Tea' className='backgroundTea'>
      <div className='tea'>
        <h1>Bubble Tea and Baguette menu</h1>
        <div className='tea-button'>
          <Button
            className={classes.root}
            variant='outlined'
            color='primary'
            size='large'
            href={bubbleTeaMenu}
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

export default BubbleTea;
