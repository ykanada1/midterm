function distance (x1,y1,x2,y2) {
　　var a, b, c;

　　a = x1 - x2;
　　b = y1 - y2;
　　c = Math.sqrt(Math.pow(a,2)
+ Math.pow(b,2));

　　return c;
};
