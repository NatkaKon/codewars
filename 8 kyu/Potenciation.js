function power(x,y){
    if (x == 0 && y == 0) {
      return 1;
    } else if (x == 0) {
      return 0;
    } else {
      return x ** y;
    }
  }