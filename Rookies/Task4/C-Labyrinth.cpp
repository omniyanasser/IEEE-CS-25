#include <iostream>
#include<queue>
#include<vector>
#include<string>
#include<algorithm>

using namespace std;

struct pos
{
    int row,col;
};

pos find_A(vector<string>&map, int n, int m)
{
    for(int i=0; i<n; i++)
    {
        for(int j=0; j<m; j++)
        {
            if(map[i][j]=='A')
            {
                return{i,j};
            }
        }
    }
    return {0, 0};
}


int move_x[]= {0,0, 1,-1};
int move_y[]= {1, -1, 0, 0};
char moves[]= {'R','L','D','U'};

bool bound(int row, int col, int n, int m)
{
    return(row>=0 && row<n && col>=0 && col<m);
}

void bfs(vector<string>&map, int startRow, int startCol, int n, int m)
{
    queue<pos> q;
    vector<vector<int>> direction(n,vector<int>(m, -1));
    vector<vector<bool>> visited(n,vector<bool>(m,false));

    q.push({startRow,startCol});
    visited[startRow][startCol] =true;


    while(!q.empty())
    {
        pos curr = q.front();
        q.pop();

        for(int i=0; i<4; i++)
        {
            int newRow = curr.row + move_x[i];
            int newCol = curr.col + move_y[i];

            if(bound(newRow,newCol,n,m)&&!visited[newRow][newCol] && map[newRow][newCol]!= '#' && map[newRow][newCol] != 'A')
            {
                visited[newRow][newCol]= true;
                direction[newRow][newCol]= i;

                if(map[newRow][newCol]=='B')
                {
                    string path = "";
                    int x = newRow, y =newCol;

                    while(!(x== startRow && y== startCol))
                    {
                        int new_dir = direction[x][y];
                        path +=moves[new_dir];
                        x -=move_x[new_dir];
                        y -= move_y[new_dir];
                    }
                    reverse(path.begin(), path.end());

                    cout<<"YES"<<endl;
                    cout<<path.size()<<endl;
                    cout<<path<<endl;
                    return;
                }
                q.push({newRow, newCol});

            }
        }

    }

    cout<<"NO"<<endl;
}


int main()
{
    int n,m;
    cin>>n>>m;

    vector<string>map(n);
    for(int i=0; i<n; i++)
    {
        cin>>map[i];
    }

    pos start = find_A(map,n,m);

    bfs(map, start.row, start.col, n, m);





    return 0;
}
