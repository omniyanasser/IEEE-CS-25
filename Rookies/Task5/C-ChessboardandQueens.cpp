#include <iostream>

using namespace std;

char chessboard[9][9];
bool colVis[8],mainDiagVis[16],antiDiagVis[16];

int rec(int row){
    if(row==8){
        return 1;
    }
    int ways=0;

    for(int col=0;col<8; col++){

         if(chessboard[row][col] != '.' || colVis[col]==true || mainDiagVis[row-col +7]==true || antiDiagVis[row+col]==true){
            continue;
         }

        chessboard[row][col]= 'q';
        colVis[col]=true;
        mainDiagVis[row-col +7]=true;
        antiDiagVis[row+col]=true;

        ways +=rec(row+1);

        chessboard[row][col]='.';
        colVis[col]=false;
        mainDiagVis[row-col +7]=false;
        antiDiagVis[row+col]=false;
    }
    return ways;

}

int main()
{
    for(int i=0; i<8; i++){
        cin>>chessboard[i];
    }

    cout<<rec(0)<<endl;

    return 0;
}
