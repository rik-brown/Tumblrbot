void setup() {
  size(1024, 1024);
  background(random(255), random(255), random(255));
  textSize(100);
  text("Test image", 250, 512);
  saveFrame("output.png");
  exit();
}