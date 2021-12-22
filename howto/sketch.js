let state = 0;
let progress = 0;
let speed;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(18);
    textAlign(CENTER, CENTER);
}

function draw() {
    console.log(progress);
    speed = dist(pmouseX, pmouseY, mouseX, mouseY);
    
    if (state == 0) {

        text('How to Pat Your Mobile Phone', width/2, 40);
        text('유리 액정을 쓰다듬는 방법', width/2, 80);

        if (mouseIsPressed) {
            progress++;
            if (progress > 2) {
                state = 1;
                console.log("state 0->1");
                progress = 0;
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }
    } else if (state == 1) {
        stateOne();
        if (speed > 0 && speed < 300) {
            progress++;
            if (progress > 150) {
                state = 2;
                console.log("state 0->1");
                progress = 0;
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }
    } else if (state == 2) {
        stateTwo();
        if (speed > 30 && speed < 100) {
            progress++;
            if (progress > 6) {
                state = 3;
                console.log("state 1->2");
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }
    } else if (state == 3) {
        stateThree();
        if (speed > 0 && speed < 200) {
            progress++;
            if (progress > 150) {
                state = 2;
                console.log("state 2->3");
                progress = 0;
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }
            
    } else if (state == 4) {
        stateFour();
        if (speed > 0 && speed < 200) {
            progress++;
            if (progress > 150) {
                state = 2;
                console.log("state 3->4");
                progress = 0;
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }

    }
    else if(state == 5){
        stateFive();
        if (mouseIsPressed) {
            progress++;
            if (progress > 2) {
                state = 1;
                console.log("state 0->1");
                progress = 0;
            }
        } else {
            progress -= 10;
            if (progress < 10) {
                progress = 0;
            }
        }

    }
}


function stateOne() {
    clear();
    textAlign(CENTER, CENTER);
    text('Smoothly', width/2, windowHeight- 65);
    text('부드럽게', width/2, windowHeight- 30);

}

function stateTwo() {
    clear();
    textAlign(CENTER, CENTER);
    text('Faster', width/2, windowHeight- 65);
    text('빠르게', width/2, windowHeight- 30);

}

function stateThree() {
    clear();
    textAlign(CENTER, CENTER);
    text('using all of your thumbs', width/2, windowHeight- 65);
    text('엄지 손가락 면을 최대한 붙여서', width/2, windowHeight- 30);
}

function stateFour() {
    clear();
    textAlign(CENTER, CENTER);
    text('left to right', width/2, windowHeight- 65);
    text('왼쪽에서 오른쪽으로', width/2, windowHeight- 30);

}

function stateFive() {
    clear();
    textAlign(CENTER, CENTER);
    text('Did you enjoy getting to know your phone screen glass?', width/2, 40);
    text('휴대폰 액정을 알아가는 시간을 만끽하셨나요?', width/2, 80);

}

function stateSix() {
    clear();
    textAlign(CENTER, CENTER);
    text('The glass says it’s happy to get to know you.', width/2, 40);
    text('유리액정 또한 당신을 알 수 있어서 기쁘다고 합니다.', width/2, 80);

}
