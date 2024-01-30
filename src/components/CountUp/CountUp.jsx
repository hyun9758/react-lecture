import classes from './CountUp.module.css';

function CountUp({ count = 0 }) {
  const handleCountUp = (e) => {
    // console.log('clicked button');
    // 변이(mutation) : 변경(update) 시도
    // 과연??
    count = count + 1;
  };

  return (
    <div className={classes.CountUp}>
      <output>{count}</output>
      <button type="button" className={classes.button} aria-label="카운트 업">
        +1
      </button>
    </div>
  );
}

export default CountUp;
