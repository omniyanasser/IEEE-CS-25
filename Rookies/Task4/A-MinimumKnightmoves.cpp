#include <iostream>
#include <queue>
using namespace std;
struct Knight{
    int row,col,counter;
};

int moves_x[]={1,1,-1,-1,2,2,-2,-2};
int moves_y[]={2,-2,2,-2,1,-1,1,-1};

bool chessboard(int row,int col){
    return(row>=0 && row<8 && col>=0 && col<8);
}
int moves(int startRow, int startCol,int destRow, int destCol){
    if(startRow ==destRow && startCol== destCol ) {
        return 0;
    }

    bool visited[8][8]={false};
    queue <Knight> q;
    q.push({startRow,startCol,0});
    visited[startRow][startCol]= true;

    while(!q.empty()){
        Knight curr = q.front();
        q.pop();

        for(int i=0; i<8; i++){
            int newRow = curr.row + moves_x[i];
            int newCol = curr.col + moves_y[i];

            if(chessboard(newRow,newCol)&& !visited[newRow][newCol]){
                if(newRow==destRow && newCol==destCol){
                    return curr.counter +1;
                }

                visited[newRow][newCol] = true;
                q.push({newRow,newCol,curr.counter +1});
            }
        }
    }
    return -1;
}

int main()
{
    int t;
    cin>>t;

    while(t--){
        string start,dest;
        cin>>start>>dest;

        int startRow=start[0] - 'a';
        int startCol=start[1] - '1';
        int destRow= dest[0] - 'a';
        int destCol= dest[1] - '1';

        cout<<moves(startRow ,startCol,destRow,destCol)<<endl;
    }

    return 0;
}
