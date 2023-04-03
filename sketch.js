let points = [[1, 10], [3, 11], [4, 11],[6,10],[4,9],[5,8],[5,6],[4,7],[3,7],[1,5],[2,4],[2,-1],[3,-3],[3,-5],[4,-5],[5,-4],[6,-4],[7,-5],[5,-7]
,[4,-7],[3,-6],[3,-7],[-5,-7],[-5,-6],[-4,-5],[-3,-5],[-4,-4],[-4,-3],[-3,-2],[-2,-2],[-3,0],[-3,1],[-4,2],[-5,1],[-6,2],[-5,3],[-4,3],[-4,4]
,[-6,4],[-5,5],[-4,5],[-3,4],[-2,5],[-3,6],[-3,7],[-1,10]]; //畫點連線出兔子，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(0);
  strokeWeight(10)//點的寬度
  // 計算滑鼠位置到畫布中心的距離
let distance = dist(mouseX, mouseY, width / 2, height / 2);

// 將距離轉換為縮放因子
  
let scaleFactor = map(distance, 0, width / 2, 1, 2);
  
// 以畫布中心為基準進行縮放
  
  translate
translate(width / 2, height / 2);
scale(scaleFactor);
  
  translate
translate(-width / 2, -height / 2);
  textSize(60)  //文字大小
  fill(255, 192, 203);  //設定顏色粉紅色
  text("教育科技學系",200,100)  //顯示文字
  //scale(50)
 // 設置線條漸變效果
 let gradientColor1 = color(100, 149, 237); // 灰丁寧藍色
  let gradientColor2 = color(54, 72, 111); // 深藍色
 let startX = 0;
 let startY = height/2;
 let endX = width;
 let endY = height/2;
 let gradient = drawingContext.createLinearGradient(startX, startY, endX, endY);
 gradient.addColorStop(0, gradientColor1);
 gradient.addColorStop(1, gradientColor2);
 drawingContext.strokeStyle = gradient;
// 画线条
//strokeWeight(10);
//line(startX, startY, endX, endY);


  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}