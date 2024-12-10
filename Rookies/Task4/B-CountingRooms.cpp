#include <iostream>
#include<queue>
using namespace std;

struct pos{
    int row,col;
};

int move_x[]={0,0,1,-1};
int move_y[]={1,-1,0,0};

bool bound(int row, int col, int n, int m){
    return(row>=0 && row<n && col>=0 && col<m);
}

int bfs(vector<string>&map, int startRow, int startCol, int n, int m){
    queue<pos> q;
    q.push({startRow,startCol});
    map[startRow][startCol] = '#';

    while(!q.empty()){
        pos curr = q.front();
        q.pop();

        for(int i=0; i<4; i++){
            int newRow = curr.row + move_x[i];
            int newCol = curr.col + move_y[i];

            if(bound(newRow,newCol,n,m)&& map[newRow][newCol]=='.'){
                map[newRow][newCol]='#';
                q.push({newRow,newCol});
            }
        }
    }
    return 1;
}

int rooms(vector<string>&map, int n,int m){
    int counter=0;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            if(map[i][j]=='.'){
                counter+= bfs(map,i,j,n,m);
            }
        }
    }
    return counter;
}

int main()
{
   int n,m;
   cin>>n>>m;

   vector<string>map(n);
   for(int i=0; i<n ;i++){
    cin>>map[i];
   }

   cout<<rooms(map,n,m)<<endl;

    return 0;
}
