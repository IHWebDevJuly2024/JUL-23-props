function Hero(props) {
  console.log(props);
  // we can display all the child elements we are passing to this component
  return <>{props.children}</>;
}

export default Hero;
