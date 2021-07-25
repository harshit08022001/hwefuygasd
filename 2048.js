let grid;
let score=0;

function start(){
    grid = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]];
        addnumber();
        addnumber();
        display();

}
let ngButton = document.querySelector('.newGame');
ngButton.addEventListener('click',newGame);
document.querySelector('.gameover').style.display = 'none';
function newGame() {
     console.log("HEllo");
    score=0;
    document.querySelector('.gameover').style.display = 'none';
    document.querySelector('.container').style.color = 'black';
    start();
}

function addnumber()
{
    let options = [];
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(grid[i][j]===0){
                options.push({
                    x:i,
                    y:j
                });
            }
        }
    }
    if(options.length>0)
    {
        let o =Math.random();
        let l = options[Math.floor(Math.random()*options.length)];
        grid[l.x][l.y] = o>0.5?4:2;
    }
}

function display(){
    let disg=document.querySelector('.container').childNodes;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(grid[i][j]!=0)
                disg[2*(4*i+j)+1].textContent = grid[i][j];
            else
                disg[2*(4*i+j)+1].textContent = "";
        }
    }
}

function left()
{
    //Left sliding operation
    for(let i=0;i<4;i++)
    {
        let iRow = grid[i].filter(val => val);
        let frow =[];
        while(iRow.length>0)
        {
            if(iRow.length>1)
            {
                if(iRow[0]==iRow[1])
                {
                    let x = iRow.shift();
                    score+=2*x;
                    frow.push(2*x);
                    iRow.shift();
                }
                else{
                    frow.push(iRow.shift());
                }
            }
            else{
                frow.push(iRow.shift());
            }
        }
        
        for(let j=0;j<4;j++)
        {
            if(j<frow.length)
            {
                grid[i][j]=frow[j];
            }
            else{
                grid[i][j]=0;
            }
        }
        
    }
    addnumber();
    // Display newly updated grid
    display();
}

function right(){
    //right sliding operation
    for(let i=0;i<4;i++)
    {
        let iRow = grid[i].filter(val => val);
        let frow =[];
        while(iRow.length>0)
        {
            if(iRow.length>1)
            {
                if(iRow[iRow.length-1]==iRow[iRow.length-2])
                {
                    frow.push(2*iRow.pop());
                    iRow.pop();
                }
                else{
                    frow.push(iRow.pop());
                }
            }
            else{
                frow.push(iRow.pop());
            }
        }
        for(let j=3;j>=0;j--)
        {
            if(j>3-frow.length)
            {
                grid[i][j]=frow[3-j];
            }
            else{
                grid[i][j]=0;
            }
        }
        
    }
    addnumber();
    display();
}


function up()
{
    for(let j=0;j<4;j++)
    {
        let iRow = [];
        for(let i=0;i<4;i++)
        {
            if(grid[i][j]!=0)
            {
                iRow.push(grid[i][j]);
            }
        }
        let frow =[];
        while(iRow.length>0)
        {
            if(iRow.length>1)
            {
                if(iRow[0]==iRow[1])
                {
                    frow.push(2*iRow.shift());
                    iRow.shift();
                }
                else{
                    frow.push(iRow.shift());
                }
            }
            else{
                frow.push(iRow.shift());
            }
        }
        
        for(let i=0;i<4;i++)
        {
            if(i<frow.length)
            {
                grid[i][j]=frow[i];
            }
            else{
                grid[i][j]=0;
            }
        }
        
    }
    addnumber();
    // Display newly updated grid
    display();
}

function down()
{
    for(let j=0;j<4;j++)
    {
        let iRow = [];
        for(let i=0;i<4;i++)
        {
            if(grid[i][j]!=0)
            {
                iRow.push(grid[i][j]);
            }
        }
        let frow =[];
        while(iRow.length>0)
        {
            if(iRow.length>1)
            {
                if(iRow[iRow.length-1]==iRow[iRow.length-2])
                {
                    frow.push(2*iRow.pop());
                    iRow.pop();
                }
                else{
                    frow.push(iRow.pop());
                }
            }
            else{
                frow.push(iRow.pop());
            }
        }
        for(let i=3;i>=0;i--)
        {
            if(i>3-frow.length)
            {
                grid[i][j]=frow[3-i];
            }
            else{
                grid[i][j]=0;
            }
        }
    }
    addnumber();
    // Display newly updated grid
    display();
}
window.addEventListener("keydown", function(e){
    if(e.code=="ArrowLeft"){left();}
    else if(e.code=="ArrowRight"){right();}
    else if(e.code=="ArrowUp"){up();}
    else if(e.code=="ArrowDown"){down();}
})